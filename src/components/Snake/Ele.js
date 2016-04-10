/**
 * Created by ZhiLI on 2016/4/10.
 * Email: lizhipower@gmail.com
 */
import classnames from 'classnames';

export default class Ele extends React.Component {
  render() {
    let kRow = this.props.row;
    let kCol = this.props.col;
    let bird = this.props.bird;
    let snake = this.props.snake;
    let eleID = `r${kRow}c${kCol}`;
    let eleClass = classnames({
      'snake-ele': true,
      bird,
      snake
    });
    return (
      <div id={eleID} className={eleClass}></div>
    );
  }
}
