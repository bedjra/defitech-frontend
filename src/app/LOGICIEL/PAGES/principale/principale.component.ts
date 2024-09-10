import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../COMPOSANTS/header/header.component';
import { MenuComponent } from '../../COMPOSANTS/menu/menu.component';

@Component({
  selector: 'app-principale',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    MenuComponent
  ],
  templateUrl: './principale.component.html',
  styleUrl: './principale.component.css'
})
export class PrincipaleComponent {

}
