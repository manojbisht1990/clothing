import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop-page/shop-page.component.jsx';
import {Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
