import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../../../../MODELS/student';
import { StudentService } from '../../../../../SERVICES/student.service';

@Component({
  selector: 'app-bts1',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './bts1.component.html',
  styleUrl: './bts1.component.css'
})
export class Bts1Component implements OnInit {

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
    const parcours = 'B';
    const niveau = 'PREMIERE_ANNEE';
    
    this.studentService.getStudentsByParcoursAndNiveau(parcours, niveau).subscribe(data => {
      this.students = data;
    });

}
}
