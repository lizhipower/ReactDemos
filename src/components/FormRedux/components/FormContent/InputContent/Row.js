import DelInput from './DelInput';
export default class Row extends React.Component {
  render() {
    let { formEle, id } = this.props;
    let Tds = [];
    for (let kEle in formEle) {
      if (formEle.hasOwnProperty(kEle)) {
        Tds.push(<td key={ kEle }>{ formEle[kEle] }</td>);
      }
    }
    Tds.push(<td key="del"><DelInput id={ id }/></td>);
    return (
      <tr>{ Tds }</tr>
    );
  }
}
