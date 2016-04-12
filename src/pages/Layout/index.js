/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import Nav from './Nav';
import Footer from './Footer';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Layout'
    };
  }
  render() {
    const { location } = this.props;
    return (
      <div>
        <h1>{location.pathname}</h1>
        <Nav location={ location } />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}