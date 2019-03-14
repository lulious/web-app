import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LessonPage from './pages/lesson/LessonPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/lesson" exact component={LessonPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
