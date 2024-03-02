from flask import Flask, request, jsonify

# flask app

app = Flask(__name__)

# create route
# routes are endpoints for a server
@app.route("/")
def home():
    return "Home"


# running the app
if __name__ == '__main__':
    app.run(debug=True)