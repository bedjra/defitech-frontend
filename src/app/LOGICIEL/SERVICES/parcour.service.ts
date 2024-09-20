import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcourService {
  private apiUrl = 'http://localhost:8060/api/de/all-parcours'; 
  private apiStatsUrl = 'http://localhost:8060/api/comptable/stats';
  private apiNivUrl = 'http://localhost:8060/api/de'; 

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les parcours depuis le backend
  getParcours(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStats(): Observable<any[]> {
    return this.http.get<any[]>(this.apiStatsUrl);
  }
   // Méthode pour obtenir les niveaux par parcoursId
   getNiveauxByParcours(parcoursId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiNivUrl}/niveauxByParcours/${parcoursId}`);
  }
}