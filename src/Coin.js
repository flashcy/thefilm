import React from 'react';

function Coin() {
    const [loading, setLoading] = React.useState(true);
    const [coins, setCoins] = React.useState([]);
    const [selected, setSelected] = React.useState(0);
    React.useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    const changeSelect = (e) => {
        setSelected(e.target.value);
    }
    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? (
                <strong>Loading...</strong>
            ):(
                <div>
                    <select style={{width:"150px"}} value={selected} onChange={changeSelect}>
                        {coins.map((coin, index) => <option value={index} key={coin.id}>{coin.name} ({coin.symbol})</option>)}
                    </select>
                    <span>
                        ${coins[selected].quotes.USD.price} USD
                    </span>
                </div>
            )}
        </div>
    );
}

export default Coin;