/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import NavBarProto from './NavBarProto';
import './index.less';
export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  getActiveIndex(activeIndex) {
    this.setState({
      activeIndex
    });
  }
  render() {
    let children = React.Children.map(this.props.children, (c, index) =>
    React.cloneElement(c, {
      active: this.state.activeIndex,
      getActiveIndex: this.getActiveIndex.bind(this),
      index
    })
    );
    return (
      <ul className="nav-wrap clearfix">
        { children }
      </ul>
    );
  }
}

export class IndexNavBar extends NavBarProto {
  render() {
    return (
      <NavBarProto isIndex { ...this.props }>
        { this.props.children }
      </NavBarProto>
    );
  }
}
export class NavBar extends NavBarProto {
  render() {
    return (
      <NavBarProto isIndex={ false } { ...this.props }>
        { this.props.children }
      </NavBarProto>
    );
  }
}
