/**
 * Created by ZhiLI on 2016/4/11.
 * Email: lizhipower@gmail.com
 */
import Table from './Table';

export default class BOMDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: {
        ih: 0,
        iw: 0,
        oh: 0,
        ow: 0
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        pathname: '',
        port: '',
        protocol: '',
        search: ''
      }
    };
  }
  componentDidMount() {
    $(window).on('resize', (e) =>
      this.handleResize(e));
    this.handleResize();
  }
  componentWillUnmount() {
    $(window).off('resize', (e) =>
      this.handleResize(e));
  }

  setWin() {
    let winHeader = 'ctg height width'.split(' ');
    let winContent = [];
    winContent.push(['inner', this.state.window.ih, this.state.window.iw]);
    winContent.push(['outer', this.state.window.oh, this.state.window.ow]);
    return {
      winHeader,
      winContent
    };
  }
  setLocation() {
    let locHeader = 'hash host hostname href pathname port protocol search'.split(' ');
    let locContent = locHeader.map((attr) => {
      let location = window.location;
      return location[attr];
    });
    locContent = [locContent];
    return {
      locHeader,
      locContent
    };
  }
  handleResize() {
    this.setState({
      window: {
        ih: window.innerHeight,
        iw: window.innerWidth,
        oh: window.outerHeight,
        ow: window.outerWidth
      }
    });
  }
  render() {
    let { winHeader, winContent } = this.setWin();
    let { locHeader, locContent } = this.setLocation();
    return (
      <div>
        <h2>Browser Object Demo</h2>
        <section>
          <h3>Window</h3>
          <Table header={ winHeader } content={ winContent } />
        </section>
        <section>
          <h3>Location</h3>
          <Table header={ locHeader } content={ locContent } />
        </section>
      </div>
    );
  }
}
