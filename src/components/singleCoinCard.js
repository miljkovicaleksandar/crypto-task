
import React from 'react';
import {Link} from 'react-router-dom';


class SingleCoinCard extends React.Component {
constructor(props){
    super(props)
    this.state = {
        amountOfCoin: '',
        valueUpdated: true
    }

   
}
handleAmountOfCoin = (e) => {
    this.setState({ amountOfCoin: e.target.value });
}

// sumOfAllValues = () =>{
//     return Object.keys(window.localStorage).map(coin=>Number(window.localStorage[coin])).reduce( (accumulator, currentValue) => accumulator + currentValue).toFixed(3);
// }

handleOnEnterKeyDown = (e) =>{
    if(e.key === "Enter"){
        this.updateAmountOfCoin();
    }
}

updateAmountOfCoin = () => {

    localStorage.setItem(`${this.props.coin.id}`, this.state.amountOfCoin);
    // console.log(this.sumOfAllValues());
    this.setState(prevState => ({ ...prevState, valueUpdated: !prevState.valueUpdated, amountOfCoin:""}));
      
     
}

    render(){
        const {id, name, symbol, image, price_change_percentage_24h,current_price } = this.props.coin;
        return(
        <>
            <Link to={`coin-details/${id}`} >
                <div className="singleCard">
                    <span><img src={image} alt=""/> {symbol}</span>
                    <span>{name}</span>
                    <span>$ {current_price}</span>
                    {price_change_percentage_24h > 0 ?
                    <span style={{color:"green"}}>{price_change_percentage_24h}%</span>:
                    <span style={{color:"red"}}>{price_change_percentage_24h}%</span>}
                    <span>$ {(Number(localStorage.getItem(this.props.coin.id)) * Number(current_price)).toFixed(3)}</span>
                    
                </div>
            </Link>
            <div className="inputVal">

                {this.state.amountOfCoin.length > 0 ? <input  onKeyPress={this.handleOnEnterKeyDown} value={this.state.amountOfCoin} onChange={this.handleAmountOfCoin}/> : <input value={this.state.amountOfCoin} onChange={this.handleAmountOfCoin} />}
                
                {this.state.amountOfCoin.length > 0 ? <button onClick={this.updateAmountOfCoin}>Update</button> : <button disabled="true" onClick={this.updateAmountOfCoin}>Update</button>}
                
            </div>
        </>
        )
    }}
        
export default SingleCoinCard;