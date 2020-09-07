
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
updateAmountOfCoin = () => {

    localStorage.setItem(`${this.props.coin.id}`, this.state.amountOfCoin);
    this.setState(prevState => ({ ...prevState, valueUpdated: !prevState.valueUpdated }));
}

    render(){
        const {id, name, symbol, image,price_change_percentage_24h,current_price } = this.props.coin;
        return(
        <>
            <Link to={`coin-details/${id}`} >
                <div data-id={`${id}`}>
                    <div>
                        <img src={image} />
                        <p>{symbol}</p>
                        <p>{name}</p>
                        <p>${current_price}</p>
                        {price_change_percentage_24h > 0 ?
                        <p style={{color:"green"}}>{price_change_percentage_24h}%</p>:
                        <p style={{color:"red"}}>{price_change_percentage_24h}%</p>}
                        <span>Vrednost</span> 
                        <p>{Number(localStorage.getItem(this.props.coin.id)) * Number(current_price)}</p>
                    </div>
                </div >
            </Link>
            <input value={this.state.amountOfCoin} onChange={this.handleAmountOfCoin} />
            <button onClick={this.updateAmountOfCoin}>Update</button>
        </>
        )
    }}
        
export default SingleCoinCard;