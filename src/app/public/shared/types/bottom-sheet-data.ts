import {User} from "../models/user.model";
import {AVA} from "../models/ava.model";

export type AVABottomSheetData = {
  management:'ava'
  url: string,
  tableRow : AVA,
  delete:(id:number)=>void
  uploadDocuments:(documents:AVA)=>void
  acceptAVA:(id:number)=>void
  rejectAVA:(id:number)=>void
}

export type NormalBottomSheetData = {
  management:'normal'
  url: string,
  tableRow : User ,
  delete:(id:number)=>void
}

export type BottomSheetData = AVABottomSheetData | NormalBottomSheetData
