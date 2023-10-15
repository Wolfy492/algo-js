const tableau_names = ["Marie", "Pierre", "Élise", "Antoine", "Louis"];
let caractéristiques = ["sportif", "nerd", "voleur", "blonde", "hipster"];
const stats = [ // les différentes stat 
  [0.4, 0.2, 0.4],
  [0.3, 0.4, 0.3],
  [0.2, 0.6, 0.2],
  [0.3, 0.5, 0.2],
  [0.1, 0.4, 0.5],
];
const joueurs = []; // Un tableau qui va représentant les survivants.
const Morts = []; // Un tableau des noms des survivants morts.
let tueur = ["Jason", 100]; // définition pseudo du tueur et points de vie.

class Personnage { // Définition classe "Personnage" qui représentent les survivants.

  constructor(nom, caractéristique, p_Dead, p_Dmg, p_DmgByDead) {
    this.p_Dead = p_Dead;
    this.p_Dmg = p_Dmg;
    this.p_DmgByDead = p_DmgByDead;
    this.nom = nom;
    this.caractéristique = caractéristique;
  }
}

tableau_names.forEach((nom) => { // Pour chaque prénom dans le tableau "tableau_names".
  let a = Math.floor(Math.random() * caractéristiques.length); // Sélectionne aléatoirement caractéristiques.
  let caractéristique = caractéristiques.splice(a, 1)[0]; //  pour éviter les doublons.

  let b = Math.floor(Math.random() * stats.length); // Sélectionne aléatoirement statistiques.
  let statPerso = stats.splice(b, 1)[0]; // pour éviter les doublons.

  const joueur = new Personnage(
    nom,
    caractéristique,
    statPerso[0],
    statPerso[1],
    statPerso[2]
  ); // Crée un objet Personnage avec le nom, la caractéristique et les statistiques aléatoires.
  joueurs.push(joueur); // Ajoute cet objet Personnage dans le tableau "joueurs".
});







// FONCTION 
function attaqueTueur(Target, SurviRandom) {

  const valeurAleatoire = Math.random(); // nombre aléatoire entre 0 (inclus) et 1 (exclus).

  if (valeurAleatoire < Target.p_Dead) {
    // Si la valeur aléatoire est inférieure à la probabilité de mort du survivant.
    console.log("Jason a tué", Target.nom);
    Morts.push(Target.nom);
    joueurs.splice(SurviRandom, 1);
} 
    else if (valeurAleatoire < Target.p_Dead + Target.p_Dmg)  
  {
    // Si la valeur aléatoire est inférieure à la somme de la probabilité de mort et de la probabilité de causer des dégâts.
    console.log(
        Target.nom,
      "esquive l'attaque de Jason et lui inflige 10 de dégats !"
    );
    tueur[1] -= 10; // Réduit les points de vie du tueur de 10.
  } else 
  {
    // Si la valeur est supérieure aux probabilités précédentes, le survivant se sacrifie.
    console.log(
        Target.nom,
      "se sacrifie en mettant 15 dégâts à Jason !"
    );
    tueur[1] -= 15; // Réduit les points de vie du tueur de 15.
    Morts.push(Target.nom);
    joueurs.splice(SurviRandom, 1);
  }

  console.log("Survivants morts :", Morts);

  combat(); // Appelle la fonction "combat" pour continuer le jeu.
}





// FONCTION 
function combat() {
  let affichageMort = "";

  if (joueurs.length >= 1 && tueur[1] > 0) {
    // reste au moins un survivant et que le tueur a des points de vie.
    let SurviRandom = Math.floor(
      Math.random() * joueurs.length
    ); // Sélectionne aléatoirement un survivant.
    let Target = joueurs[SurviRandom];
    attaqueTueur(Target, SurviRandom); // Appelle la fonction d'attaque du tueur.
  } else if (joueurs.length >= 1 && tueur[1] <= 0) {
    // S'il reste au moins un survivant mais que le tueur n'a plus de points de vie.
    for (let i = 0; i < Morts.length; i++) {
      
      //affiche mort 
      
        let c = Morts[i];

      if (Morts.length !== 1) {
         if (c === Morts[Morts.length - 1]) {
          affichageMort += " et " + c; // Construction de la liste des survivants morts.
        }
         
         else if (c === Morts[Morts.length - 2]) {
          affichageMort += c;
         }
          else {
          affichageMort += c + ", ";
        }
      } 
      
      else {
        affichageMort += c + ".";
      }
    }
    if (!affichageMort) {
      console.log("Jason est mort ! Tout le monde est vivant...");
    } else {
      console.log(
        "Jason est mort !", affichageMort, "ce sont sacrifices"
      );
    }
  } else if (joueurs.length === 0 && tueur[1] > 0) {
    console.log(
      "Jason a gagné. Il lui reste " + tueur[1] + " points de vie !"
    );
  } else if (joueurs.length === 0 && tueur[1] <= 0) {
    console.log(
      "Tous les survivants sont mort" + affichageMort + " Jason et mort aussi ! "
    );
  }
}

combat();
