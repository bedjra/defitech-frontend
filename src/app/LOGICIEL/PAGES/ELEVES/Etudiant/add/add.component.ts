import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../MODELS/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudentService } from '../../../../SERVICES/student.service';
import { Parcours } from '../../../../MODELS/parcours';
import { Filiere } from '../../../../MODELS/filiers';
import { FiliersService } from '../../../../SERVICES/filiers.service';
import { ParcourService } from '../../../../SERVICES/parcour.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {

  parcoursList: Parcours[] = []; 
  filiereList: Filiere[] = []; 
  selectedParcoursId?: number;
   
  student: Student = {
    etudiantMatricule: '',
    etudiantNom: '',
    etudiantPrenom: '',
    etudiantAdresse: '',
    etudiantTelephone: '',
    etudiantEmail: '',
    etudiantDateNaissance: new Date(),
    etudiantLieuNaissance: '',
    etudiantNationalite: '',
    etudiantSexe: 'masculin',
    etudiantSerieBac: '',
    etudiantMentionBac: 'Passable',
    etudiantAutresDiplomes: '',
    etudiantAnneeBac: '',
    etudiantPaysBac: '',
    etudiantEtablissementProvenance: '',
    etudiantDateInscription: new Date(),
    tuteurNom: '',
    tuteurPrenom: '',
    tuteurProfession: '',
    tuteurOrganisme: '',
    tuteurAdresse: '',
    tuteurEmail: '',
    tuteurTelBureau: '',
    tuteurTelDomicile: '',
    tuteurCel: '',
    parcours: '',
    filiere: '',
    niveau: '',
    boursier: 'Non',
    montantFinal: '',
    modalitesPaiement: ''
  };

  constructor(
    private filiersService: FiliersService,
    private parcourService: ParcourService,
    private studentService: StudentService, 
    private route: ActivatedRoute  ) {}

    ngOnInit(): void {
      // Obtenir la liste des parcours au chargement du composant
      this.parcourService.getAllParcours().subscribe(data => {
        this.parcoursList = data;
      }, error => {
        console.error('Erreur lors de la récupération des parcours', error);
      });
    }
  
    onParcoursChange(event: Event): void {
      const selectElement = event.target as HTMLSelectElement;
      this.selectedParcoursId = +selectElement.value; // Convertir en nombre
      if (this.selectedParcoursId) {
        this.filiersService.getFilieresByParcours(this.selectedParcoursId).subscribe(data => {
          this.filiereList = data;
        }, error => {
          console.error('Erreur lors de la récupération des filières', error);
        });
      }
    }
  

  onSubmit(): void {
    if (this.isValid()) {
      this.studentService.saveEtudiant(this.student).subscribe(
        response => {
          console.log('Étudiant enregistré avec succès!', response);
          // Redirigez ou réinitialisez le formulaire si nécessaire
        },
        error => {
          console.error('Erreur lors de l\'enregistrement de l\'étudiant', error);
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }

  isValid(): boolean {
    // Ajoutez la logique de validation si nécessaire
    return true;
  }
  
}