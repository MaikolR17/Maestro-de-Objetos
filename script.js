const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

//Una serie de objetos Pokémon donde la identificación es divisible por 3:
const divisibleFor3 = pokemon.filter(p => p.id % 3 === 0);

//Una serie de objetos Pokémon donde el tipo es "fuego":
const typeOfFire = pokemon.filter(p => p.types.includes("fire"));

//Una variedad de objetos Pokémon que tienen más de un tipo:
const moreThanOneType = pokemon.filter(p => p.types.length > 1);

//Una matriz con solo los nombres de los Pokémon:
const pokemonNames = pokemon.map(p => p.name);

//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99:
const moreThan99ID = pokemon.filter(p => p.id > 99).map(p => p.name);

//Una matriz con solo los nombres del Pokémon cuyo único tipo es "veneno":
const pokemonOfPoison = pokemon.filter(p => p.types.length === 1 && p.types[0] === "poison").map((p => p.name));

//Una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador":
const typeOfFlying = pokemon.filter(p => p.types.length === 2 && p.types[1] === "flying").map((p => p.name));

//Un recuento de la cantidad de Pokémon que son de tipo "normal":
const types = pokemon.map(p => p.types);
var countTypeNormal = 0
function howManyNormal(){
    for (let i = 0; i < types.length; i++) {
        if (types[i].includes("normal")) {
            countTypeNormal++;
        }
    }
}

howManyNormal();

console.log(divisibleFor3);
console.log(typeOfFire);
console.log(moreThanOneType);
console.log(pokemonNames);
console.log(moreThan99ID);
console.log(pokemonOfPoison);
console.log(typeOfFlying);
console.log(`Hay ${countTypeNormal} Pokémones de tipo normal`);