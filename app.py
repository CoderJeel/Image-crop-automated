import flask
import pandas as pd
import numpy as np
import pickle
from flask import Flask, render_template, redirect, request, send_from_directory ,send_file,jsonify
from werkzeug.utils import secure_filename
import json
import os
from main import unpack_bz2,img_alligned
import wget

url = 'https://github.com/CoderJeel/Image-crop-automated/raw/master/engine/shape_predictor_68_face_landmarks.dat.bz2'
filename = wget.download(url)
landmarks_model_path = unpack_bz2("shape_predictor_68_face_landmarks.dat.bz2")


app = Flask(__name__)
app.secret_key = "super super secret key"

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/submit", methods=["GET", "POST"])
def upload():

    if (request.method == "POST"):
        # check if the post request has the file part
        input1 = request.form.get('inpText')
        input2 = request.form.get('inpText2')
        data = request.form.get('inpFile')
        f1 = request.files['inpFile']
        f1.save(os.path.join('input_data', secure_filename(f1.filename)))
        name = img_alligned(f1.filename,landmarks_model_path)

        print('+++++++++++++++++++++++++++++',f1.filename)
#        output = model.predict(df[freq_list])
        #file_name = os.path.splitext(f1.filename)[0]
        #output_name = os.path.join('output_file', f1.filename)

    return "Done Saved"



if __name__ == "__main__":
    app.run(debug=True)
