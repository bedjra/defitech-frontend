import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../../../../MODELS/student';
import { StudentService } from '../../../../../SERVICES/student.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-bts2',
  standalone: true,
  imports: [RouterLink,
    CommonModule],
  templateUrl: './bts2.component.html',
  styleUrl: './bts2.component.css'
})
export class Bts2Component implements OnInit {

  boutonImpressionVisible: boolean = false;
  students: Student[] = [];

  // Étudiant sélectionné pour l'affichage des détails
  selectedStudent: Student | null = null;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  // Initialisation de l'étudiant pour éviter des erreurs d'accès null
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

  ngOnInit(): void {
    this.loadStudents();
  }

  // Charger les étudiants selon le parcours et le niveau
  loadStudents(): void {
    const parcours = 'BTS';
    const niveau = 'DEUXIEME_ANNEE';
    
    
    this.studentService.getStudentsByParcoursAndNiveau(parcours, niveau)
    .subscribe((data: Student[]) => {
      this.students = data;
    }, (error: any) => {
      console.error('Erreur lors de la récupération des étudiants', error);
    });

  }

  // Afficher les détails d'un étudiant dans un modal
  showDetails(student: Student): void {
    this.selectedStudent = student;
    document.getElementById('detailsModal')?.classList.add('show');
  }



  // Éditer un étudiant (ouvrir un modal ou rediriger vers une page d'édition)
  editStudent(student: Student): void {
    this.router.navigate(['/add'], { queryParams: { student: JSON.stringify(student) } });
  }

  // Supprimer un étudiant
  deleteStudent(matricule: string): void {
    // Convertir matricule en nombre (assurez-vous que ce soit le bon type pour `id`)
    const matriculeNumber = Number(matricule);
  
    // Vérifier que la conversion est valide
    if (!isNaN(matriculeNumber)) {
      this.studentService.deleteEtudiant(matriculeNumber).subscribe(() => {
        console.log('Étudiant supprimé');
        this.loadStudents();
      }, (error: any) => {
        console.error('Erreur lors de la suppression de l’étudiant', error);
      });
    } else {
      console.error('Matricule invalide');
    }
  }
  
  
  
  

  // Impression
  printListe(): void {
    window.print();
    this.boutonImpressionVisible = true;
  }

  closeModal(): void {
    document.getElementById('detailsModal')?.classList.remove('show');
    this.selectedStudent = null;
  }
  
}