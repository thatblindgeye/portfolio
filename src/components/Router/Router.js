import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Contributions from '../Pages/Contributions';
import About from '../Pages/About';
import NoMatch from '../Pages/NoMatch';

export default function Router({ theme }) {
  return (
    <main id='main' aria-live='polite'>
      <Switch>
        <Route exact path='/'>
          <Home theme={theme} />
        </Route>
        <Route path='/projects' component={Projects} />
        <Route path='/contributions' component={Contributions} />
        <Route path='/about' component={About} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  );
}
