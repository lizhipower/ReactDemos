/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import { Nav, NavBar } from '../../components/Nav';
import Footer from './Footer';
import './index.less';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Layout'
    };
  }
  render() {
    const { location } = this.props;
    return (
      <div>
        <h1 className="layout-title">We are now at {location.pathname}</h1>
        <Nav>
          <NavBar to="/photo" isActive={ false }>
            Photo
          </NavBar>
          <NavBar to="/blog" isActive={ false }>
            Blog
          </NavBar>
          <NavBar to="/profile" isActive={ false }>
            Profile
          </NavBar>
          <NavBar to="/demos" isActive={ false }>
            Demos
          </NavBar>
        </Nav>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
