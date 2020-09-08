import React from 'react';
import {fetchSingleCoin} from '../app/services/fetchCoins';

class singleCoinPage extends React.Component{
        constructor(props){
        super(props)
        this.state = {
            singleCoin : null
        }
    }

    async onLoadSingleCoin(id){
        let coinInfo = await fetchSingleCoin(id);
        this.setState({singleCoin: coinInfo})
        console.log(coinInfo);
        
    } 
    componentDidMount(){
        this.onLoadSingleCoin(this.props.match.params.id)
    }
    
    render(){
        
        
        if(!this.state.singleCoin){
            return "RELOADING>>>>>>>>>>"
        }
        const { name, market_data, symbol} = this.state.singleCoin;
        return(
           
            <>
                <p>{name}</p>
                <p>{symbol}</p>
                <p>${market_data.current_price.usd}</p> 
                {market_data.price_change_percentage_24h > 0 ? 
                <span style={{color:"green"}}>{market_data.price_change_percentage_24h}%</span> :
                <span style={{color:"red"}}>Price change:{market_data.price_change_percentage_24h}%</span>}
                <p>Value: ${(Number(localStorage.getItem(this.props.match.params.id)) * Number(market_data.current_price.usd)).toFixed(3)}</p>
            </>
        )
    }

     
}

export default singleCoinPage;