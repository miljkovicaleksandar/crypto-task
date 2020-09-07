import API_BASE_URL from '../../shared/baseUrl';

 const  fetchCoins = async () => {

    let response = await fetch(`${API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`);
    let coin = await response.json();
    return coin;

}

 const fetchSingleCoin = async (id) => {
    let response = await fetch(`${API_BASE_URL}/coins/${id}`);
    let singleCoin = await response.json();
    return singleCoin;
 }
 
    
export {fetchCoins, fetchSingleCoin};

