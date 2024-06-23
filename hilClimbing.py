import pandas as pd
import numpy as np
import yfinance as yf
import matplotlib.pyplot as plt
from scipy.signal import argrelextrema

def get_intraday_stock_data(symbol, interval='1d', start='2024-01-01', end='2024-06-21'):
    # Fetch intraday financial data
    stock_data = yf.download(symbol, start=start, end=end, interval=interval)
    return stock_data['Close']

def moving_average(data, window_size):
    return data.rolling(window=window_size).mean()

def exponential_moving_average(data, span):
    return data.ewm(span=span, adjust=False).mean()

def find_local_extrema(data, comparator, order):
    return argrelextrema(data.values, comparator, order=order)[0]

def plot_stock_data(symbol, original_data, averaged_data, maxima, minima):
    plt.figure(figsize=(12, 6))
    plt.plot(original_data, label='Close Price', color='blue')
    plt.plot(averaged_data, label='Exponential Moving Average', color='orange')
    plt.scatter(maxima.index, maxima, label='Local Maxima', color='red', marker='^')
    plt.scatter(minima.index, minima, label='Local Minima', color='green', marker='v')
    plt.xlabel('Date Time')
    plt.ylabel('Price')
    plt.title(f'Stock Prices with Local Minima and Maxima for {symbol} (5-Minute Interval)')
    plt.legend()
    plt.show()

def main(symbol):
    # Get stock data for the 5-minute interval
    close_prices = get_intraday_stock_data(symbol)

    # Perform averages
    ma = moving_average(close_prices, 5)
    ema = exponential_moving_average(ma, span=5)

    # Find local maxima and minima
    order = 10  # Number of points to consider for local minima/maxima
    local_maxima_indices = find_local_extrema(ema, np.greater, order)
    local_minima_indices = find_local_extrema(ema, np.less, order)
    
    # Map maxima and minima positions to the original data
    maxima = close_prices.iloc[local_maxima_indices]
    minima = close_prices.iloc[local_minima_indices]
    
    # Plot the results
    plot_stock_data(symbol, close_prices, ema, maxima, minima)

# Example usage
main('AAPL')
