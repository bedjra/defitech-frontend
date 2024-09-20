import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private apiUrl = 'http://localhost:8060/api/comptable/'; 

  constructor(private http: HttpClient) {}

// endpoint pour récupérer les étudiants avec les statuts spécifiés
getEtudiantsParStatuts(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + '/par-statut');
}
}
