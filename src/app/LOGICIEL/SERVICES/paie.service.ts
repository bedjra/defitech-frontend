import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paie } from '../MODELS/paie';


// Définir l'interface pour le modèle de paiement

@Injectable({
  providedIn: 'root'
})
export class PaieService {

  private apiUrl = 'http://localhost:8060/api/comptable/ajout_paiement';

  constructor(private http: HttpClient) {}

  // Fonction pour envoyer les données de paiement
  ajouterPaiement(paie: Paie): Observable<Paie> {
    return this.http.post<Paie>(this.apiUrl, paie);
  }
}
