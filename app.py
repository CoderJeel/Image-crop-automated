import flask
import pandas as pd
import numpy as np
import pickle
from flask import Flask, render_template, redirect, request, send_from_directory ,send_file,jsonify
from werkzeug.utils import secure_filename
import json
import os
from main import unpack_bz2,img_alligned

landmarks_model_path = unpack_bz2("shape_predictor_68_face_landmarks.dat.bz2")


app = Flask(__name__)
app.secret_key = "super super secret key"

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/submit", methods=["GET", "POST"])
def upload():

    if (request.method == "POST"):
        data = request.form.get('inpFile')
        f1 = request.files['inpFile']
        f1.save(os.path.join('input_data', secure_filename(f1.filename)))
        name = img_alligned(f1.filename,landmarks_model_path)

        
#        output = model.predict(df[freq_list])
        file_name = os.path.splitext(name)[0]
        output_name = os.path.join('output_file', str(name))

    return send_file(output_name)



if __name__ == "__main__":
    app.run(debug=True)
