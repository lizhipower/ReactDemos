export default class Table extends React.Component {
  render() {
    let headers = this.props.headers;
    let Headers = headers.map((e, k) => (
      <th key={ k }>{ e.toUpperCase() }</th>
    ));
    Headers.push(<th key="del">-</th>);
    return (
      <table>
        <thead>
          <tr>{ Headers }</tr>
        </thead>
        <tbody>
          { this.props.children }
        </tbody>
      </table>
    );
  }
}
