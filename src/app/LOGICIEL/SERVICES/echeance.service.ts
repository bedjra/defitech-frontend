import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Echeance } from '../MODELS/echeance';

@Injectable({
  providedIn: 'root'
})
export class EcheanceService {

  private apiUrl = 'http://localhost:8060/api/comptable/'; // L'URL de ton API backend

  constructor(private http: HttpClient) { }

  getRappelsAVenir(): Observable<Echeance[]> {
    return this.http.get<Echeance[]>(`${this.apiUrl}/rappels-a-venir`);
  }
    
}
