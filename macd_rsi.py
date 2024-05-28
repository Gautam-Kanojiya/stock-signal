import pandas as pd
# from sqlalchemy import create_engine
import ta
import requests

# Database connection settings
# db_config = {
#     'username': 'your_username',
#     'password': 'your_password',
#     'host': 'your_host',
#     'port': 'your_port',
#     'database': 'your_database'
# }

# Create the database engine
# engine = create_engine(f"mssql+pyodbc://{db_config['username']}:{db_config['password']}@{db_config['host']}:{db_config['port']}/{db_config['database']}?driver=ODBC+Driver+17+for+SQL+Server")

# Fetch the data
# query = "SELECT date, close FROM your_table"
# df = pd.read_sql(query, engine)
# ---------------------------------------------------------------------------------------------------------


# File path to the CSV file
csv_file_path = './NIFTY 50.csv'

# Read data from the CSV file
df = pd.read_csv(csv_file_path)


# Calculate MACD
df['macd'] = ta.trend.MACD(df['close']).macd()
df['macd_signal'] = ta.trend.MACD(df['close']).macd_signal()

# Calculate RSI
df['rsi'] = ta.momentum.RSIIndicator(df['close']).rsi()

# Generate buy/sell signals
df['signal'] = None
df.loc[(df['macd'] > df['macd_signal']) & (df['rsi'] < 30), 'signal'] = 'buy'
df.loc[(df['macd'] < df['macd_signal']) & (df['rsi'] > 70), 'signal'] = 'sell'

print(df.tail(10))

# print(df['signal'])
 # Save the DataFrame with indicators and signals to a new CSV file
df.to_csv('./res.csv', index=False)
print(f"Data saved to {'./res.csv'}")


# Send signals to the front end ------------------------------------------------------------------------------
def send_signal(signal, url='http://your_front_end_endpoint'):
    if signal:
        response = requests.post(url, json={'signal': signal})
        return response.status_code
    return None

# Check the latest signal and send it
latest_signal = df.iloc[-1]['signal']
status_code = send_signal(latest_signal)

if status_code:
    print(f"Signal sent successfully: {latest_signal}, Status code: {status_code}")
else:
    print("No signal to send or error occurred.")
