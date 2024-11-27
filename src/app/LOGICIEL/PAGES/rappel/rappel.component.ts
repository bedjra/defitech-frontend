import { Component, OnInit } from '@angular/core';
import { EcheanceService } from '../../SERVICES/echeance.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Paie } from '../../MODELS/paie';

@Component({
  selector: 'app-rappel',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './rappel.component.html',
  styleUrl: './rappel.component.css'
})
export class RappelComponent implements OnInit {

  rappels: Paie[] = [];
  loading = true;
  error: string | null = null;
  nombreRappels: number = 0; // Variable pour stocker le nombre de paiements

  constructor(
    private echeanceService: EcheanceService
  ) { }

  ngOnInit(): void {
    this.echeanceService.getRappelsAVenir().subscribe(
      (data: Paie[]) => {
        // Trier les rappels par ordre alphabétique basé sur une propriété (par exemple, 'etudiantNom')
        this.rappels = data.sort((a, b) => {
          const nameA = a.etudiantNom.toLowerCase(); // Assurez-vous d'utiliser la bonne propriété
          const nameB = b.etudiantNom.toLowerCase(); // Assurez-vous d'utiliser la bonne propriété
          if (nameA < nameB) {
            return -1; // A vient avant B
          }
          if (nameA > nameB) {
            return 1; // A vient après B
          }
          return 0; // Ils sont égaux
        });
        this.loading = false;
      },
      (err) => {
        this.error = 'Erreur lors du chargement des rappels.';
        this.loading = false;
      }
    );
  

  this.echeanceService.getNombreRappelsAVenir().subscribe(
    (nombre: number) => {
      this.nombreRappels = nombre; // Stocker le nombre dans la variable
    },
    (err) => {
      console.error('Erreur lors de la récupération du nombre de rappels.', err);
    }
  );
}
 

 
}