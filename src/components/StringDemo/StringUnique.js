/**
 * Created by ZhiLI on 2016/3/27.
 * Email: lizhipower@gmail.com
 */
export default class StringUnique extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '2323',
      rslt: ''
    };
  }
  doShow(strTar) {
    this.setState({
      rslt: strTar
    });
  }
  doUnique1() {
    let strSrc = this.state.string;
    let strTarArr = [];
    for (let i = 0; i < strSrc.length; i++) {
      let char = strSrc[i];
      if (strTarArr.indexOf(char) === -1) {
        strTarArr.push(char);
      }
    }
    let strTar = strTarArr.join('');
    this.doShow(strTar);
  }
  doUnique2() {
    let strSrc = this.state.string;
    let strObj = {};
    let strArr = [];
    for (let i = 0; i < strSrc.length; i++) {
      let val = strSrc[i];
      strObj[val] = i;
    }

    for (let key in strObj) {
      if (strObj.hasOwnProperty(key)) {
        strArr.push(key);
      }
    }
    let strTar = strArr.join('');
    this.doShow(strTar);
  }
  doUnique3() {
    let strSrc = this.state.string;
    let strTar = '';
    for (let i = 0; i < strSrc.length; i++) {
      let char = strSrc[i];
      if (i === strSrc.indexOf(char)) {
        strTar = strTar + char;
      }
    }
    this.doShow(strTar);
  }
  doUnique4() {
    let str = this.state.string;
    let strArr = str.split('');
    strArr = strArr.sort();
    console.log(strArr);

    let strTar = strArr[0].toString();
    for (let i = 1; i < strArr.length; i++) {
      if (strArr[i - 1] !== strArr[i]) {
        strTar = strTar + strArr[i].toString();
      }
    }
    this.doShow(strTar);
  }
  doUnique5() {
    let array = this.state.string;
    let strTar = '';
    for (let i = 0, l = array.length; i < l; i++) {
      console.log('==============');

      console.log('loop 1 i', i);
      for (let j = i + 1; j < l; j++) {
        console.log('--------------');

        if (array[i] === array[j]) {
          console.log('loop 2-1 i', i);
          console.log('loop 2-1 j', j);
          j = ++i;
          console.log('loop 2-2 i', i);
          console.log('loop 2-2 j', j);
        }
      }
      strTar = strTar + array[i];
    }
    this.doShow(strTar);
  }
  render() {
    return (
      <div>
        <p><em>{ this.state.string }</em></p>
        <p><em>{ this.state.rslt }</em></p>
        <button onClick={ e => this.doUnique1(e) }>Unique1</button>
        <button onClick={ e => this.doUnique2(e) }>Unique2</button>
        <button onClick={ e => this.doUnique3(e) }>Unique3</button>
        <button onClick={ e => this.doUnique4(e) }>Unique4</button>
        <button onClick={ e => this.doUnique5(e) }>Unique5</button>
      </div>
    );
  }
}
