import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
  
  constructor(){
    super();

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){

    this.unsubscribeFromAuth =  auth.onAuthStateChanged( user => {
      this.setState({ currentUser:user },() => console.log('user',user))
      
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
}

  render(){
    const {currentUser} = this.state;
    return (
      <div >
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
      </div>
    );
  }
}

export default App;
