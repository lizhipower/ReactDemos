/**
 * Created by ZhiLI on 2016/4/21.
 * Email: lizhipower@gmail.com
 */
import './index.less';
export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
  }
  getContent() {
    return ['tom', 'tom1', '2tom', 't3om'];
  }
  handleInput() {
    let filter = this.refs.filter.value;
    console.log(filter);
    this.setState({ filter });
  }
  render() {
    let content = this.getContent();
    let filter = this.state.filter;
    let contentFiltered = content.filter((e) => e.indexOf(filter) !== -1);
    let Content = this.state.filter && contentFiltered.map((e, index) =>
      <li key={ index }>{ e }</li>
    );
    return (
      <div className="auto-complete">
        <input
          type="text"
          ref="filter"
          onKeyUp={ (e) => this.handleInput(e) }
        />

        <ul className="auto-complete-content">
          { Content }
        </ul>
      </div>
    );
  }
}
