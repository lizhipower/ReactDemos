/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import Nav from '../components/Layout/Nav';
import Footer from '../components/Layout/Footer';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Layout'
    };
  }
  render() {
    const { location } = this.props;
    // console.log(this.props);
    // console.log(location);
    
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
