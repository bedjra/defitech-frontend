import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parametre',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatIconModule],
  templateUrl: './parametre.component.html',
  styleUrl: './parametre.component.css'
})
export class ParametreComponent {
  user = {
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    phone: '+33 6 12 34 56 78',
    address: '123 Rue du Faubourg, Paris, France',
    avatarUrl: 'https://th.bing.com/th/id/R.660b56fcb220dc2a08aab4b568f2f399?rik=9T2NiMsumr6wNA&pid=ImgRaw&r=0'
  };
}
