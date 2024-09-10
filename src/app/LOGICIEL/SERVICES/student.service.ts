import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../MODELS/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:0203/api/comptable/';

  constructor(private http: HttpClient) { }
/*
  inscrireEtudiant(student: any): Observable<any> {
    return this.http.post(this.baseUrl, student);
  }

  updateEtudiant(id: number, student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, student);
  }

  getEtudiantById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllEtudiants(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
*/
// Méthode pour obtenir les étudiants par parcours
//getStudentsByParcours(parcours: string): Observable<Student[]> {
  //return this.http.get<Student[]>(`${this.baseUrl}?parcours=${parcours}`);
//}

getStudentsByParcoursAndNiveau(parcours: string, niveau: string): Observable<Student[]> {
  const params = new HttpParams()
    .set('parcours', parcours)
    .set('niveau', niveau);

  return this.http.get<Student[]>(this.baseUrl, { params });
}
}
