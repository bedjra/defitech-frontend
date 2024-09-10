export interface Echeance {

    id: number;
    montantParEcheance: number;
    dateEcheance: Date;
    statut: string;
    student: {
      matricule: String;
      nom: string;
      prenom: string;
    };
}

  