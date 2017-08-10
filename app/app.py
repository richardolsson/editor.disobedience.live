import os
import tempfile
import pdfkit
import imgkit

from flask import Flask, render_template, request, Response

app = Flask(__name__)

try:
    from .settings import STATIC_PATH, STATIC_DIR
except:
    STATIC_PATH = '/static'
    STATIC_DIR = '/var/app/static'

SIZES = {
    'fbevent': (1920, 1080),
    'instagram': (1200, 1200),
    'twitter': (1200, 600),
}

@app.route('/')
def index():
    data = {
        'static_path': STATIC_PATH,
        'assets': (
            ('screen', 'instagram', 'Instagram photo', 'JPEG'),
            ('screen', 'fbevent', 'Facebook event header', 'JPEG'),
            ('screen', 'twitter', 'Twitter sharing', 'JPEG'),
            ('print', 'poster', 'Poster (A4)', 'PDF'),
        )
    }

    return render_template('index.html', **data)

@app.route('/asset')
def asset():
    style = ''
    with open(STATIC_DIR + '/main.css', 'r') as f:
        style = f.read()

    data = {
        'style': style,
        'medium': request.args.get('m'),
        'format': request.args.get('f'),
        'grad': float(request.args.get('g')) * 900,
        'title': request.args.get('t').replace('\n', '<br>'),
        'info': request.args.get('i').replace('\n', '<br>'),
        'static_path': STATIC_PATH,
    }


    if request.args.get('preview', False):
        data['style'] = data['style'].replace('url(', 'url(' + STATIC_PATH + '/')

        return render_template('asset.html', **data)
    else:
        data['static_path'] = STATIC_DIR
        data['style'] = data['style'].replace('url(', 'url(' + STATIC_DIR + '/')

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
