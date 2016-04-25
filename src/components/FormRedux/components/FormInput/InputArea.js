export default class InputArea extends React.Component {
  handleInput() {
    let { headers, getInput } = this.props;
    let inputEle = {};
    headers.forEach(e => {
      inputEle[e] = this.refs[e].value;
    });
    getInput(inputEle);
  }
  render() {
    let { headers } = this.props;
    let Inputs = headers.map((e, k) => (
      <div key={ k }>
        <label htmlFor={ e }>{ e.toUpperCase() }</label>
        <input type = "text" id={ e } ref={ e } />
      </div>
    ));
    return (
      <div onKeyUp={ () => this.handleInput() }>
        { Inputs }
      </div>
    );
  }
}
