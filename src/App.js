import React, { useEffect, useState } from 'react';
import './App.css';
import Coin from './coin';

const axios = require('axios').default;

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      }).catch(error => console.log(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coing =>
    coing.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <form action="">
          <input type="text" className="coin-input" placeholder="Search the coin..." onChange={handleChange} />
        </form>
      </div>
      <tr className='tabs'>
        <td className='tab'>Coin</td>
        <td className='tab'>Symbol</td>
        <td className='tab'>Total Supply</td>
        <td className='tab'>Price</td>
        <td className='tab'>24h</td>
        <td className='tab'>Market Cap</td>
      </tr>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
            totalSupply={coin.total_supply}
          />
        )
      })}
    </div>
  );
}

export default App;
