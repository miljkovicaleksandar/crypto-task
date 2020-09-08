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
        this.setState({singleCoin: coinInfo});
        
    } 
    componentDidMount(){
        this.onLoadSingleCoin(this.props.match.params.id);
    }
    
    render(){
        
        
        if(!this.state.singleCoin){
            return (
                <>
                <div class="loader"></div>
                </>
            )
        }
        const { name, market_data, symbol, image} = this.state.singleCoin;
        return(
           
            <>
                
                <div className="singleCoinPageWrapper">
                    <img src={`${image.large}`}/>
                    <div className="singleCoinPageWrapper-title">
                        <h1>{name}</h1><span className="singleCoinPageWrapper-title-ticker">({symbol})</span>
                    </div>
                    <div className="singleCoinPageWrapper-values">
                        <p>Price: $ {market_data.current_price.usd} </p>
                        {market_data.price_change_percentage_24h > 0 ? 
                        <p style={{color:"green"}}>Price change: {market_data.price_change_percentage_24h}%</p> :
                        <p style={{color:"red"}}>Price change:{market_data.price_change_percentage_24h}%</p>}
                        <p>Value: $ {(Number(localStorage.getItem(this.props.match.params.id)) * Number(market_data.current_price.usd)).toFixed(3)}</p>
                    </div>
                </div>
            </>
        )
    }

     
}

export default singleCoinPage;