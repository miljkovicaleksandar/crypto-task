import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import listOfCoins from './components/listOfCoins';
import singleCoinPage from './components/singleCoinPage'

function App() {
  return (
    <>
     <Switch>
      <Route exact path="/" component={listOfCoins}/>
      <Route exact path="/coin-details/:id" component={singleCoinPage}/>
     </Switch>
</>
  );
}

export default App;
