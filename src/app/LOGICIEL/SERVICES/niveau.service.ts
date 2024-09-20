import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  private apiUrl = 'http://localhost:8060/comptable';

  constructor(private http: HttpClient) { }
/*
  getNiveauxByParcours(parcoursId: number): Observable<Niveau[]> {
    return this.http.get<Niveau[]>(`${this.apiUrl}/${parcoursId}`);
  }

  getNiveaux(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/niveau`);
  }
  */
}