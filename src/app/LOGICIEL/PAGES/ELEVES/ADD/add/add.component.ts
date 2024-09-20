
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { EnumsService } from "../../../../SERVICES/enums.service";
import { EtudiantService } from "../../../../SERVICES/etudiant.service";
import { FiliersService } from "../../../../SERVICES/filiers.service";
import { ParcourService } from "../../../../SERVICES/parcour.service";
import { Etudiant } from "../../../../MODELS/etudiant";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {

  statutBoursier: string[] = [];
  mentions: string[] = [];
  modalites: string[] = [];
  parcoursList: any[] = [];
  filiereList: any[] = [];
  nomParcours: string = '';
  niveaux: any[] = []
  isEditMode: boolean = false; // Pour savoir si on est en mode édition
  etudiantId: string | null = null;

  etudiant: Etudiant = {
    etudiantNom: '',
    etudiantPrenom: '',
    etudiantAdresse: '',
    etudiantTelephone: '',
    etudiantMail: '',
    etudiantDateNaiss: '',
    etudiantLieuNais: '',
    etudiantNationnalite: '',
    etudiantSexe: '',
    etudiantSerieBac: '',
    etudiantAnneeBac: '',
    etudiantPaysBac: '',
    etudiantEtatProvenance: '',
    etudiantAutreDiplome: '',
    etudiantDateIns: '',
    mentionBac: '',
    boursier: '',
    parcoursId: 0,
    nomFiliere: '',
    niveauEtude: '',
    typeModalite: '',
    tuteurNom: '',
    tuteurPrenom: '',
    tuteurProfession: '',
    tuteurOrganismeEmployeur: '',
    tuteurAdresse: '',
    tuteurTelBureau: '',
    tuteurTelDom: '',
    tuteurCel: '',
    tuteurEmail: ''
  };

  apiUrl: string = 'http://localhost:8060/api/comptable/ajout_etudiant';


  constructor(
    private filiersService: FiliersService,
    private enumsService: EnumsService,
    private parcourService: ParcourService,
    private etudiantService: EtudiantService,
    private http: HttpClient,
    private router: Router ,

    private route: ActivatedRoute) { }





  ngOnInit(): void {
    // Appel du service pour récupérer les parcours
    this.parcourService.getParcours().subscribe(
      (data) => {
        this.parcoursList = data; // Assigner les données reçues à la liste
      },
      (error) => {
        console.error('Erreur lors de la récupération des parcours', error);
      }
    );


    this.enumsService.getModalites().subscribe(
      (data) => {
        this.modalites = data; // Assigner les données reçues à la liste
      },
      (error) => {
        console.error('Erreur lors de la récupération des modalites', error);
      }
    )




    this.enumsService.getMentions().subscribe(
      (data) => {
        this.mentions = data; // Assigner les données reçues à la liste
      },
      (error) => {
        console.error('Erreur lors de la récupération des mentions', error);
      }
    )


    this.enumsService.getStatutBoursier().subscribe(
      (data) => {
        this.statutBoursier = data; // Assigner les données reçues à la liste
      },
      (error) => {
        console.error('Erreur lors de la récupération des Bourses', error);
      }
    );

    // Vérifiez si nous avons des paramètres d'édition
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.etudiant = {
          etudiantNom: params['etudiantNom'] || '',
          etudiantPrenom: params['etudiantPrenom'] || '',
          etudiantAdresse: params['etudiantAdresse'] || '',
          etudiantTelephone: params['etudiantTelephone'] || '',
          etudiantMail: params['etudiantMail'] || '',
          etudiantDateNaiss: params['etudiantDateNaiss'] || '',
          etudiantLieuNais: params['etudiantLieuNais'] || '',
          etudiantNationnalite: params['etudiantNationnalite'] || '',
          etudiantSexe: params['etudiantSexe'] || '',
          etudiantSerieBac: params['etudiantSerieBac'] || '',
          etudiantAnneeBac: params['etudiantAnneeBac'] || '',
          etudiantPaysBac: params['etudiantPaysBac'] || '',
          etudiantEtatProvenance: params['etudiantEtatProvenance'] || '',
          etudiantAutreDiplome: params['etudiantAutreDiplome'] || '',
          etudiantDateIns: params['etudiantDateIns'] || '',
          mentionBac: params['mentionBac'] || '',
          boursier: params['boursier'] || '',
          parcoursId: +params['parcoursId'] || 0, // Assurez-vous de convertir en nombre si nécessaire
          nomFiliere: params['nomFiliere'] || '',
          niveauEtude: params['niveauEtude'] || '',
          typeModalite: params['typeModalite'] || '',
          tuteurNom: params['tuteurNom'] || '',
          tuteurPrenom: params['tuteurPrenom'] || '',
          tuteurProfession: params['tuteurProfession'] || '',
          tuteurOrganismeEmployeur: params['tuteurOrganismeEmployeur'] || '',
          tuteurAdresse: params['tuteurAdresse'] || '',
          tuteurTelBureau: params['tuteurTelBureau'] || '',
          tuteurTelDom: params['tuteurTelDom'] || '',
          tuteurCel: params['tuteurCel'] || '',
          tuteurEmail: params['tuteurEmail'] || ''
        };
      }
    });

  }

  onParcoursChange(event: any): void {
    const parcoursId = event.target.value;
    this.filiersService.getFiliereByParcours(parcoursId).subscribe(
      (data) => {
        this.filiereList = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des filières', error);
      }
    );
  }
/*
  onSubmit() {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir enregistrer cet étudiant ?");
    if (confirmation) {
      this.http.post(this.apiUrl, this.etudiant)
        .subscribe(response => {
          console.log('Étudiant ajouté avec succès', response);
        }, error => {
          console.error('Erreur lors de l’ajout de l’étudiant', error);
        });
    } else {
      console.log('Enregistrement annulé.');
    }
  }
*/
onSubmit() {
  const confirmation = window.confirm("Êtes-vous sûr de vouloir enregistrer cet étudiant ?");

  if (confirmation) {
    this.etudiantService.ajouterEtudiant(this.etudiant).subscribe(response => {
      alert('L\'étudiant a été ajouté avec succès.');
      this.router.navigate(['/etudiants']);
    }, error => {
      console.error('Erreur lors de l’ajout de l’étudiant', error);
      alert('Une erreur est survenue lors de l\'ajout.');
    });
  }
}




  // Méthode pour réinitialiser le formulaire
  resetEtudiant(): void {
    this.etudiant = {
      etudiantNom: '',
      etudiantPrenom: '',
      etudiantAdresse: '',
      etudiantTelephone: '',
      etudiantMail: '',
      etudiantDateNaiss: '',
      etudiantLieuNais: '',
      etudiantNationnalite: '',
      etudiantSexe: '',
      etudiantSerieBac: '',
      etudiantAnneeBac: '',
      etudiantPaysBac: '',
      etudiantEtatProvenance: '',
      etudiantAutreDiplome: '',
      etudiantDateIns: '',
      mentionBac: '',
      boursier: '',
      parcoursId: 0,
      nomFiliere: '',
      niveauEtude: '',
      typeModalite: '',
      tuteurNom: '',
      tuteurPrenom: '',
      tuteurProfession: '',
      tuteurOrganismeEmployeur: '',
      tuteurAdresse: '',
      tuteurTelBureau: '',
      tuteurTelDom: '',
      tuteurCel: '',
      tuteurEmail: ''
    };
  }

}