import {Role} from "../enums/role";

export class User {
  id!:number;
  email!:string;
  password!:string;
  firstName!:string;
  lastName!:string;
  phone!:number;
  role !:Role ;
  createdAt!:Date;
  updatedAt!:Date;
}
