import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage/homepage';
import './App.scss';
import ShopPage from './components/shop/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUp from './components/SignInandSignUp/SignIn&SignUp';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/> 
        <Route  path = '/SignIn' component = {SignInAndSignUp}/>
      </Switch>
      
        
    </div>
  );
}

export default App;
