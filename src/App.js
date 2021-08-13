import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Home from './pages/Homepage/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/products' component={Product}></Route>
          <Route path='/services' component={Services}></Route>
          <Route path='/signup' component={SignUp}></Route> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
