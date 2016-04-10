/**
 * Created by ZhiLI on 2016/4/10.
 * Email: lizhipower@gmail.com
 */
import Ele from './Ele';
export default class SnakeLayout extends React.Component {
  render() {
    const ROW = this.props.scale;
    const COL = this.props.scale;
    const snakeArr = this.props.snake;
    const bird = this.props.bird;
    let Layout = [];
    for (let kRow = 0; kRow < ROW; kRow++) {
      let RowEle = [];
      let rowID;
      for (let kCol = 0; kCol < COL; kCol++) {
        let DivEle;
        let isBird;
        let isSnake;
        isBird = (bird.row === kRow && bird.col === kCol);
        isSnake = snakeArr.some((ele) =>
          ele.row === kRow && ele.col === kCol
        );
        DivEle = <Ele key={kCol} row={kRow} col={kCol} bird={isBird} snake={isSnake} />;
        RowEle.push(DivEle);
      }
      rowID = kRow.toString();
      Layout.push(
        <div key={rowID} id={rowID} className="snake-row">
          {RowEle}
        </div>);
    }
    return (
      <div id="snake-layout" className="snake-layout">
        {Layout}
      </div>
    );
  }
}
