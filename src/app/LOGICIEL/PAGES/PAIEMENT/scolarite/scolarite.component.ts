import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaiementService } from '../../../SERVICES/paiement.service';
import { Paiement } from '../../../MODELS/paiement';
import { Student } from '../../../MODELS/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scolarite',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './scolarite.component.html',
  styleUrl: './scolarite.component.css'
})
export class ScolariteComponent implements OnInit {
  parcoursList: string[] = [];
  filiereList: string[] = [];
  filteredPaiements: any[] = [];
  today: Date = new Date();

  student = {
    etudiantNom: '',
    etudiantPrenom: '',
    montantFinal: '',
    filiere: '',
    niveau: '',
  };

  paiements: any[] = [];

  paiement = {
    montantActuel: '',
    datePaiement: new Date(),
  };

  constructor(private paiementService: PaiementService) {}

  ngOnInit(): void {
    this.loadEtudiantsParStatuts(); // Charger les étudiants selon les statuts
  }

  // Charger les étudiants ayant les statuts spécifiés
  loadEtudiantsParStatuts(): void {
    this.paiementService.getEtudiantsParStatuts().subscribe((data: any[]) => {
      this.filteredPaiements = data;
      this.filterPaiementsWithReste(); // Si besoin d'une méthode de filtrage spécifique
    });
  }

  // Optionnel: Filtrer les paiements ayant un reste à payer
  filterPaiementsWithReste(): void {
    this.filteredPaiements = this.filteredPaiements.filter(paiement => paiement.reste > 0);
  }

  // Fonction d'impression pour les étudiants
  printEtudiant(): void {
    window.print(); // Ouvre la boîte de dialogue d'impression du navigateur
  }
  printFiche(): void {
    window.print();
  }
}

