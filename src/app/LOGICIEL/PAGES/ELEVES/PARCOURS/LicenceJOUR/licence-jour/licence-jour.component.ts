import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-licence-jour',
  standalone: true,
  imports: [RouterLink,RouterModule,
    CommonModule,
    FormsModule,],
  templateUrl: './licence-jour.component.html',
  styleUrl: './licence-jour.component.css'
})
export class LicenceJourComponent {

}
