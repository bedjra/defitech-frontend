import { Component, Input, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Paiement } from '../../../MODELS/paiement';
import { CommonModule } from '@angular/common';
import { PaiementService } from '../../../SERVICES/paiement.service';
import bootstrap from '../../../../../main.server';
@Component({
  selector: 'app-renvoi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './renvoi.component.html',
  styleUrl: './renvoi.component.css'
})
export class RenvoiComponent implements OnInit {
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

