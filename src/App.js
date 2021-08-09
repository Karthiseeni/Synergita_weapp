
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Product from './components/pages/Products/Product'
import Services from './components/pages/Services/Services'
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/products' component={Product}></Route>
          <Route path='/services' component={Services}></Route>
          <Route path='/signup' component={SignUp}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
