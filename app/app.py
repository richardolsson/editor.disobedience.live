import os
import tempfile
import pdfkit
import imgkit

from flask import Flask, render_template, request, Response

app = Flask(__name__)

SIZES = {
    'fbheader': (1200, 600),
    'instagram': (1200, 1200),
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/asset')
def asset():
    style = ''
    with open('static/main.css', 'r') as f:
        style = f.read()

    data = {
        'style': style,
        'medium': request.args.get('m'),
        'format': request.args.get('f'),
        'grad': float(request.args.get('g')) * 900,
        'title': request.args.get('t'),
        'info': request.args.get('i'),
        'static_path': '/static',
    }

    if request.args.get('preview', False):
        return render_template('asset.html', **data)
    else:
        app_path = os.path.abspath(__file__)
        app_dir = os.path.dirname(app_path)
        static_path = os.path.join(app_dir, 'static')

        data['static_path'] = static_path
        data['style'] = data['style'].replace('/static', static_path)

        html = render_template('asset.html', **data)

        if data['medium'] == 'print':
            pdf = pdfkit.from_string(html, False, options={
                'disable-smart-shrinking': '',
                'page-width': '210',
                'page-height': '297',
                'margin-bottom': '0',
                'margin-left': '0',
                'margin-right': '0',
                'margin-top': '0',
            })

            resp = Response(pdf)
            resp.headers['Content-Type'] = 'application/pdf'
            resp.headers['Content-Disposition'] = 'attachment; filename=asset.pdf'
            return resp
        elif data['medium'] == 'screen':
            w, h = SIZES[data['format']]
            img = imgkit.from_string(html, False, options={
                'disable-smart-width': '',
                'width': w,
                'height': h,
            })

            resp = Response(img)
            resp.headers['Content-Type'] = 'image/jpeg'
            resp.headers['Content-Disposition'] = 'attachment; filename=asset.jpg'
            return resp


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
