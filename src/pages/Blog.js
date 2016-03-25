/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import { ajaxBlog } from '../utils/WebAPI';
export default class Blog extends React.Component {

  render() {
    return (
      <div>
        <p>Blog</p>
        <button onClick={ ajaxBlog }>DO AJAX</button>
      </div>
    );
  }
}
