/**
 * Created by ZhiLI on 2016/3/30.
 * Email: lizhipower@gmail.com
 */
import './LayouDemo.less';

export default class LayoutDemos extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="middle-wrap">
          <div id="middle">
            <h3>middle</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eum explicabo facilis nam nisi! Aliquam dolor dolore est ex, expedita laborum mollitia nisi obcaecati officia praesentium quae quam suscipit ullam.</p>
          </div>
        </div>
        
        <div id="left">
          <h3>left</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum facere incidunt ipsa non nostrum quod, vel! Aliquam dolorem doloremque eum eveniet illum natus officia perspiciatis qui? Commodi iusto quaerat qui.</p>
        </div>
        <div id="right">
          <h3>right</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur doloremque eum quae. A commodi eaque pariatur sint unde. Amet debitis fuga ipsum modi perspiciatis quam reprehenderit. Earum, eveniet, pariatur.</p>
        </div>
      </div>
    );
  }
}
