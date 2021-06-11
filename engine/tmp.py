from main import img_alligned,unpack_bz2

landmarks_model_path = unpack_bz2("shape_predictor_68_face_landmarks.dat.bz2")


IMG_name = '1.jpg'

img_alligned(IMG_name,landmarks_model_path)