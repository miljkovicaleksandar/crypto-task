import React from 'react';
import {fetchCoins} from '../app/services/fetchCoins';
import SingleCoinCard from './singleCoinCard';



class listOfCoins extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            slicedListOfCoins : []
        }
    }
    
   async onLoadCoins(){
       let response = await fetchCoins();
       let coins = response.slice(0,50); 
       this.setState({slicedListOfCoins: coins});
       
    }
  
    
    
    componentDidMount(){
        this.onLoadCoins()
        setInterval(()=>this.onLoadCoins(), 60000)
        
    }
    
    

    render(){

        if(!this.state.slicedListOfCoins){
            return "LOADING>>>>>>>>>>>>>>>>>>>>"
        }

        const {slicedListOfCoins} = this.state;
        
        return(
            <>
             {slicedListOfCoins.map(coin => <SingleCoinCard coin = {coin}  key = {`${coin.id}`} />)}
            </>
        )
    }
}

export default listOfCoins;