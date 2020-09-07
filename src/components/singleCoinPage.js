import React from 'react';


class singleCoinPage extends React.Component{
        constructor(props){
        super(props)
        this.state = {
            singleCoin : null
        }
    }


    
    render(){
        if(!this.state.singleCoin){
            return "RELOADING>>>>>>>>>>"
        }
       
        return(
           
            <>
                <p>test 01</p>
                
            </>
        )
    }

     
}

export default singleCoinPage;