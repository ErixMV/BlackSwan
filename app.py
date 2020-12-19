import os
from flask_cors import CORS, cross_origin
from flask import Flask, render_template, send_from_directory, request, jsonify, make_response

from algorithm import Algorithm

app = Flask(__name__, static_folder='client/build', static_url_path='')
cors = CORS(app)

@app.route('/api')
@cross_origin()
def Welcome():
    return "Welcome to the API!!!"

@app.route('/api/recomend/')
@cross_origin()
def getRecomendation():

    book_name = str(request.args.get('book'))

    algorithm = Algorithm()
    data = algorithm.use(book_name)
    return jsonify(data = data)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')