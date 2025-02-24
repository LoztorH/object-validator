/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
import ValidationHelper from '../../validation/ValidationHelper';
import { valDecorator } from '../object/_newDecorator';

function positive(mode: 'strong' | 'weak' = 'weak', isFloat?: boolean) {
  const data = { type: 'positive', mode, isFloat };
  return valDecorator<any>((value, name, data) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null && value.field !== '') {
      val.isNum(value.field, name, data);
    }
  }, data);
}

function negative(mode: 'strong' | 'weak' = 'weak', isFloat?: boolean) {
  const data = { type: 'negative', mode, isFloat };
  return valDecorator<any>((value, name, data) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null && value.field !== '') {
      val.isNum(value.field, name, data);
    }
  }, data);
}

function notZero(mode: 'strong' | 'weak' = 'weak') {
  return valDecorator<any>((value, name) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null && value.field !== '') {
      val.isNum(value.field, name, { mode });
      if (value.field == 0) {
        throw new Error();
      }
    }
  });
}

function min(min: number, mode: 'strong' | 'weak' = 'weak') {
  return valDecorator<any>((value, name) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null && value.field !== '') {
      val.isNum(value.field, name, { mode });
      if (value.field < min) {
        throw new Error();
      }
    }
  });
}

function max(max: number, mode: 'strong' | 'weak' = 'weak') {
  return valDecorator<any>((value, name) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null && value.field !== '') {
      val.isNum(value.field, name, { mode });
      if (value.field > max) {
        throw new Error();
      }
    }
  });
}

function type(mode: 'strong' | 'weak' = 'weak') {
  return valDecorator<any>((value, name) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null && value.field !== '') {
      val.isNum(value.field, name, { mode });
    }
  });
}

function int() {
  return valDecorator<any>((value, name) => {
    const val = new ValidationHelper();
    if (value.field != undefined && value.field != null && value.field !== '') {
      val.isInt(value.field, name);
    }
  });
}

export default { type, negative, positive, notZero, min, max, int };
