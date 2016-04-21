/**
 * Created by ZhiLI on 2016/4/12.
 * Email: lizhipower@gmail.com
 */
import { Nav, NavBar } from '../../components/Nav';

export default class Demos extends React.Component {
  render() {
    return (
      <div>
        <h2>Demos about React</h2>
        <Nav>
          <NavBar to="/demos/accordion" isActive={ false }>
            Accordion
          </NavBar>
          <NavBar to="/demos/string_demo" isActive={ false }>
            String
          </NavBar>
          <NavBar to="/demos/layout_demo" isActive={ false }>
            Layout
          </NavBar>
          <NavBar to="/demos/event_demo" isActive={ false }>
            DOM Event
          </NavBar>
          <NavBar to="/demos/snake" isActive={ false }>
            Snake
          </NavBar>
          <NavBar to="/demos/bom" isActive={ false }>
            BOM
          </NavBar>
          <NavBar to="/demos/auto_complete" isActive={ false }>
            AutoComplete
          </NavBar>
          <NavBar to="/demos/dropdown" isActive={ false }>
            Dropdown
          </NavBar>
        </Nav>
        {this.props.children}
      </div>
    );
  }
}
