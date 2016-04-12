/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import NavBarProto from './NavBarProto';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.init();
  }
  init() {
    let activeStatus = [];
    let activeLength = this.props.children.length;
    for (let i = 0; i < activeLength; i++) {
      activeStatus[i] = !Boolean(i);
    }
    return { activeStatus };
  }
  render() {
    let children = React.Children.map(this.props.children, (c, index) =>
    React.cloneElement(c, {
      isActive: this.state.activeStatus[index]
    })
    );
    return (
      <ul>
        { children }
      </ul>
    );
  }
}

export class IndexNavBar extends NavBarProto {
  render() {
    let { to, content, isActive } = this.props;
    return (
      <NavBarProto isIndex to={ to } content={ content } isActive={ isActive } />
    );
  }
}
export class NavBar extends NavBarProto {
  render() {
    let { to, content, isActive } = this.props;
    return (
      <NavBarProto isIndex={ false } to={ to } content={ content } isActive={ isActive } />
    );
  }
}
