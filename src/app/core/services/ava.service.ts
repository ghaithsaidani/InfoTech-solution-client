import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AVA} from "../../public/shared/models/ava.model";
import {AvaDtos} from "../../public/shared/dto/ava.dto";

@Injectable({
  providedIn: 'root'
})
export class AvaService {

  constructor(private http :HttpClient) { }
  prefix = 'avas';

  createAVA(data: AVA): Observable<AVA>{
    return this.http.post(`${environment.baseUrl}/${this.prefix}`, data) as Observable<AVA>;
  }

  getAVAs(): Observable<AvaDtos> {
    return this.http.get(`${environment.baseUrl}/${this.prefix}`) as Observable<AvaDtos>;
  }

  getAVAById(id: number):Observable<AVA>{
    return this.http.get(`${environment.baseUrl}/${this.prefix}/${id}`) as Observable<AVA>;
  }

  UpdateAVA(data: AVA):Observable<AVA> {
    return this.http.put(`${environment.baseUrl}/${this.prefix}/${data.id}`, data) as Observable<AVA>;
  }

  DeletAVA(id: number) {
    return this.http.delete(`${environment.baseUrl}/${this.prefix}/${id}`)
  }
}
