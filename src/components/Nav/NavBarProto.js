/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames';
export default class NavBarProto extends React.Component {
  setActive() {
    let { getActiveIndex, index } = this.props;
    getActiveIndex(index);
  }
  render() {
    let { to, isIndex, active, index } = this.props;
    let classes = classNames({
      active: active === index
    });
    let NavLink;
    if (isIndex) {
      NavLink = (
        <IndexLink to={ to } className={classes}>
          { this.props.children }
        </IndexLink>
      );
    } else {
      NavLink = (
        <Link
          to={ to }
          className={classes}
          onClick={ () => this.setActive() }
        >
          { this.props.children }
        </Link>
      );
    }
    return (
      <li>
        { NavLink }
      </li>
    );
  }
}
