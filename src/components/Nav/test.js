/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import { Nav, IndexNavBar, NavBar } from './index';

export default class TestNav extends React.Component {
  render() {
    return (
      <Nav>
        <IndexNavBar to="/blog" content="Blog" isActive />
        <NavBar to="/blog" content="Blog" isActive={ false } />
        <NavBar to="/blog" content="Blog" isActive={ false } />
        <NavBar to="/blog" content="Blog" isActive={ false } />
      </Nav>
    );
  }
}
