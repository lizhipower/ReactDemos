/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import { IndexLink, Link } from 'react-router';
import './index.less';
export default class Nav extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      pathname: this.props.location.pathname
    };
  }
  handleLinkClick() {
    const { pathname } = this.props.location;
    this.setState({
      pathname
    });
  }
  render() {
    return (
      <ul
        className="nav-wrap clearfix"
        onClick = { (e) => this.handleLinkClick(e) }
      >
        <li>
          <IndexLink to="/photo" >Photo</IndexLink>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/demos">Demos</Link>
        </li>
      </ul>
    );
  }
}
