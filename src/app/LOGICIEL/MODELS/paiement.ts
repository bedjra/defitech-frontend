import { Echeance } from "./echeance";

export interface Paiement {
etudiantId: number;
  etudiantNom: string;
  etudiantPrenom: string;
  etudiantMatricule: string;
  filiereNom: string;
  parcoursNom: string;
  reductionMontantFinal: number;
  niveauEtude: string;
  montantDejaPaye: number;
  typeModalite: string;
  datePaiement: string; // ou Date, selon la façon dont vous gérez les dates
  montantActuel: number;
  resteEcolage: number;
  echeances: Echeance[];
}
