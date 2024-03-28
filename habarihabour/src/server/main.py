from flask import Flask, request, jsonify
import random
from methods import kiss_data, pulse_data, ghafla_data 
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Your existing functions (ghafla_data, pulse_data, kiss_data) should be modified to return the results_list directly

@app.route('/', methods=['POST'])
def search():
    name = request.json['name']
    results = kiss_data(name) + pulse_data(name) + ghafla_data(name)
    random_results = random.sample(results, min(5, len(results)))  # Get 5 or fewer random results
    return jsonify(random_results)

if __name__ == '__main__':
    app.run(debug=True, port=5173)
