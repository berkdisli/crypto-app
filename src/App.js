import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from axios;

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
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
        {/* <h1 className="coin-text">Search your desired coin</h1> */}
        <form action="">
          <input type="text" className="coin-input" placeholder="Provide the coin name" onChange={handleChange} />

        </form>

      </div>


    </div>
  );
}

export default App;
