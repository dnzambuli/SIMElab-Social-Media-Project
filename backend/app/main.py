from flask import Flask
from app.api.data_api import data_api

app = Flask(_name_)

app.register_blueprint(data_api)

if __name__ == "__main__":
    app.run(debug=True)