class conducteur {
  // définition de la class
  constructor(name, vie) {
    this.name = name;
    this.vie = vie;
  }
}
let John = new conducteur("John", 10); //variable John
var music; //variable music
let feuRouge = 30; //variable nombre de feu rouge
let Taxi = 1; //variable nombre de taxi

let listMusique = ["Anissa", "musique 2", "musique 3", "musique 4", "musique 5"];
//liste des 5 chansons dont Anissa



for (let i = 30; i >= 0; i--) {//Boucle

  music = listMusique[Math.floor(Math.random() * listMusique.length)]; //aléatoire

  if (John.vie <= 0) {
    console.log("La santé mentale de John est à 0, EXPLOSION");
    break; //si la santé mental de John tombe à 0 alors il explose
  }
  if (i == 0) {
    console.log("John est rentré chez lui avec " + Taxi + " taxis.");
    break; //phrase fin
  }
  if (music == "musique 2") {
    //si musique 2 est joué alors John aime bien la musique et affiche le nombre de feux rouges restant
    console.log("John aime bien la "+ music +", il reste " + i + " feux rouges");
  }
  if (music == "musique 3") {
    //si musique 3 est joué alors John aime bien la musique et affiche le nombre de feux rouges restant
    console.log("John aime bien la "+ music +", il reste " + i + " feux rouges");
  }
  if (music == "musique 4") {
    //la même avec musique 4
    console.log("John aime bien la "+ music +", il reste " + i + " feux rouges");
  }
  if (music == "musique 5") {
    //la même avec musique 5
    console.log("John aime bien la "+ music +", il reste " + i + " feux rouges");
  }

  if (music == "Anissa") {
    John.vie--; // -1 dans la santé de john
    Taxi++; // +1 dans le compteur taxi
    console.log(
      // affiche la santé de John et le nombres de feux restant
      "John perd un point de santé mentale et change de taxi car "+ music +" passe sur la radio. Il reste à John " + John.vie +
      " points de santé mentale et il reste " + i + " feux rouges."
    );
  }
}
