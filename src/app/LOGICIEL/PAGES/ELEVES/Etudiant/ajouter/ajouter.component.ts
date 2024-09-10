import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Student } from '../../../../MODELS/student';

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    RouterLink],
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css'
})
export class AjouterComponent  {
  parcoursList: string[] = []; 
  filiereList: string[] = []; 
 
  student: Student = {
    etudiantMatricule:'',
    etudiantNom: '',
    etudiantPrenom: '',
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

  onSubmit() {
    console.log(this.student);
    // Traitement du formulaire
  }

}
