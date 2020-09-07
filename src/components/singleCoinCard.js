
import React from 'react';
import {Link} from 'react-router-dom';


class SingleCoinCard extends React.Component {
constructor(props){
    super(props)
    this.state = {
        amountOfCoin: ''
    }

   
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
                   <p>{price_change_percentage_24h}%</p>
                   <span>Vrednost</span> 
               </div>
        </div >
        </Link>
            </>
        )
    }}
        
export default SingleCoinCard;