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
  imports: [RouterLink, 
    CommonModule,
    FormsModule],
  templateUrl: './scolarite.component.html',
  styleUrl: './scolarite.component.css'
})export class ScolariteComponent implements OnInit {
  student = {
    etudiantNom: '',
    etudiantPrenom: '',
    montantFinal: '', 
  };

  paiements: any[] = [];

  paiement = {
    montantActuel: '',
    datePaiement: new Date(),
  };

  constructor(private paiementService: PaiementService) {}

  ngOnInit(): void {
    // À implémenter : charger les données si nécessaire
  }

  printEtudiant() {
    window.print(); // Ouvre la boîte de dialogue d'impression du navigateur
  }
}