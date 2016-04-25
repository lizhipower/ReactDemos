import InputContent from './InputContent/index';
import Reset from './Reset';
import Submit from './Submit';

export default class FormContent extends React.Component {
  render() {
    const { headers, forms } = this.props;
    return (
      <div>
        <InputContent forms={ forms } headers={ headers } />
        <div>
          <Reset />
          <Submit />
        </div>
      </div>
    );
  }
}
