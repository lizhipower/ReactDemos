/**
 * Created by ZhiLI on 2016/4/7.
 * Email: lizhipower@gmail.com
 */
import './DOMEvent.less';
import DOMEventLayer from './DOMEventLayer';

export default class DOMEvent extends React.Component {
  handleClick(e) {
    let tar = $(e.target);
    tar.animate({ width: '200px', height: '200px' }, 3000);
  }
  render() {
    return (
      <div>
        <DOMEventLayer>
          <DOMEventLayer>
            <DOMEventLayer>
              <DOMEventLayer>
                <section id="DOM-target">
                  <h3>click and observe the procedure of DOM event:</h3>
                  <ul>
                    <li>Capture</li>
                    <li>Target</li>
                    <li>Bubbling</li>
                  </ul>
                </section>
              </DOMEventLayer>
            </DOMEventLayer>
          </DOMEventLayer>
        </DOMEventLayer>
        <div id="expander"
          onClick={(e) => this.handleClick(e)}
        ></div>
      </div>
    );
  }
}
