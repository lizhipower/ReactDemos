/**
 * Created by ZhiLI on 2016/4/7.
 * Email: lizhipower@gmail.com
 */
export default class Layer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0
    };
  }
  componentDidMount() {
    let tar = ReactDOM.findDOMNode(this);
    tar.addEventListener('click', this.handleDOMEvent, true);
    tar.addEventListener('click', this.handleDOMEvent, false);
  }
  componentWillUnmount() {
    let tar = ReactDOM.findDOMNode(this);
    tar.removeEventListener('click', this.handleDOMEvent, true);
    tar.removeEventListener('click', this.handleDOMEvent, false);
  }
  handleDOMEvent(e) {
    let pause = 200;
    let ms = e.timeout = (e.timeout + pause) || 0;
    console.log(ms);

    let tar = $(e.currentTarget);
    let timer1;
    let timer2;
    timer1 = setTimeout(() => {
      tar.addClass('highlight');
      timer2 = setTimeout(() => {
        tar.removeClass('highlight');
      }, pause);
    }, ms);
  }

  render() {
    return (
      <div
        className="DOM-layer normal"
      >
        {this.props.children}
      </div>
    );
  }
}
