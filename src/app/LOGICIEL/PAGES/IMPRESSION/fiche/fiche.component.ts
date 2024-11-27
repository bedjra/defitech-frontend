import { Component, OnInit } from '@angular/core';
import { Paiement } from '../../../MODELS/paiement';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']  // Corrigé de 'styleUrl' à 'styleUrls'
})
export class FicheComponent implements OnInit {
  paiements: any[] = [];
  echeances: any[] = [];
  dateDuJour: string;
  selectedFiliere: string | undefined;
  selectedNiveau: string | undefined;
  currentYear: number = 0;
  currentDate: string = '';

  constructor(private http: HttpClient, 
    private route: ActivatedRoute) {
    
    this.dateDuJour = new Date().toLocaleDateString('fr-FR'); // Date du jour au format français
  }



  ngOnInit(): void {
    const today = new Date();
    this.currentYear = new Date().getFullYear();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    this.currentDate = today.toLocaleDateString('fr-FR', options); // Formate la date en français
 
   // Récupérer les paramètres de l'URL
   this.route.queryParams.subscribe(params => {
    this.selectedFiliere = params['filiere'];
    this.selectedNiveau = params['niveau'];    

    // Vous pouvez maintenant utiliser selectedFiliere et selectedNiveau dans ce composant
    console.log("Filière :", this.selectedFiliere);
    console.log("Niveau :", this.selectedNiveau);


     // Charger les paiements si filière et niveau sont présents
     this.paiement();
    });
}


paiement(): void {
  if (!this.selectedFiliere || !this.selectedNiveau) {
    alert('Veuillez sélectionner une filière et un niveau.');
    return;
  }

  const url = `http://localhost:8060/api/comptable/by-filiere-and-niveau?nomFiliere=${this.selectedFiliere}&niveauEtude=${this.selectedNiveau}`;

  this.http.get<Paiement[]>(url).subscribe(
    allPaiements => {
      const currentDate = new Date();
      const oneMonthLater = new Date();
      oneMonthLater.setMonth(currentDate.getMonth() + 1);
  
      // Filtrer les paiements
      this.paiements = allPaiements
        .filter(paiement => {
          console.log('Paiement:', paiement);
  
          // Filtrer les échéances valides
          const validEcheances = paiement.echeances.filter(echeance => {
            const isValid =
              (echeance.statut === "EN_ATTENTE" || echeance.statut === "PARTIELLEMENT_PAYEE") &&
              new Date(echeance.dateEcheance) <= oneMonthLater &&
              new Date(echeance.dateEcheance) >= currentDate;
  
            console.log('Echéance:', echeance, 'Valide:', isValid);
            return isValid;
          });
  
          return validEcheances.length > 0; // Conserver uniquement les paiements avec des échéances valides
        })
        .sort((a, b) => a.etudiantNom.localeCompare(b.etudiantNom)); // Trier par nom d'étudiant
    },
    error => {
      console.error('Erreur lors du chargement des paiements:', error);
    }
  );
  

}



}






