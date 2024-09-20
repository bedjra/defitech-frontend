import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filiere } from '../MODELS/filiers';

@Injectable({
  providedIn: 'root'
})
export class FiliersService {

  private apiUrl = 'http://localhost:8060/api/de/filiereByparcours';

  constructor(private http: HttpClient) { }

  getFiliereByParcours(parcoursId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${parcoursId}`);
  }
}
