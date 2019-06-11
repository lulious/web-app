import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LessonPage from './pages/lesson/LessonPage';
import HomePage from './pages/home/HomePage';
import ApplyPage from './pages/apply/ApplyPage';
import LessonSystemPage from './pages/lesson-system/LessonPage';
import PayPage from './pages/pay/PayPage';
import VideoPage from './pages/video/VideoPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/lesson" exact component={LessonPage} />
        <Route path="/apply" exact component={ApplyPage} />
        <Route path="/system" exact component={LessonSystemPage} />
        <Route path="/pay" exact component={PayPage} />
        <Route path="/video" exact component={VideoPage} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
