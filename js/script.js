// Ajout des évènements
document.getElementById("pierre").addEventListener("click", () => { jouer(0); });
document.getElementById("feuille").addEventListener("click", () => { jouer(1); });
document.getElementById("ciseaux").addEventListener("click", () => { jouer(2); });

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
    if (coupJoueur1 < 0 || coupJoueur1 > 2) {
        return "coup invalide joueur 1";
    } else if (coupJoueur2 < 0 || coupJoueur2 > 2) {
        return "coup invalide joueur 2";
    }

    if (coupJoueur1 == coupJoueur2) {
        return "egalitée";
    } else if (coupJoueur1 > coupJoueur2 && coupJoueur1 != 2) {
        return "gagné";
    } else {
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
        case 0: return "pierre";
        case 1: return "feuille";
        case 2: return "ciseaux";
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
    document.getElementById("test").textContent = `Nombre de fois ${i}`;
}