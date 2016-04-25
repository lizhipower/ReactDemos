import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FormActions from './actions/index';
import formStore from './stores/index';

import Form from './components/index';


function mapStateToProps(state) {
  return {
    formRedux: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormActions, dispatch)
  };
}

let App = connect(mapStateToProps, mapDispatchToProps)(Form);
let store = formStore({
  forms: [],
  headers: 'age name sex'.split(' ')
});

export default class FormRedux extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}
