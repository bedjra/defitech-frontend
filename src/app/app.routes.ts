import { Routes } from '@angular/router';
import { AccueilComponent } from './LOGICIEL/PAGES/accueil/accueil.component';
import { BtsComponent } from './LOGICIEL/PAGES/ELEVES/Etudiant/BTS/bts/bts.component';
import { Bts1Component } from './LOGICIEL/PAGES/ELEVES/Etudiant/BTS/BTS1/bts1.component';
import { Bts2Component } from './LOGICIEL/PAGES/ELEVES/Etudiant/BTS/BTS2/bts2.component';
import { L1Component } from './LOGICIEL/PAGES/ELEVES/Etudiant/LicenceJOUR/l1/l1.component';
import { L2Component } from './LOGICIEL/PAGES/ELEVES/Etudiant/LicenceJOUR/l2/l2.component';
import { L3Component } from './LOGICIEL/PAGES/ELEVES/Etudiant/LicenceJOUR/l3/l3.component';
import { LicenceJourComponent } from './LOGICIEL/PAGES/ELEVES/Etudiant/LicenceJOUR/licence-jour/licence-jour.component';
import { LicenceSoirComponent } from './LOGICIEL/PAGES/ELEVES/Etudiant/LicenceSOIR/licence-soir/licence-soir.component';
import { ScolariteComponent } from './LOGICIEL/PAGES/PAIEMENT/scolarite/scolarite.component';
import { PrincipaleComponent } from './LOGICIEL/PAGES/principale/principale.component';
import { ParametreComponent } from './LOGICIEL/PAGES/parametre/parametre.component';
import { RappelComponent } from './LOGICIEL/PAGES/rappel/rappel.component';
import { ParcourComponent } from './LOGICIEL/PAGES/ELEVES/parcour/parcour.component';
import { AddComponent } from './LOGICIEL/PAGES/ELEVES/Etudiant/add/add.component';




export const routes: Routes = [

  {
    path: '',
    component: PrincipaleComponent,
    children: [
      { path: 'statistique', component: AccueilComponent },
      { path: 'inscrire-étudiant', component: AddComponent },
      { path: 'parcours', component: ParcourComponent },
      { path: 'licence-du-jour' ,  component: LicenceJourComponent },
          { path: 'licence1', component: L1Component },            
          { path: 'licence2', component: L2Component },
          { path: 'licence3', component: L3Component },
      { path: 'BTS', component: BtsComponent },
          { path: 'bts1', component: Bts1Component },  
          { path: 'bts2', component: Bts2Component },   
      { path: 'licence-du-soir', component: LicenceSoirComponent },
      { path: 'scolarite', component: ScolariteComponent },
      { path: 'profil', component: ParametreComponent },
      { path: 'rappel', component: RappelComponent },

    ]
  },

];
