import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import {Route, Switch} from 'react-router-dom';


const Hats = () => {
  return(
    <div>Hello this is hats page</div>
  )
}

function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop/hats' component={Hats} />
    </Switch>
    </div>
  );
}

export default App;
