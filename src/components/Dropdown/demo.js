/**
 * Created by ZhiLI on 2016/4/21.
 * Email: lizhipower@gmail.com
 */
import { Dropdown, DropdownEle } from './index';

export default class DropdownDemo extends React.Component {
  render() {
    return (
      <Dropdown>
        <DropdownEle>111</DropdownEle>
        <DropdownEle>222</DropdownEle>
        <DropdownEle>333</DropdownEle>
        <DropdownEle>444</DropdownEle>
      </Dropdown>
    );
  }
}
