import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import Homepage from './components/Homepage/homepage';
import './App.scss';
import ShopPage from './components/shop/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUp from './components/SignInandSignUp/SignIn&SignUp';
import {auth,createUserProfileDocument, firestore} from './components/Firebase/Firebase.util';
import {connect} from 'react-redux'
import {setCurrentUser} from './Redux/User/user-actions'

class App extends React.Component {
 
    unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async( userAuth,additionalData) => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(snapShot)
        })
      }
      this.props.setCurrentUser({userAuth});
     
  })
}

  componentWillUnmount()
   
  {  
    this.unsubscribeFromAuth() 
  }
  

  render()
  {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/> 
        <Route  path = '/SignIn' render = {() =>
        this.props.currentUser ? (<Redirect to ='/'/>) : (<SignInAndSignUp/>)}/>
      </Switch>    
    </div>
  );
  }
  }
const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})
export default connect(mapStateToProps,mapDispatchToProps)(App);
