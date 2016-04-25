/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Layout from './pages/Layout';
import Photo from './pages/Photo';
import Blog from './pages/Blog';
import Profile from './pages/Profile';

import Demos from './pages/Demos/index';
import Accordion from './components/Accordion';
import StringDemos from './components/StringDemos';
import LayoutDemos from './components/LayoutDemos';
import DOMEvent from './components/DOMEvent';
import Snake from './components/Snake';
import BOM from './components/BOM';
import AutoComplete from './components/AutoComplete';
import Dropdown from './components/Dropdown/demo';
import TodoRedux from './components/TodoRedux';
import FormRedux from './components/FormRedux';

import '../node_modules/normalize.less';
const app = document.getElementById('app');

const App = (
  <Router history={hashHistory}>
    <Route path="/" component={ Layout }>
      <IndexRedirect to="demos" />
      <Route path="demos" component={ Demos }>
        <Route path="accordion" component={ Accordion } />
        <Route path="string_demo" component={ StringDemos } />
        <Route path="layout_demo" component={ LayoutDemos } />
        <Route path="event_demo" component={ DOMEvent } />
        <Route path="snake" component={ Snake } />
        <Route path="bom" component={ BOM } />
        <Route path="auto_complete" component={ AutoComplete } />
        <Route path="dropdown" component={ Dropdown } />
        <Route path="todo_redux" component={ TodoRedux } />
        <Route path="form_redux" component={ FormRedux } />
      </Route>
      <Route path="photo" component={ Photo } />
      <Route path="blog" component={ Blog } />
      <Route path="profile" component={ Profile } />
    </Route>
  </Router>
);

ReactDOM.render(App, app);
