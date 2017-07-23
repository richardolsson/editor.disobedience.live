from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/asset-preview')
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
    }
    return render_template('asset.html', **data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
