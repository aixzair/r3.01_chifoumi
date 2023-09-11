// Ajout des évènements
document.getElementById("pierre").addEventListener("click", () => { jouer(PIERRE); });
document.getElementById("feuille").addEventListener("click", () => { jouer(FEUILLE); });
document.getElementById("ciseaux").addEventListener("click", () => { jouer(CISEAUX); });

// Définitions constantes
const PIERRE = 0;
const FEUILLE = 1;
const CISEAUX = 2;

/**
 * Joue un coup aléatoire
 * @returns coup
 */
function coupAleatoire() {
    return Math.floor(Math.random() * 3);
}

/**
 * Donne le resultat d'un duel
 * @param {*} coupJoueur1 
 * @param {*} coupJoueur2 
 * @returns resultat: string
 */
function resultat(coupJoueur1, coupJoueur2) {
    if (coupJoueur1 < PIERRE || coupJoueur1 > CISEAUX) {
        return "coup invalide joueur 1";
    } else if (coupJoueur2 < PIERRE || coupJoueur2 > CISEAUX) {
        return "coup invalide joueur 2";
    }

    if (coupJoueur1 == coupJoueur2) {
        return "egalitée";

    } else  if (coupJoueur1 > coupJoueur2) {
        if (coupJoueur1 === CISEAUX && coupJoueur2 === PIERRE) {
            return "perdu";
        }
        return "gagné";

    } else {
        if (coupJoueur1 === PIERRE && coupJoueur2 === CISEAUX) {
            return "gagné";
        }
        return "perdu";

    }
}

/**
 * Convertie un coup (number) en un mot 
 * @param {*} nombre 
 * @returns coup
 */
function convertirNombreCoup(nombre) {
    switch (nombre) {
        case PIERRE: return "pierre";
        case FEUILLE: return "feuille";
        case CISEAUX: return "ciseaux";
        default: return "coup invalide";
    }
}

/**
 * Joue un duel et donne le resultat
 * @param {*} coup 
 */
function jouer(coup) {
    const coupAdverse = coupAleatoire();
    
    document.getElementById("joueur").textContent = `Joueur : ${convertirNombreCoup(coup)}`;
    document.getElementById("robot").textContent = `Robot : ${convertirNombreCoup(coupAdverse)}`;
    document.getElementById("resultat").textContent = `Resultat : ${resultat(coup, coupAdverse)}`;
}