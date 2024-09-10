import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../MODELS/student';
import { DataService } from '../../../../SERVICES/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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

   parcoursList: string[] = []; 
   filiereList: string[] = []; 
 
  student: Student = {
    etudiantMatricule: '',
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.dataService.getParcours().subscribe(data => {
      this.parcoursList = data;
    });

    this.dataService.getFilieres().subscribe(data => {
      this.filiereList = data;
    });
  }

  onSubmit() {
    console.log(this.student);
    // Traitement du formulaire
  }

}