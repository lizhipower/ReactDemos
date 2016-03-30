/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import { IndexLink, Link } from 'react-router';
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
      <div>
        <ul onClick = { this.handleLinkClick.bind(this) }>
          <li><IndexLink to="/" >Photo</IndexLink></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/accordion">Accordion</Link></li>
          <li><Link to="/string_demo">StringDemo</Link></li>
          <li><Link to="/layout_demo">LayoutDemo</Link></li>
        </ul>
      </div>

    );
  }
}
