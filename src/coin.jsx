import React from "react";
import "./coin.css";

const Coin = ({
  image,
  name,
  symbol,
  price,
  priceChange,
  marketCap,
  totalSupply,
}) => {
  return (
    <div className="coin-container">
      <table>
        <div className="coin-row">
          <tr className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </tr>
          <tr className="coin-data">
            <td className="coin-total-supply"> ${Math.trunc(totalSupply)}</td>
            <td className="coin-price"> ${price}</td>
            {priceChange < 0 ? (
              //change for 24 hours
              <td className="coin-percent red">{priceChange.toFixed(2)}%</td>
            ) : (
              <td className="coin-percent green">{priceChange.toFixed(2)}%</td>
            )}
            <td className="coin-marketcap">${marketCap.toLocaleString()}</td>
          </tr>
        </div>
      </table>
    </div>
  );
};

export default Coin;
