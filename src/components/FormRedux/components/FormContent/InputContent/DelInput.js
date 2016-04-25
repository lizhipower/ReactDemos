export default class DelInput extends React.Component {
  doDel() {
    const id = this.props.id;
    console.log('del', id);
  }
  render() {
    return (
      <button onClick={this.doDel.bind(this)}>-</button>
    );
  }
}
