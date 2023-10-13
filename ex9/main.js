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

tortank.attackPokemon(rattata)
