import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
