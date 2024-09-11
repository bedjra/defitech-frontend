import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filiere } from '../MODELS/filiers';

@Injectable({
  providedIn: 'root'
})
export class FiliersService {

  private apiUrl = 'http://localhost:0203/api/de'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  getFilieresByParcours(parcoursId: number): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(`${this.apiUrl}/filiereByparcours/${parcoursId}`);
  }
}
