import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataURL = 'assets/data/data.json'
  private ESdataURL = 'assets/data/dataES.json'
  private PRdataURL = 'assets/data/dataPT.json'

  constructor(private http: HttpClient) { }

  getdata():Observable<any>{
    return this.http.get<any>(this.dataURL)
  }

  getESdata():Observable<any>{
    return this.http.get<any>(this.ESdataURL)
  }

  getPTdata():Observable<any>{
    return this.http.get<any>(this.PRdataURL)
  }

}