import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { EtudiantService } from '../../SERVICES/etudiant.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [  RouterLink, MatCardModule, MatRadioModule, MatIconModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent  {
  count: number | undefined;
  nonjour : number | undefined;
  ajour : number | undefined;

  constructor( private etudiantService: EtudiantService) { }

  
    ngOnInit(): void {
      this.etudiantService.getCount().subscribe(
        (data: number) => {
          this.count = data;
        },
        (error) => {
          console.error('Error fetching count', error);
        }
      );
    
        this.etudiantService.getPartiAttente().subscribe(
        (data: number) => {
          this.nonjour = data;
        },
        (error) => {
          console.error('Error fetching count', error);
        }
      );

      this.etudiantService.getTpayee().subscribe(
        (data: number) => {
          this.ajour = data;
        },
        (error) => {
          console.error('Error fetching count', error);
        }
      );
    }
}
