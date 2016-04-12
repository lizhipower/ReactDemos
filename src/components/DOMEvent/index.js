/**
 * Created by ZhiLI on 2016/4/7.
 * Email: lizhipower@gmail.com
 */
import './DOMEvent.less';
import Layer from './Layer';

export default class DOMEvent extends React.Component {
  handleClick(e) {
    let tar = $(e.target);
    tar.animate({ width: '200px', height: '200px' }, 3000);
  }
  render() {
    return (
      <div>
        <Layer>
          <Layer>
            <Layer>
              <Layer>
                <section id="DOM-target">
                  <h3>click and observe the procedure of DOM event:</h3>
                  <ul>
                    <li>Capture</li>
                    <li>Target</li>
                    <li>Bubbling</li>
                  </ul>
                </section>
              </Layer>
            </Layer>
          </Layer>
        </Layer>
        <div id="expander"
          onClick={(e) => this.handleClick(e)}
        ></div>
      </div>
    );
  }
}
