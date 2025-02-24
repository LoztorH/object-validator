/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
import ValidationHelper from '../../validation/ValidationHelper';
import { valDecorator } from '../object/_newDecorator';

function startsWith(startsWith: string) {
  return valDecorator<any>((value, name, data) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null) {
      val.startsWith(value.field, name, data);
    }
  }, startsWith);
}

function len(min: number, max: number) {
  const data = {
    min: min,
    max: max,
  };
  return valDecorator<any>((value, name, data) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null) {
      val.isString(value.field, name, data);
    }
  }, data);
}

function email() {
  return valDecorator<any>((value, name) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null) {
      val.isEmail(value.field, name);
    }
  });
}

export default { len, startsWith, email };
