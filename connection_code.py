from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/data', methods=['POST'])

def receive_data():
    try:
        data = request.get_json()
        if data:
            print("Received data:", json.dumps(data, indent=2))
            # Process the data as needed
            return jsonify({"status": "success", "message": "Data received"}), 200
        else:
            return jsonify({"status": "failure", "message": "No data received"}), 400
    except Exception as e:
        print(f"Error processing request: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
