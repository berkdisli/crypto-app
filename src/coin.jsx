import React from "react";
import "./coin.css";

const Coin = ({ image, name, symbol, price, priceChange, marketCap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price"> Price: ${price}</p>
          {priceChange < 0 ? (
            //change for 24 hours
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Market Cap: ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
