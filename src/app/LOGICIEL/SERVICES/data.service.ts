import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private apiUrl = 'http://localhost:0203/api/comptable/'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

// Récupérer les parcours depuis le backend
getParcours(): Observable<string[]> {
  return this.http.get<string[]>(`${this.apiUrl}/parcours`);
}

// Récupérer les filières depuis le backend
getFilieres(): Observable<string[]> {
  return this.http.get<string[]>(`${this.apiUrl}/filieres`);
}



}
