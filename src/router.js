import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LessonPage from './pages/lesson/LessonPage';
import HomePage from './pages/home/HomePage';
import ApplyPage from './pages/apply/ApplyPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/lesson" exact component={LessonPage} />
        <Route path="/apply" exact component={ApplyPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
