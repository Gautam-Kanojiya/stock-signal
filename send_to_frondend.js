import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Python Data in React</h1>
            {data ? (
                <div>
                    <p>{data.message}</p>
                    <p>Value: {data.value}</p>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default App;


// ----------------------------------------------------------
data_generator.py

python
Copy code
import json

def generate_data():
    # Generate or fetch your data
    data = {"message": "Hello from Python!", "value": 42}
    return data

if __name__ == "__main__":
    data = generate_data()
    with open('data.json', 'w') as f:
        json.dump(data, f)