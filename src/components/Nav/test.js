/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import { Nav, NavBar } from './index';

export default class TestNav extends React.Component {
  render() {
    return (
      <Nav>
        <NavBar to="/11">
          Blog11 1
        </NavBar>
        <NavBar to="/11" >
          Blog
        </NavBar>
        <NavBar to="/22" >
          Blog
        </NavBar>
        <NavBar to="/22">
          Blog
        </NavBar>
      </Nav>
    );
  }
}
