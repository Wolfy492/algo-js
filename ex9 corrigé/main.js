class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }
 
  isLucky() {
   return Math.floor(Math.random()* 100) <= this.luck;
  }

  attackPokemon(pokemon) {
    if(this.isLucky()) {
        let damages = this.attack - pokemon.defense;
        pokemon.hp -= damages;
        console.log(`${this.name} a attaqué ${pokemon.name},perdant ${damages} hp!`);

    } else {
        console.log(`${this.name} a raté son attaque !`);
    }
  }

}
let tortank = new Pokemon('Tortank', 15, 5, 30 ,75);
let rattata = new Pokemon('Rattata', 10, 3, 30 ,50);

while (tortank.hp > 0 && rattata.hp > 0) {

  rattata.attackPokemon(tortank)

  if (tortank.hp <= 0) {
    console.log('tortank a perdu le combat')
    break 
  }
  tortank.attackPokemon(rattata)

  if(rattata.hp <= 0){
  console.log('rattata a perdu le combat')
  break
  }
}

console.log ('le combat est terminé')















/*while (tortank.hp > 0) {
  if (rattata.hp>0){
    tortank.attackPokemon(rattata);
    rattata.attackPokemon(tortank);
  }else{
    break
  }
}

let win = "";
let loose = "";
if (tortank.hp < 0) {
  winner = "Tortank";
  looser = "Rattata";
} else {
  winner = "Rattata";
  looser = "Tortank";
}

// Resultat
console.log(`${loose} est mort, ${win} l'a battu!`); */
