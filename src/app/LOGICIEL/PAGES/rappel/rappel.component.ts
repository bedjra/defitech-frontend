import { Component, OnInit } from '@angular/core';
import { EcheanceService } from '../../SERVICES/echeance.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Echeance } from '../../MODELS/echeance';

@Component({
  selector: 'app-rappel',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './rappel.component.html',
  styleUrl: './rappel.component.css'
})
export class RappelComponent implements OnInit {
  echeances: Echeance[] = [];

  constructor(private echeanceService: EcheanceService) { }

  ngOnInit(): void {
    this.loadRappelsEcheances();
  }

  // Charger les rappels d'échéances
  loadRappelsEcheances(): void {
    
    this.echeanceService.getRappelsAVenir().subscribe(
      (data: Echeance[]) => {
        this.echeances = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des rappels', error);
      }
    );
  }
}