from flask import Blueprint, request, jsonify
from app.data_extraction.extraction import extract_data

data_api = Blueprint('data_api', _name_)

@data_api.route('/api/extract', methods=['POST'])
def extract():
    try:
        data = request.get_json()
        name = data.get('name')
        if not name:
            return jsonify({"error": "Missing 'name' parameter"}), 400
        
        results = extract_data(name)
        return jsonify(results)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500