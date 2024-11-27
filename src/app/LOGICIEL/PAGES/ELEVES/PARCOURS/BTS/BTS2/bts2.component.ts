import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EtudiantService } from '../../../../../SERVICES/etudiant.service';
import { HttpClient } from '@angular/common/http';
import { Filiere } from '../../../../../MODELS/filiers';
import { FiliersService } from '../../../../../SERVICES/filiers.service';
import { DataSharingServiceService } from '../../../../../SERVICES/data-sharing-service.service';
import { EcheanceService } from '../../../../../SERVICES/echeance.service';
import { Paie } from '../../../../../MODELS/paie';

@Component({
  selector: 'app-bts2',
  standalone: true,
  imports: [RouterLink,RouterModule,
    FormsModule,
    CommonModule],
  templateUrl: './bts2.component.html',
  styleUrl: './bts2.component.css'
})
export class Bts2Component implements OnInit {etudiants: any[] = [];
  rappels: Paie[] = [];
  loading = true;
  error: string | null = null;
  nombreRappels: number = 0; // Variable pour stocker le nombre de paiements

  selectedEtudiant: any = null;
  nom: string = '';
  prenom: string = '';
  boutonImpressionVisible: boolean = false;
  filiereList: Filiere[] = []; // Liste des filières
  selectedFiliere: string = '';

  // Valeurs statiques
  readonly parcoursId: number = 2; // Parcours ID fixe
  readonly niveauEtude: string = 'DEUXIEME_ANNEE'; // Niveau d'étude fixe


  constructor(
    private modalService: NgbModal,
    private etudiantService: EtudiantService,
    private router: Router,
    private filiersService: FiliersService,
    private dataSharingServiceService: DataSharingServiceService,
    private echeanceService: EcheanceService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getEtudiants();
    this.loadFiliereList();
    this.echeanceService.getNombreRappelsAVenir().subscribe(
      (nombre: number) => {
        this.nombreRappels = nombre; // Stocker le nombre dans la variable
      },
      (err) => {
        console.error('Erreur lors de la récupération du nombre de rappels.', err);
      }
    );
  }

  // Méthode pour récupérer les étudiants
  getEtudiants(): void {
    this.etudiantService.getEtudiantsByParcoursAndNiveau('BTS', 'DEUXIEME_ANNEE')
      .subscribe(
        data => {
          this.etudiants = data;
          this.dataSharingServiceService.updateEtudiants(this.etudiants); // Met à jour le service

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



  // Fermer le modal
  closeModal(): void {
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      modalElement.classList.remove('show');
    }
    this.selectedEtudiant = null;
  }

  // Méthode pour rediriger vers la page d'edition avec les données de l'étudiant
  editEtudiant(matricule: string) {
    this.router.navigate(['/modifier-étudiant', matricule]);
  }

  loadFiliereList(): void {
    this.filiersService.getFilieresByParcours(this.parcoursId).subscribe((filieres) => {
      this.filiereList = filieres;
    });
  }

 // Charger les étudiants selon la filière sélectionnée
 loadEtudiants(): void {
  if (this.selectedFiliere) {
    this.filiersService.getEtudiantsByFiliereAndNiveau(this.selectedFiliere, this.niveauEtude)
      .subscribe((etudiants) => {
        this.etudiants = etudiants;
        this.dataSharingServiceService.updateEtudiants(this.etudiants); 
      });
  }
}


  // Impression
  redirectToDefitech(): void {
    if (this.selectedFiliere && this.niveauEtude) {
      this.router.navigate(['/defitech'], {
        queryParams: {
          filiere: this.selectedFiliere,
          niveau: this.niveauEtude
        }
      }).then(() => {
        setTimeout(() => {
          window.print();
        }, 300);
      });
    } else {
      alert('Veuillez sélectionner une filière.');
    }
  }
  

}

