
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


handleOnEnterKeyDown = (e) =>{
    if(e.key === "Enter"){
        this.updateAmountOfCoin();
    }
}

updateAmountOfCoin = () => {

    localStorage.setItem(`${this.props.coin.id}`, this.state.amountOfCoin);
    this.setState(prevState => ({ ...prevState, valueUpdated: !prevState.valueUpdated, amountOfCoin:""}));
      
     
}

    render(){
        const {id, name, symbol, image, price_change_percentage_24h,current_price } = this.props.coin;
        const userValueOfCoin = (Number(localStorage.getItem(this.props.coin.id)) * Number(current_price)).toFixed(3);
        return(
        <>
            <Link to={`coin-details/${id}`} >
                <div className="singleCard">
                    <span><img src={image} alt=""/> {symbol}</span>
                    <span>{name}</span>
                    <span>$ {current_price}</span>

                    {price_change_percentage_24h > 0 ?
                    <span className="upArrow" style={{color:"green"}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Green-Up-Arrow.svg/1200px-Green-Up-Arrow.svg.png"/>{price_change_percentage_24h}%</span>:
                    <span className="downArrow" style={{color:"red"}}><img src="https://library.kissclipart.com/20180831/oxe/kissclipart-down-red-clipart-computer-icons-clip-art-e10b82e1ef81f823.jpg"/>{price_change_percentage_24h}%</span>}

                    {userValueOfCoin > 0 ? <span style={{color:"#1cadee"}}>$ {userValueOfCoin}</span>:
                    <span style={{color:"#9b9b9b"}}>$ {userValueOfCoin}</span>}
                    
                </div>
            </Link>
            <div className="inputVal">

                {this.state.amountOfCoin.length > 0 ? <input  onKeyPress={this.handleOnEnterKeyDown} value={this.state.amountOfCoin} onChange={this.handleAmountOfCoin}/> : <input value={this.state.amountOfCoin} onChange={this.handleAmountOfCoin} />}
                
                {this.state.amountOfCoin.length > 0 ? <button onClick={this.updateAmountOfCoin}>Update</button> : <button disabled={true} onClick={this.updateAmountOfCoin}>Update</button>}
                
            </div>
        </>
        )
    }}
        
export default SingleCoinCard;