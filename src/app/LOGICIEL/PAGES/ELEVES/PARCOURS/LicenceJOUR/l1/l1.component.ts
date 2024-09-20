import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EtudiantService } from '../../../../../SERVICES/etudiant.service';

@Component({
  selector: 'app-l1',
  standalone: true,
  imports: [RouterLink,
    CommonModule,RouterModule,
    FormsModule
  ],
  templateUrl: './l1.component.html',
  styleUrl: './l1.component.css'
})
export class L1Component implements OnInit { 
  etudiants: any[] = [];
  selectedEtudiant: any = null;
  nom: string = '';
  prenom: string = '';
  boutonImpressionVisible: boolean = false;

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
    this.etudiantService.getEtudiantsByParcoursAndNiveau('Licence du jour', 'PREMIERE_ANNEE')
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

  // Méthode de recherche des étudiants par nom et prénom
  searchEtudiants(nom: string, prenom: string): void {
    this.etudiantService.searchEtudiantsByNomAndPrenom(nom, prenom).subscribe(data => {
      this.etudiants = data;
    });
  }

  // Impression
  printListe(): void {
    window.print();
    this.boutonImpressionVisible = true; // Vous pouvez retirer cette ligne si ce n'est pas nécessaire
  }

  // Fermer le modal
  closeModal(): void {
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      modalElement.classList.remove('show');
    }
    this.selectedEtudiant = null;
  }

  // Méthode pour rediriger vers la page d'inscription avec les données de l'étudiant
  editEtudiant(etudiant: any) {
    this.router.navigate(['/inscrire-étudiant'], { queryParams: { 
      etudiantNom: etudiant.etudiantNom,
      etudiantPrenom: etudiant.etudiantPrenom,
      etudiantAdresse: etudiant.etudiantAdresse,
      etudiantTelephone: etudiant.etudiantTelephone,
      etudiantMail: etudiant.etudiantMail,
      etudiantDateNaiss: etudiant.etudiantDateNaiss,
      etudiantLieuNais: etudiant.etudiantLieuNais,
      etudiantNationnalite: etudiant.etudiantNationnalite,
      etudiantSexe: etudiant.etudiantSexe,
      etudiantSerieBac: etudiant.etudiantSerieBac,
      etudiantAnneeBac: etudiant.etudiantAnneeBac,
      etudiantPaysBac: etudiant.etudiantPaysBac,
      etudiantEtatProvenance: etudiant.etudiantEtatProvenance,
      etudiantAutreDiplome: etudiant.etudiantAutreDiplome,
      etudiantDateIns: etudiant.etudiantDateIns,
      mentionBac: etudiant.mentionBac,
      boursier: etudiant.boursier,
      parcoursId: etudiant.parcoursId,
      nomFiliere: etudiant.nomFiliere,
      niveauEtude: etudiant.niveauEtude,
      typeModalite: etudiant.typeModalite,
      tuteurNom: etudiant.tuteurNom,
      tuteurPrenom: etudiant.tuteurPrenom,
      tuteurProfession: etudiant.tuteurProfession,
      tuteurOrganismeEmployeur: etudiant.tuteurOrganismeEmployeur,
      tuteurAdresse: etudiant.tuteurAdresse,
      tuteurTelBureau: etudiant.tuteurTelBureau,
      tuteurTelDom: etudiant.tuteurTelDom,
      tuteurCel: etudiant.tuteurCel,
      tuteurEmail: etudiant.tuteurEmail
    }});
  }
}


