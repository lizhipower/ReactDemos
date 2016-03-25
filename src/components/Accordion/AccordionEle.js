/**
 * Created by ZhiLI on 2016/3/25.
 * Email: lizhipower@gmail.com
 */
export default class AccordionEle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: this.props.imgSrc,
      imgAlt: this.props.imgAlt
    };
  }
  handleEnter(e) {
    $(e.currentTarget).children().last().css('display', 'block');
  }
  handleLeave(e) {
    $(e.currentTarget).children().last().css('display', 'none');

  }
  render() {
    return (
      <div className="accordion-ele-wrap"
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <div className="img-top">
          <img src={ this.state.imgSrc } alt={ this.state.imgAlt } />
        </div>
        <div className="img-bot">
          <p>文字简介</p>
        </div>
      </div>
    );
  }
}
