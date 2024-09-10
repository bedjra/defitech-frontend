import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../MODELS/student';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  /*
  private baseUrl = 'http://localhost:203/api/comptable/';

  constructor(private http: HttpClient) { }

  getMontantParcours(parcoursId: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/parcours/${parcoursId}/montant`);
  }

  getStudentsByParcours(parcours: string) {
    return this.http.get<Student[]>(`/api/students?parcours=${parcours}`);
  }
    */
}
