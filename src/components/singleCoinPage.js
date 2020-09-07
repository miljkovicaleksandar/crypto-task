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
                <span >{market_data.price_change_percentage_24h}%</span>
                
            </>
        )
    }

     
}

export default singleCoinPage;