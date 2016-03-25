/**
 * Created by ZhiLI on 2016/3/25.
 * Email: lizhipower@gmail.com
 */
import AccordionEle from './AccordionEle';
import className from 'classnames';


import './styles/accordin.less';
import img1 from './imgs/1.jpg';
import img2 from './imgs/2.jpg';
import img3 from './imgs/3.jpg';
import img4 from './imgs/4.jpg';
import img5 from './imgs/5.jpg';
import img6 from './imgs/6.jpg';
import img7 from './imgs/7.jpg';

export default class AccordionLayout extends React.Component {
  handleEnter(e) {
    $(e.currentTarget).css('width', '318px');
  }
  handleLeave(e) {
    $(e.currentTarget).css('width', '108px');
  }
  handleReset(e) {
    $(e.currentTarget).children().css('width', '108px');
  }
  render() {
    const imgArr = [img1, img2, img3, img4, img5, img6, img7];
    const AccordionEleArr = imgArr.map(
      (v, k) =>
        <li key={ k }
          onMouseEnter={ this.handleEnter }
          onMouseLeave={ this.handleLeave }
        >
          <AccordionEle imgSrc={ v } imgAlt={ k } />
        </li>
      );
    return (
      <ul className="accordion clearfix"
        onMouseEnter={ this.handleReset }
        onMouseLeave={ this.handleReset }
      >
        {AccordionEleArr}
      </ul>
    );
  }
}
