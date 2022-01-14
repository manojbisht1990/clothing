import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import {Route, Switch, Link} from 'react-router-dom';

const Homepage1 = (props) =>{
  console.log(props);
  return(
    
    <div>
    <button onClick={() => (props.history.push('/topics'))}>Topics</button>
    Homepage
    </div>
  )
}

const Topics = (props) =>(
  <div>
  <Link to={`${props.match.url}/13`}>Topics</Link>
  Topic Page</div>
)
const TopicsDetails = (props) =>{
  console.log(props);
  return(
  <div>Topics Details Page {props.match.params.topicId}</div>
  )
}

function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/' component={Homepage1} />
      <Route exact path='/topics' component={Topics} />
      <Route  path='/topics/:topicId' component={TopicsDetails} />
    </Switch>
    </div>
  );
}

export default App;
