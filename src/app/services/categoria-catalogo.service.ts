import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaCatalogo } from '../interfaces/categoria-catalogo';

@Injectable({
  providedIn: 'root'
})
export class CategoriaCatalogoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'catCategoriaCatalogo/'

   }

   getListCategoriaCatalogo(): Observable<CategoriaCatalogo[]> {
    return this.http.get<CategoriaCatalogo[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }
}
