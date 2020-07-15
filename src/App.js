import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dishes from './components/Dishes';
import About from './components/About';
import Dish from './components/Dish';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/breakfast'
          render={props => <Dishes {...props} title={'breakfast'} />}
        />
        <Route
          exact
          path='/lunch'
          render={props => <Dishes {...props} title={'lunch'} />}
        />
        <Route
          exact
          path='/dinner'
          render={props => <Dishes {...props} title={'dinner'} />}
        />
        <Route exact path='/dish/:slug' component={Dish} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  );
};

export default App;
