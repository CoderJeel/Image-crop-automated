import flask
import pandas as pd
import numpy as np
import pickle
from flask import Flask, render_template, redirect, request, send_from_directory ,send_file,jsonify
from werkzeug.utils import secure_filename
import json
from data_processing import processing_data

landmarks_model_path = unpack_bz2("shape_predictor_68_face_landmarks.dat.bz2")


app = Flask(__name__)
app.secret_key = "super super secret key"

@app.route("/")
def index():
    return "Try on test"


@app.route("/submit", methods=["GET", "POST"])
def upload():
    if (request.method == "POST"):
        data = request.form.get('data')
        df = processing_data(data)
        output = model.predict(df[freq_list])

    return jsonify({"PCR_str" : str(output[0])})



if __name__ == "__main__":
    app.run(debug=True)