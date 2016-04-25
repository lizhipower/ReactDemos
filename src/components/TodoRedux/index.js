/**
 * Created by ZhiLI on 2016/4/22.
 * Email: lizhipower@gmail.com
 */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

let store = createStore(todoApp);
export default class TodoRedux extends React.Component {
  render() {
    return (
      <Provider store = { store }>
        <App />
      </Provider>
    );
  }
}
