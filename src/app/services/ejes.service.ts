import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ejes } from '../interfaces/ejes';

@Injectable({
  providedIn: 'root'
})
export class EjesService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/gobiernodedatos/ejes/';
   }

   getEjes(): Observable<Ejes[]> {
    return this.http.get<Ejes[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }
}
