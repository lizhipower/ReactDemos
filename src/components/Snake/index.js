/**
 * Created by ZhiLI on 2016/4/10.
 * Email: lizhipower@gmail.com
 */
import SnakeLayout from './Layout';
import './layout.less';

export default class SnakeDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.init();
  }
  componentDidMount() {
    $(document).keydown((e) => this.handleMove(e));
    $(document).keyup((e) => this.autoMove(e));
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
      scale: 20,
      difficulty: 1
    };
  }
  kickOut() {
    const KEY_MAP = {
      up: 38,
      right: 39,
      down: 40,
      left: 37
    };
    let keyCode;
    keyCode = KEY_MAP[this.state.attitude];
    let speed = 500 / this.state.difficulty;
    this.timer = setInterval(() => {
      this.doMove(keyCode);
    }, speed);
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
    )
      || firstEle.row < 0
      || firstEle.col > this.state.scale - 1
      || firstEle.row > this.state.scale - 1
      || firstEle.col < 0;
  }
  doMove(keyCode) {
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
    switch (keyCode) {
      case 38:
        attitude = 'up';
        if (this.state.attitude !== 'down') {
          firstEle.row = firstEle.row - 1;
        } else {
          return 0;
        }
        break;
      case 39:
        attitude = 'right';
        if (this.state.attitude !== 'left') {
          firstEle.col = firstEle.col + 1;
        } else {
          return 0;
        }
        break;
      case 40:
        attitude = 'down';
        if (this.state.attitude !== 'up') {
          firstEle.row = firstEle.row + 1;
        } else {
          return 0;
        }
        break;
      case 37:
        attitude = 'left';
        if (this.state.attitude !== 'right') {
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
      clearInterval(this.timer);
      this.setState(this.init());
    }
    return 1;
  }
  autoMove(e) {
    e.preventDefault();
    this.kickOut();
  }
  handleMove(e) {
    e.preventDefault();
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (e.keyCode) {
      this.doMove(e.keyCode);
    }
  }
  handleEasy() {
    this.setState({
      difficulty: 1
    });
  }
  handleMiddle() {
    this.setState({
      difficulty: 5
    });
  }
  handleDifficulty() {
    this.setState({
      difficulty: 10
    });
  }
  render() {
    return (
        <div>
          <SnakeLayout
            scale={this.state.scale}
            snake={this.state.snakeArr}
            bird={this.state.bird}
          />
          <ul className="difficulty">
            <li>
              <button
                onClick={ (e) => this.handleEasy(e) }
              >Easy</button>
            </li>
            <li onClick={ (e) => this.handleMiddle(e) }>
              <button>Middle</button>
            </li>
            <li>
              <button
                onClick={ (e) => this.handleDifficulty(e) }
              >Hard</button>
            </li>
          </ul>
        </div>
    );
  }
}
