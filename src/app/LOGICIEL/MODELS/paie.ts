export interface Paie {
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
        datePaiement: string;
        montantActuel: number;
        resteEcolage: number;
        montantAChanger: number;
        echeances: Array<{
          id: number;
          montantParEcheance: number;
          dateEcheance: string;
          statut: string;
          resteSurEcheance: number;
          dateEnvoi: string;
        }>;
        statutScolarite: string;
        tuteurMail: string;
      
}
