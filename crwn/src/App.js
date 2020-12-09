import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage/homepage';
import './App.scss';
import ShopPage from './components/shop/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUp from './components/SignInandSignUp/SignIn&SignUp';
import {auth} from './components/Firebase/Firebase.util';

//we want to store the state of loggedIn user in our app state so that we can
//pass it through the components that need it.
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
    //to close the subscription we call a new method called
    unsubscribeFromAuth = null;
  componentDidMount(){
    //onAuthStateChanged is a opensubscription bcoz its an open messaging system between 
    //our application and firebase. Whenever any changes occur on firebase from any source related to aPP, firebase sends out a msg that
    // says that the auth state has changed means they have signed in either using google or email & pwd
    // as this is opensubscription we also need to close the subscription when the component unmounts to avoid memory leaks
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser : user})
      console.log(user);
    })
  
  }
  componentWillUnmount(){
   
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/> 
        <Route  path = '/SignIn' component = {SignInAndSignUp}/>
      </Switch>
      
        
    </div>
  );
  }
  }


export default App;
