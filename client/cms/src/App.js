import './App.css';
import Login from './pages/Login';
import {Switch, Route} from 'react-router-dom'
import Purchase from './pages/Purchase';

function App() {
  return (
    <Switch>
      <div className="App">
        <Route path='/login'>
          <Login/>
        </Route>
        <Route exact path='/'>
          <Purchase/>
        </Route>
      </div>
    </Switch>
  );
}

export default App;
