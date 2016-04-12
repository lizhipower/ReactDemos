/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import NavBarProto from './NavBarProto';
import './index.less';
export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.init();
  }
  setActive(e) {
    e.preventDefault();
    let li = e.target.parentNode;
    let ul = li.parentNode;
    let liArr = ul.childNodes;
    let index = [].indexOf.call(liArr, li);
    let { activeStatus } = this.state;
    activeStatus.fill(false);
    activeStatus[index] = true;
    this.setState({
      activeStatus
    });
  }
  init() {
    let activeLength = this.props.children.length;
    let activeStatus = new Array(activeLength);
    return { activeStatus };
  }
  render() {
    let children = React.Children.map(this.props.children, (c, index) =>
    React.cloneElement(c, {
      active: this.state.activeStatus[index]
    })
    );
    return (
      <ul
        className="nav-wrap clearfix"
        onClick={(e) => this.setActive(e)}
      >
        { children }
      </ul>
    );
  }
}

export class IndexNavBar extends NavBarProto {
  render() {
    let { to, active } = this.props;
    return (
      <NavBarProto isIndex to={ to } active={ active }>
        { this.props.children }
      </NavBarProto>
    );
  }
}
export class NavBar extends NavBarProto {
  render() {
    let { to, active } = this.props;
    return (
      <NavBarProto isIndex={ false } to={ to } active={ active }>
        { this.props.children }
      </NavBarProto>
    );
  }
}
