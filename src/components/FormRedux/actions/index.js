import * as FORMS from '../constants/index';
export function addFormEle(formEle) {
  return {
    type: FORMS.ADD_FORM_ELE,
    formEle
  };
}

export function delFormEle(id) {
  return {
    type: FORMS.DEL_FORM_ELE,
    id
  };
}

export function submitForm() {
  return {
    type: FORMS.SUBMIT_FORM
  };
}

export function resetForm() {
  return {
    type: FORMS.RESET_FORM
  };
}
