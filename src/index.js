/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './pages/Layout';
import Photo from './pages/Photo';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Accordion from './pages/Accordion';
import StringDemo from './pages/StringDemo';
import LayoutDemo from './pages/LayoutDemo';

import '../node_modules/normalize.less';
const app = document.getElementById('app');

const App = (
  <Router history={hashHistory}>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Photo } />
      <Route path="/blog" component={ Blog } />
      <Route path="/profile" component={ Profile } />
      <Route path="/accordion" component={ Accordion } />
      <Route path="/string_demo" component={ StringDemo } />
      <Route path="/layout_demo" component={ LayoutDemo } />
    </Route>
  </Router>
);

ReactDOM.render(App, app);
