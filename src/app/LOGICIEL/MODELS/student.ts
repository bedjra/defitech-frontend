export interface Student {
    // Informations de l'étudiant
    etudiantMatricule: string,
    etudiantNom: string;
    etudiantPrenom: string;
    etudiantAdresse: string;
    etudiantTelephone: string;
    etudiantEmail: string;
    etudiantDateNaissance: Date; 
    etudiantLieuNaissance: string;
    etudiantNationalite: string;
    etudiantSexe: 'masculin' | 'feminin';
    etudiantSerieBac: string;
    etudiantMentionBac: 'Passable' | 'Assez-Bien' | 'Bien' | 'Très-Bien';
    etudiantAutresDiplomes?: string; 
    etudiantAnneeBac: string; 
    etudiantPaysBac: string;
    etudiantEtablissementProvenance: string;
    etudiantDateInscription: Date; 
  
    // Informations du tuteur
    tuteurNom: string;
    tuteurPrenom: string;
    tuteurProfession: string;
    tuteurOrganisme: string;
    tuteurAdresse: string;
    tuteurEmail: string;
    tuteurTelBureau: string;
    tuteurTelDomicile: string;
    tuteurCel: string;
  
    // Informations des filières et modalités
    parcours: string;
    filiere: string;
    niveau: string;
    boursier: 'Oui' | 'Non';
    montantFinal: string; // Peut être `number` si c'est un montant numérique
    modalitesPaiement: string;
  }
  

    
