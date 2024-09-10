import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../../../../MODELS/student';
import { StudentService } from '../../../../../SERVICES/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-licence-soir',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './licence-soir.component.html',
  styleUrl: './licence-soir.component.css'
})
export class LicenceSoirComponent implements OnInit {

  boutonImpressionVisible : boolean = false;

  printListe(){
    window.print(); 
    this.boutonImpressionVisible = true;
  }

  students: Student[] = [];

  constructor(private studentService: StudentService) {}


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

  ngOnInit(): void {
    this.loadStudents();
  }
  loadStudents(): void {
    const parcours = 'licence-du-Soir';
    const niveau = 'TROISIEME_ANNEE';
    
    this.studentService.getStudentsByParcoursAndNiveau(parcours, niveau).subscribe(data => {
      this.students = data;
    });

}
}
