import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Importer les interceptors
import { JwtInterceptor } from '../service/JwtInterceptor'; // Votre intercepteur JWT
import { AuthResponse } from '../service/authResponse';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // Ajouter HttpClientModule
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } // Configurer l'intercepteur ici
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  selectedRole: string = '';

  constructor(private authService: LoginService, private router: Router) { }

  // Choisir le rôle de l'utilisateur
  selectRole(role: string) {
    this.selectedRole = role;
    console.log(`Selected role: ${this.selectedRole}`);
  }

  // Envoyer les informations de connexion
  // Envoyer les informations de connexion
  onSubmit() {
    // Vérifier si l'utilisateur est "UserComptable" avec le mot de passe "123456"
    if (this.username === 'UserComptable' && this.password === '123456') {
      console.log('Connexion réussie pour UserComptable');
      this.router.navigate(['statistique']);
    }

    console.log(this.authService.getUserInfo());
    console.log('Connexion réussie id= ', this.authService.getUserId());
  }

  // Rediriger en fonction du rôle sélectionné
  
}
