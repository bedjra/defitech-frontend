import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [  RouterLink, MatCardModule, MatRadioModule, MatIconModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent  {
  

    etudiantsCount: number = 10;
    professeursCount: number = 30;
    filieresCount: number =50;
  
  
  
}
