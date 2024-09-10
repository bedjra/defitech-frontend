export interface Paiement {
    id: number;
    montant: number;
    datePaiemnt: Date;
    reste : number;
    student: {
      etudiantmatricule: String;
      etudiantNom: string;
      etudiantPrenom: string;
      parcours : string;
      montantfinal : string;
    };
}
