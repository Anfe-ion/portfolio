import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataURL = 'assets/data/data.json'

  constructor(private http: HttpClient) { }

  getdata():Observable<any>{
    return this.http.get<any>(this.dataURL)
  }

}