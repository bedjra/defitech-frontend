import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parcours } from '../MODELS/parcours';

@Injectable({
  providedIn: 'root'
})
export class ParcourService {
  private apiUrl = 'http://localhost:8060/api/de'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

// Récupérer les parcours depuis le backend
getAllParcours(): Observable<Parcours[]> {
  return this.http.get<Parcours[]>(this.apiUrl);
}
}