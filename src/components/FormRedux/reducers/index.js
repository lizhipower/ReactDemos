import * as FORMS from '../constants/index';
const INIT_STATE = {
  forms: null
};
function addFormEle(f, ele) {
  let id = (new Date().getTime()).toString(36);
  let _f = Object.assign({}, f);
  _f[id] = ele;
  return _f;
}
function delFormEle(f, id) {
  let _f = f;
  delete _f[id];
  return _f;
}

export default function handleForm(state = INIT_STATE, action) {
  switch (action.type) {
    case FORMS.ADD_FORM_ELE:
      console.log('add');
      return Object.assign({}, state, {
        forms: addFormEle(state.forms, action.formEle)
      });
    case FORMS.DEL_FORM_ELE:
      console.log('del');
      return Object.assign({}, state, {
        forms: delFormEle(state.forms, action.id)
      });
    case FORMS.RESET_FORM:
      console.log('reset');
      return INIT_STATE;
    case FORMS.SUBMIT_FORM:
      console.log('submit');
      return state;
    default:
      return state;
  }
}
