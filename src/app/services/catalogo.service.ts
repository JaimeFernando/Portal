import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Catalogo } from '../interfaces/catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'datosmaestros/catalogo'

   }

   getListCatalogo(): Observable<Catalogo[]> {
    return this.http.get<Catalogo[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }
}
