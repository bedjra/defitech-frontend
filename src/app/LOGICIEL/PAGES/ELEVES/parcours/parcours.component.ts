import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Student } from '../../../MODELS/student';
import { StudentService } from '../../../SERVICES/student.service';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.css'
})
export class ParcoursComponent implements OnInit {
  studentsByParcours: Student[] = [];

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    // Récupération du parcours à partir de l'URL
  //  this.route.params.subscribe((params) => {
  //    const parcours = params['parcours'];
  //    this.loadStudentsByParcours(parcours);
  //  });
  }

  // Ajout de la méthode loadStudentsByParcours
//  loadStudentsByParcours(parcours: string): void {
//    this.studentService.getStudentsByParcours(parcours).subscribe((students) => {
//      this.studentsByParcours = students;
//    });
//  }
}
