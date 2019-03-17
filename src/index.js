import dva from 'dva';
import 'react-dom';
import 'babel-polyfill';
import './index.css';
import LessonModal from './models/lesson';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(LessonModal);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
