import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Component/Views/Login';
import SignUp from './Component/Views/SignUp';
import TimeLine from './Component/Views/TimeLine';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login/>
        </Route>
        <Route path='/SignUp'>
          <SignUp/>
        </Route>
        <Route path='/TimeLine'>
          <TimeLine/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
