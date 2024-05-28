import pandas as pd
# from sqlalchemy import create_engine
import ta
import requests

# File path to the CSV file
csv_file_path = '../NIFTY 50.csv'

# Read data from the CSV file
df = pd.read_csv(csv_file_path)

signal = None

if (df['vwap'] > df[['close']]) :
    signal = 'Buy'
if (df['vwap'] < df[['close']]) :
    signal = 'Sell'
    
    
    