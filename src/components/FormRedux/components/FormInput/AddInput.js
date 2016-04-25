export default class AddInput extends React.Component {
  render() {
    let { add } = this.props;
    return (
      <button onClick={ add }>+</button>
    );
  }
}
