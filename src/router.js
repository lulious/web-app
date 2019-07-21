import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LessonPage from './pages/lesson/LessonPage';
import HomePage from './pages/home/HomePage';
import DiscoveryPage from './pages/discovery/DiscoveryPage';
import DetailPage from './pages/discovery-detail/DetailPage';
import ApplyPage from './pages/apply/ApplyPage';
import LessonSystemPage from './pages/lesson-system/LessonPage';
import PayPage from './pages/pay/PayPage';
import VideoPage from './pages/video/VideoPage';
import UniversityPage from './pages/university/HomePage';
import UniversityDetail from  './pages/university/HomeDetail';
import SmartRoom from './pages/university/smart-room/SmartRoom';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/discovery" exact component={DiscoveryPage} />
        <Route path="/discovery/:id" exact component={DetailPage} />
        <Route path="/lesson" exact component={LessonPage} />
        <Route path="/apply" exact component={ApplyPage} />
        <Route path="/system" exact component={LessonSystemPage} />
        <Route path="/pay" exact component={PayPage} />
        <Route path="/video" exact component={VideoPage} />
        <Route path="/university" exact component={UniversityPage} />
        <Route path="/university/detail" exact component={UniversityDetail} />
        <Route path="/apply-smart-room" exact component={SmartRoom} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
