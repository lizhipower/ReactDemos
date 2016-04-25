import FormContent from './FormContent/index';
import FormInput from './FormInput/index';

export default class Form extends React.Component {

  render() {
    let { headers, forms } = this.props.formRedux;
    let { addFormEle, delFormEle, submitForm, resetForm } = this.props.actions;
    return (
      <div>
        <FormInput headers={ headers } addFormEle={ addFormEle } />
        <FormContent forms={ forms } headers={ headers }
          delFormEle={ delFormEle } submitForm={ submitForm }
          resetForm={ resetForm }
        />
      </div>
    );
  }
}
