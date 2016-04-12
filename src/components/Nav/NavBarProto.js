/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames';
export default class NavBarProto extends React.Component {
  render() {
    let { to, content, isActive, isIndex } = this.props;
    let classes = classNames({
      active: isActive
    });
    let NavLink;
    if (isIndex) {
      NavLink = <IndexLink to={ to } className={classes}>{ content }</IndexLink>;
    } else {
      NavLink = <Link to={ to } className={classes}>{ content }</Link>;
    }
    return (
      <li>
        { NavLink }
      </li>
    );
  }
}
