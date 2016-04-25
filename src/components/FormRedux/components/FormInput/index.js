import AddInput from './AddInput';
import InputArea from './InputArea';

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
    let InitState = {};
    let headers = this.props.headers;
    headers.forEach((e) => {InitState[e] = '';});
    this.state = {
      inputEle: InitState
    };
  }
  addFormEle() {
    this.props.addFormEle(this.state.inputEle);
  }
  handleInput(inputEle) {
    this.setState({ inputEle });
  }
  render() {
    let headers = this.props.headers;

    return (
      <div>
        <InputArea headers={ headers } getInput={ this.handleInput.bind(this) } />
        <AddInput add={ this.addFormEle.bind(this) } />
      </div>
    );
  }
}
