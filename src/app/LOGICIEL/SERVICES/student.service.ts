import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Student } from '../MODELS/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8060/api/comptable';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Ajouter un étudiant
  saveEtudiant(studentDto: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/ajout_etudiant`, studentDto, this.httpOptions)
      .pipe(
        catchError(this.handleError<Student>('saveEtudiant'))
      );
  }

  // Mettre à jour un étudiant
  updateEtudiant(id: number, studentDto: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/update_etudiant/${id}`, studentDto, this.httpOptions)
      .pipe(
        catchError(this.handleError<Student>('updateEtudiant'))
      );
  }

  // Supprimer un étudiant
  deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/etudiant/${id}`);
  }

  // Obtenir tous les étudiants
  getAllEtudiants(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/etudiant`)
      .pipe(
        catchError(this.handleError<Student[]>('getAllEtudiants', []))
      );
  }

  // Obtenir un étudiant par ID
  getEtudiantById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/etudiant/${id}`)
      .pipe(
        catchError(this.handleError<Student>('getEtudiantById'))
      );
  }

  // Rechercher des étudiants par parcours et niveau
  searchEtudiants(parcoursNom: string, niveau: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/search`, {
      params: {
        parcoursNom: parcoursNom,
        niveau: niveau
      }
    }).pipe(
      catchError(this.handleError<Student[]>('searchEtudiants', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getStudentsByParcoursAndNiveau(parcoursNom: string, niveau: string): Observable<Student[]> {
    const params = new HttpParams()
      .set('parcoursNom', parcoursNom)
      .set('niveau', niveau);

    return this.http.get<Student[]>(`${this.baseUrl}/search`, { params });
  }
}