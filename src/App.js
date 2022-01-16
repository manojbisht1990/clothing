import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';


function App() {
  return (
    <div >
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
