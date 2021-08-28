import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import NoMatch from '../Pages/NoMatch';

export default function Router() {
  return (
    <main id='main' aria-live='polite'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  );
}
