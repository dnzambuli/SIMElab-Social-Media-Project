from flask import Flask
from app.api.data_api import data_api

app = Flask(_name_)

app.register_blueprint(data_api)

if _name_ == "_main_":
    app.run(debug=True)