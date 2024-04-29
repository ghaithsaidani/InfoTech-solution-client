import {ErrorMsgs} from "./error-msgs";
import {MatSelectChange} from "@angular/material/select";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";


type DateFormField={
  type: 'date',
  label: string,
  hidden:boolean,
  minDate:Date,
  maxDate:Date,
  formControlName: string,
  preffix_icon?:string,
  suffix_icon?:string,
  errorsMessages?:ErrorMsgs
}


type SelectFormField={
  type: 'select',
  label: string,
  hidden:boolean,
  formControlName: string,
  preffix_icon?:string,
  suffix_icon?:string,
  errorsMessages?:ErrorMsgs
  selectOptions:any[],
  isObject:boolean,
}

type PasswordFormField={
  type: 'password',
  label: string,
  hidden:boolean,
  formControlName: string,
  preffix_icon?:string,
  suffix_icon:string,
  showPassword:()=>void,
  errorsMessages?:ErrorMsgs
}

type NormalFormField={
  type: 'text' | 'number' | 'tel' | 'email' | 'file',
  label: string,
  hidden:boolean,
  formControlName: string,
  preffix_icon?:string,
  suffix_icon?:string,
  errorsMessages?:ErrorMsgs
}

type FormFieldWithAction = {
  hasAction:'yes',
  action: (e: Event | MatSelectChange | MatDatepickerInputEvent<any,any>)=>void,
  form:SelectFormField | PasswordFormField | NormalFormField | DateFormField
}

type FormFieldWithoutAction = {
  hasAction:'no',
  form:SelectFormField | PasswordFormField | NormalFormField | DateFormField
}

export type FormField = FormFieldWithAction | FormFieldWithoutAction;
