/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import { Link } from 'react-router';
export default class Nav extends React.Component {
  render() {
    return (
      <ul
        id="demos-nav"
        className="nav-wrap clearfix"
      >
        <li>
          <Link to="/demos/accordion" >Accordion</Link>
        </li>
        <li>
          <Link to="/demos/string_demo">StringDemo</Link>
        </li>
        <li>
          <Link to="/demos/layout_demo">LayoutDemo</Link>
        </li>
        <li>
          <Link to="/demos/event_demo">DOMEventDemo</Link>
        </li>
        <li>
          <Link to="/demos/snake">Snake</Link>
        </li>
        <li>
          <Link to="/demos/bom">BOM</Link>
        </li>
        <li>
          <Link to="/demos/nav">Nav</Link>
        </li>
      </ul>
    );
  }
}
