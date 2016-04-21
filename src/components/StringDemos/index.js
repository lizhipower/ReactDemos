/**
 * Created by ZhiLI on 2016/3/27.
 * Email: lizhipower@gmail.com
 */


export default class StringDemos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '2323',
      rslt: '',
      similarRslt: false
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
      for (let j = i + 1; j < l; j++) {
        if (array[i] === array[j]) {
          j = ++i;
        }
      }
      strTar = strTar + array[i];
    }
    this.doShow(strTar);
  }
  getType(e) {
    let type;
    if (e === null) {
      type = '[object Null]';
    } else if (e === undefined) {
      type = '[object Undefined]';
    } else if (e === window) {
      type = '[object Window]';
    } else {
      type = Object.prototype.toString.apply(e);
    }
    return type;
  }
  doSimilar(cases) {
    class RsltObj {
      constructor() {
        let obj = {
          '[object Null]': 0,
          '[object Undefined]': 0,
          '[object Window]': 0,
          '[object Date]': 0,
          '[object String]': 0,
          '[object Boolean]': 0,
          '[object Number]': 0,
          '[object Function]': 0
        };
        for (let props in obj) {
          if (obj.hasOwnProperty(props)) {
            this[props] = obj[props];
          }
        }
      }
    }

    let rsltArr = cases.map(obj => {
      let rsltObj1 = new RsltObj();
      let rsltObj2 = new RsltObj();
      let result;

      obj.arr1.forEach(e => {
        rsltObj1[this.getType(e)] = rsltObj1[this.getType(e)] + 1;
      });
      obj.arr2.forEach(e => {
        rsltObj2[this.getType(e)] = rsltObj2[this.getType(e)] + 1;
      });
      for (let p in rsltObj1) {
        if (rsltObj1[p] !== rsltObj2[p]) {
          result = false;
          break;
        } else {
          result = true;
        }
      }
      return result === obj.expect;
    });
    console.log(rsltArr);
  }
  doCal() {
    let cases = [
      {
        arr1: [1, true, null],
        arr2: [null, false, 100],
        expect: true
      },
      {
        arr1: [function(){}, 100],
        arr2: [100, {}],
        expect: false
      },
      {
        arr1: [null, 999],
        arr2: [{}, 444],
        expect: false
      },
      {
        arr1: [window, 1, true, new Date(), 'hahaha', (function(){}), undefined],
        arr2: [undefined, (function () {}), 'okokok', new Date(), false, 2, window],
        expect: true
      },
      {
        arr1: [new Date()],
        arr2: [{}],
        expect: false
      },
      {
        arr1: [window],
        arr2: [{}],
        expect: false
      },
      {
        arr1: [undefined, 1],
        arr2: [null, 2],
        expect: false
      },
      {
        arr1: [{}, {}, {}],
        arr2: [{}, {}, null],
        expect: false
      }
    ];

    this.doSimilar(cases);
  }
  render() {
    return (
      <div>
        <section>
          <p><em>{ this.state.string }</em></p>
          <p><em>{ this.state.rslt }</em></p>
          <button onClick={ e => this.doUnique1(e) }>Unique1</button>
          <button onClick={ e => this.doUnique2(e) }>Unique2</button>
          <button onClick={ e => this.doUnique3(e) }>Unique3</button>
          <button onClick={ e => this.doUnique4(e) }>Unique4</button>
          <button onClick={ e => this.doUnique5(e) }>Unique5</button>
        </section>
        <section>
          <p><em>{ this.state.similarRslt.toString() }</em></p>
          <button onClick={ e => this.doCal(e) }>Similar</button>
        </section>
      </div>
    );
  }
}


