/**
 * Created by ZhiLI on 2016/4/11.
 * Email: lizhipower@gmail.com
 */
export default class Table extends React.Component {
  render() {
    let header = this.props.header;
    let content = this.props.content;
    let Header;
    let Content;
    Header = header.map((e, k) =>
      <th key={k}>{e.toUpperCase()}</th>
    );

    Header = (
        <thead>
          <tr>
            { Header }
          </tr>
        </thead>
      );
    Content = content.map((tr, trk) =>
      <tr key={trk}>
        {tr.map((td, tdk) =>
          <td key={tdk}>{td}</td>
        )}
      </tr>
    );
    Content = (
      <tbody>
        { Content }
      </tbody>
    );
    return (
      <table>
        { Header }
        { Content }
      </table>
    );
  }
}
