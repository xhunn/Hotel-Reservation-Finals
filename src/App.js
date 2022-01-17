import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from './Components/AppNavbar/AppNavbar';
import Catalog from './Pages/Catalog';

const App = () => {
  return (
    <Router>
      <AppNavbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/reserve" component={Home}></Route> 
        <Route exact path="/shop" component={Catalog}></Route>
        <Route exact path="/login" component={Home}></Route>
        <Route exact path="/signup" component={Home}></Route>
        <Route component={ErrorPage}/>
      </Switch>
    </Router>
  )
}

export default App;