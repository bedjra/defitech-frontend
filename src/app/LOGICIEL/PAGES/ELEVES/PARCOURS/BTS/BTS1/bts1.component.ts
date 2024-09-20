import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EtudiantService } from '../../../../../SERVICES/etudiant.service';
import { AddComponent } from '../../../ADD/add/add.component';
const routes: Routes = [
  { path: 'editer-etudiant/:matricule', component: AddComponent },
  // autres routes...
];
@Component({
  selector: 'app-bts1',
  standalone: true,
  imports: [RouterLink, CommonModule,RouterModule,
    FormsModule,],
  templateUrl: './bts1.component.html',
  styleUrls: ['./bts1.component.css']
})
export class Bts1Component implements OnInit{

  etudiants: any[] = [];
  selectedEtudiant: any = null;
  nom: string = '';
  prenom: string = '';
  boutonImpressionVisible: boolean = false;
  etudiantId: string | null = null;  // Stocke l'ID de l'étudiant
  isEditMode: boolean = false;
  etudiantMatricule: string | null = null;
  constructor(
    private modalService: NgbModal,
    private etudiantService: EtudiantService,
    private router: Router
  ) { }

  ngOnInit(): void {


    
    this.getEtudiants();
    
  }

  // Méthode pour récupérer les étudiants
  getEtudiants(): void {
    this.etudiantService.getEtudiantsByParcoursAndNiveau('BTS', 'PREMIERE_ANNEE')
      .subscribe(
        data => {
          this.etudiants = data;
        },
        error => {
          console.error('Erreur lors de la récupération des étudiants', error);
        }
      );
  }

  // Méthode pour supprimer un étudiant
  deleteEtudiant(matricule: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
        this.etudiantService.deleteEtudiant(matricule).subscribe(
            response => {
                this.etudiants = this.etudiants.filter(etudiant => etudiant.etudiantMatricule !== matricule);
                alert('Étudiant et ses paiements ont été supprimés avec succès.');
            },
            error => {
                console.error('Erreur lors de la suppression de l\'étudiant', error);
                alert('Une erreur s\'est produite lors de la suppression. Détails: ' + (error.error.message || error.message || 'Erreur inconnue'));
            }
        );
    }
  }

  // Méthode pour ouvrir le modal avec les détails d'un étudiant
  openDetails(content: TemplateRef<any>, etudiant: any): void {
    this.selectedEtudiant = etudiant;
    this.modalService.open(content);
  }

  // Fermer le modal proprement
  closeModal(): void {
    this.modalService.dismissAll();  // Ferme tous les modals ouverts
    this.selectedEtudiant = null;
  }

  // Méthode de recherche des étudiants par nom et prénom
  searchEtudiants(nom: string, prenom: string): void {
    this.etudiantService.searchEtudiantsByNomAndPrenom(nom, prenom).subscribe(data => {
      this.etudiants = data;
    });
  }

  // Impression
  printListe(): void {
    window.print();
    this.boutonImpressionVisible = true;  // Vous pouvez retirer cette ligne si ce n'est pas nécessaire
  }

  // Méthode pour rediriger vers la page d'édition d'un étudiant
  editEtudiant(matricule: string): void {
    console.log('Redirection vers la page d\'édition pour l\'étudiant avec matricule :', matricule);
    this.router.navigate(['/editer-etudiant', matricule]);
  }
  
}