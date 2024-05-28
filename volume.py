import pandas as pd
# from sqlalchemy import create_engine
import ta
import requests

# File path to the CSV file
csv_file_path = '../NIFTY 50.csv'

# Read data from the CSV file
df = pd.read_csv(csv_file_path)

signal = None

# Calculate the buy signals
def calc_volume():
    if df.loc[ 'volume'] > df.loc[-1, 'volume'] and \
        df.loc[ 'volume'] > df.loc[-2, 'volume'] and \
        df.loc[ 'volume'] > df.loc[-3, 'volume'] and \
        df.loc[ 'volume'] > df.loc[-4, 'volume']:
        df.loc[ 'buy_signal'] = 'buy'
    
    return signal

