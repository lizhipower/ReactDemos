/**
 * Created by ZhiLI on 2016/4/10.
 * Email: lizhipower@gmail.com
 */
import SnakeLayout from './Layout';

export default class SnakeDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.init();
  }
  componentDidMount() {
    $(document).keydown((e) => this.handleMove(e));
  }
  init() {
    return {
      snakeArr: [
        { row: 4, col: 4 },
        { row: 4, col: 5 },
        { row: 4, col: 6 }
      ],
      attitude: 'left',
      bird: { row: 3, col: 3 },
      scale: 20
    };
  }
  newBird() {
    let rowArr = [];
    let colArr = [];
    let bird = {};
    let snakeArr = this.state.snakeArr;
    for (let i = 0; i < this.state.scale; i++) {
      rowArr.push(i);
      colArr.push(i);
    }
    snakeArr.forEach((ele) => {
      let rowIndex = rowArr.indexOf(ele.row);
      let colIndex = colArr.indexOf(ele.col);
      if (rowIndex !== -1) {
        rowArr.splice(rowIndex, 1);
      }
      if (colIndex !== -1) {
        colArr.splice(colIndex, 1);
      }
    });
    let rndRowIndex = Math.floor(Math.random() * rowArr.length);
    let rndColIndex = Math.floor(Math.random() * colArr.length);
    bird.row = rowArr[rndRowIndex];
    bird.col = colArr[rndColIndex];
    this.setState({ bird });
  }
  judgeDeath(firstEle) {
    let snakeArr = this.state.snakeArr;
    return snakeArr.some((ele) =>
    ele.row === firstEle.row && ele.col === firstEle.col
    );
  }
  handleMove(e) {
    e.preventDefault();
    if (e.keyCode) {
      let attitude;
      let snakeArr;
      let firstEle;
      let bird;
      snakeArr = this.state.snakeArr;
      bird = this.state.bird;
      firstEle = {
        row: snakeArr[0].row,
        col: snakeArr[0].col
      };
      switch (e.keyCode) {
        case 38:
          attitude = 'up';
          if (this.state.attitude !== 'down' && firstEle.row > 0) {
            firstEle.row = firstEle.row - 1;
          } else {
            return 0;
          }
          break;
        case 39:
          attitude = 'right';
          if (this.state.attitude !== 'left' && firstEle.col < this.state.scale - 1) {
            console.log('yoo');

            firstEle.col = firstEle.col + 1;
          } else {
            return 0;
          }
          break;
        case 40:
          attitude = 'down';
          if (this.state.attitude !== 'up' && firstEle.row < this.state.scale - 1) {
            firstEle.row = firstEle.row + 1;
          } else {
            return 0;
          }
          break;
        case 37:
          attitude = 'left';
          if (this.state.attitude !== 'right' && firstEle.col > 0) {
            firstEle.col = firstEle.col - 1;
          } else {
            return 0;
          }
          break;
        default:
          attitude = 'left';
      }
      this.setState({ attitude });
      if (!this.judgeDeath(firstEle)) {
        if (firstEle.row === bird.row && firstEle.col === bird.col) {
          this.newBird();
        } else {
          snakeArr.pop();
        }
        snakeArr.unshift(firstEle);
        this.setState({ snakeArr });
      } else {
        alert('you are dead');
        this.setState(this.init());
      }
    }
    return 1;
  }
  render() {
    return (
      <SnakeLayout scale={this.state.scale} snake={this.state.snakeArr} bird={this.state.bird} />
    );
  }
}
