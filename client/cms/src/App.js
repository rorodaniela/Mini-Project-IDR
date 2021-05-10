import './App.css';
import Login from './pages/Login';
import {Switch, Route} from 'react-router-dom'
import Purchase from './pages/Purchase';
import Customer from './pages/Customer';
import Home from './pages/Home';
import User from './pages/User';
import Invoice from './pages/Invoice';
import Role from './pages/Role';
import RoleDetail from './components/RoleDetail'

function App() {
  return (
    <Switch>
      <div className='App'>
        <Route path='/user'>
          <User />
        </Route>
        <Route path='/role/:id'>
          <RoleDetail/>
        </Route>
        <Route path='/role'>
          <Role/>
        </Route>
        <Route path='/purchase'>
          <Purchase />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/invoice'>
          <Invoice />
        </Route>
        <Route path='/customer'>
          <Customer />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
