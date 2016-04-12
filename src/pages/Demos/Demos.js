/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import Nav from './Nav';

export default class Demos extends React.Component {
  render() {
    return (
      <div>
        <h2>Demos about React</h2>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
