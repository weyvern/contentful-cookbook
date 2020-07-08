import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dishes from './components/Dishes';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route
            exact
            path='/breakfast'
            render={props => <Dishes {...props} title={'breakfast'} />}
          ></Route>
          <Route
            exact
            path='/lunch'
            render={props => <Dishes {...props} title={'lunch'} />}
          ></Route>
          <Route
            exact
            path='/dinner'
            render={props => <Dishes {...props} title={'dinner'} />}
          ></Route>
          <Route exact path='/about' component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
