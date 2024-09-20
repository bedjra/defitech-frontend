import { Component, OnInit, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EtudiantService } from '../../../SERVICES/etudiant.service';
import { HttpClient } from '@angular/common/http';
import { Paiement } from '../../../MODELS/paiement';

@Component({
  selector: 'app-scolarite',
  standalone: true,
  imports: [RouterLink,   ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './scolarite.component.html',
  styleUrl: './scolarite.component.css'
})
export class ScolariteComponent implements OnInit {
  filieres: any[] = []; // Liste des filières
  niveaux: string[] = []; // Liste des niveaux
  selectedFiliere: string = '';
  selectedNiveau: string = '';
  selectedPaiement: Paiement | null = null;
  paiementForm: FormGroup;


  private filieresUrl = 'http://localhost:8060/api/comptable/filiere'; // URL pour récupérer les filières
  private niveauxUrl = 'http://localhost:8060/api/comptable/niveau'; // URL pour récupérer les niveaux
  paiements: Paiement[] = [];
  constructor(
    private etudiantService: EtudiantService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    
  ) { 
    this.paiementForm = this.fb.group({
      etudiantNom: ['', Validators.required],
      etudiantPrenom: ['', Validators.required],
      montantAPayer: [null, Validators.required],
      datePaiement: ['', Validators.required]
    });
  }


  ngOnInit(): void {
   /* this.getFilieres();*/
    this.loadFilieres();
    this.loadNiveaux();
  }

  // Fonction d'impression pour les étudiants
  printEtudiant(): void {
    window.print(); // Ouvre la boîte de dialogue d'impression du navigateur
  }
  printFiche(): void {
    window.print();
  }
  loadFilieres(): void {
    this.http.get<any[]>(this.filieresUrl).subscribe(
      data => {
        this.filieres = data;
      },
      error => {
        console.error('Erreur lors du chargement des filières:', error);
      }
    );
  }

  loadNiveaux(): void {
    this.http.get<string[]>(this.niveauxUrl).subscribe(
      data => {
        this.niveaux = data;
      },
      error => {
        console.error('Erreur lors du chargement des niveaux:', error);
      }
    );
  }

  onSearch(): void {
    const url = `http://localhost:8060/api/comptable/by-filiere-and-niveau?nomFiliere=${this.selectedFiliere}&niveauEtude=${this.selectedNiveau}`;
    this.http.get<Paiement[]>(url).subscribe(
      data => {
        this.paiements = data;
      },
      error => {
        console.error('Erreur lors du chargement des paiements:', error);
      }
    );
  }

 // Méthode pour ouvrir le modal avec les détails d'un étudiant
 openDetails(content: TemplateRef<any>, paiement: any): void {
  this.selectedPaiement = paiement;
  this.modalService.open(content);
}
submitPaiement(): void {
  if (this.paiementForm.valid) {
    const paiementData = this.paiementForm.value;
    // Appelez le service pour enregistrer les données de paiement
    this.etudiantService.addPaiement(paiementData).subscribe(response => {
      console.log('Paiement enregistré avec succès', response);
     
      // Réinitialisez le formulaire si nécessaire
      this.paiementForm.reset();
    });
  }
}
}

