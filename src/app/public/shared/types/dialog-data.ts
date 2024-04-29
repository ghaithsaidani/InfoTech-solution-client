export type DialogData ={
  type:'confirm'|'info'|'error'|'success'|'warning'|'loading'|'custom',
  title:string,
  content:string,
  isLoading:boolean,
  onSubmit:(e:Event)=>void,
}
