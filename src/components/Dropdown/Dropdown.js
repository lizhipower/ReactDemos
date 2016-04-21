/**
 * Created by ZhiLI on 2016/4/21.
 * Email: lizhipower@gmail.com
 */
import './index.less';
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  dropToggle() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    let Content = this.state.show ? (
      <ul className="dropdown-content">
        { this.props.children }
      </ul>
    ) : null;
    return (
      <div className="dropdown">
        <button onClick={ () => this.dropToggle() }>
          <span>Dropdown</span>
          <span className="caret" />
        </button>
        { Content }
      </div>
    );
  }
}
