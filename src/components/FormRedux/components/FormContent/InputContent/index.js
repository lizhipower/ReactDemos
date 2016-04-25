import Table from './Table';
import Row from './Row';

export default class InputContent extends React.Component {
  render() {
    let { headers, forms } = this.props;
    let Rows = [];
    for (let kRow in forms) {
      if (forms.hasOwnProperty(kRow)) {
        let formEle = forms[kRow];
        Rows.push(<Row
          key={ kRow }
          formEle={ formEle }
          headers={ headers }
          id={ kRow }
        />);
      }
    }
    return (
      <Table headers={ headers }>
        { Rows }
      </Table>
    );
  }
}
