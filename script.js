const titleScreenElement = document.querySelector(`#titleScreen`)
const optnsContainerElement = document.querySelector(`#optnsContainer`)
const restartButtonElement = document.querySelector(`#restartButton`)
const starterSelectContainerElement = document.querySelector(`#starterSelectContainer`)
const growlitheSelectElement = document.querySelector(`#growlitheSelect`)
const electrikeSelectElement = document.querySelector(`#electrikeSelect`)
const rockruffSelectElement = document.querySelector(`#rockruffSelect`)
const selectionCongratsElement = document.querySelector(`#selectionCongrats`)
const okCongratsElement = document.querySelector(`#okCongrats`)
const youHaveSelectedElement = document.querySelector(`#youHaveSelected`)
const mainScreenElement = document.querySelector(`#mainScreen`)
const textBoxElement = document.querySelector(`#textBox`)
const nameYourStarterElement = document.querySelector(`#nameYourStarter`)
const nameInputElement = document.querySelector(`#nameInput`)
const fightButtonContainerElement = document.querySelector(`#fightButtonContainer`)
const fightButtonElement = document.querySelector(`#fightButton`)
const fightWindowElement = document.querySelector(`#fightWindow`)
const opponentSpriteContainerElement = document.querySelector(`#opponentSpriteContainer`)
const opponentSpriteElement = document.querySelector(`#opponentSprite`)
const opponentStatBlockElement = document.querySelector(`#opponentStatBlock`)
const playerSpriteContainerElement = document.querySelector(`#playerSpriteContainer`)
const playerSpriteElement = document.querySelector(`#playerSprite`)
const playerStatBlockElement = document.querySelector(`#playerStatBlock`)
const playerHPElement = document.querySelector(`#playerHP`)
const opponentHPElement = document.querySelector(`#opponentHP`)

// This is the input for a pokemon that is currently being built
// generatePokemon() fills this in and then it'll get pushed off
// to an object

//Empty Array for all generated Pokemon
let pokemonStorage = []

//Empty Array for Pokemon available to player during fight
let playerPokemon = []

//Empty Array for Pokemon available to opponent during fight
let opponentPokemon = []

//Empty variables for Pokemon generation before pushing to storage
let pokemonName = "Unknown Starter"
let pokemonSpecies = "Unknown Starter"
let pokemonType1 = "normal"
let pokemonType2 = "none"
let pokemonHp = 1
let pokemonAtk = 1
let pokemonDef = 1
let pokemonSpatk = 1
let pokemonSpdef = 1
let pokemonSpd = 1
let pokemonNature = "nondescript"
let pokemonFrontGif = "404 Pokemon Not Found"
let pokemonBackGif = "404 Pokemon Not Found"
let inPokeBall = false

//Empty variables for current fighting player-side Pokemon
let playerName = "Unknown Starter"
let playerType1 = "normal"
let playerType2 = "none"
let playerHp = 1
let playerAtk = 1
let playerDef = 1
let playerSpatk = 1
let playerSpdef = 1
let playerSpd = 1
let playerBackGif = "404 Pokemon Not Found"

//Empty variables for current fighting opponent-side Pokemon

let opponentName = "Unknown Starter"
let opponentType1 = "normal"
let opponentType2 = "none"
let opponentHp = 1
let opponentAtk = 1
let opponentDef = 1
let opponentSpatk = 1
let opponentSpdef = 1
let opponentSpd = 1
let opponentFrontGif = "404 Pokemon Not Found"

// Reseting values/menus

const startGame = () => {
    titleScreenElement.classList.remove(`inactive`)
    optnsContainerElement.classList.add(`inactive`)
    mainScreenElement.classList.add(`inactive`)
    mainScreenElement.style.display = `none`
    textBoxElement.innerText = ``
    nameYourStarterElement.classList.add(`inactive`)
    fightButtonContainerElement.classList.add(`inactive`)
    fightWindowElement.classList.add(`inactive`)
    fightButtonContainerElement.classList.add(`inactive`)
    pokemonStorage = []
    pokemonName = "Unknown Starter"
    pokemonSpecies = "Unknown Starter"
    pokemonType1 = "normal"
    pokemonType2 = "none"
    pokemonNature = "nondescript"
    pokemonHp = 0
    pokemonAtk = 0
    pokemonDef = 0
    pokemonSpatk = 0
    pokemonSpdef = 0
    pokemonSpd = 0
    pokemonFrontGif = ""
    pokemonBackGif = ""
    nameInputElement.value = ""
    inPokeBall = false
}

const generateRival = async () => {
    console.log(`Generating Rival...`)
    let rivalRandom = (Math.random() * 3)
    
    let rivalDetermination = "shinx"
    if (rivalRandom >= 0 && rivalRandom < 1) {
        rivalDetermination = "shinx"
    } else if (rivalRandom >= 1 && rivalRandom < 2) {
        rivalDetermination = "purrloin"
    } else {
        rivalDetermination = "sprigatito"
    }

    generatePokemon(rivalDetermination, false)
}

titleScreenElement.addEventListener(`click`, () => {
    enterStart()
})

document.addEventListener(`keydown`, (e) => {
    if (e.key === `Enter` && !titleScreenElement.classList.contains('inactive')) {
    enterStart()
    }
}
)

const enterStart = () => {
    optnsContainerElement.classList.remove(`inactive`)
    starterSelectContainerElement.classList.remove(`inactive`)
    mainScreenElement.classList.remove(`inactive`)
    mainScreenElement.style.display = `flex`
    textBoxElement.innerText = `Choose your Starter!`

    //Leave this at the end so the menu goes away once everything is loaded
    titleScreenElement.classList.add(`inactive`)
    generateRival()
}

//!In Progress!
const initiateFight = (player, opponent) => {
    
    
}

const getPlayer = (name) => {
    const pokemon = pokemonStorage.find(pokemon => pokemon.name === name);
    playerPokemon = []
    playerPokemon.push(pokemon)
    console.log(playerPokemon)
}

const getOpponent = (name) => {
    const pokemon = pokemonStorage.find(pokemon => pokemon.name === name);
    opponentPokemon = []
    opponentPokemon.push(pokemon)
    console.log(opponentPokemon)
}

// fightButtonElement.addEventListener(`click`, async () => {
//     let response = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${pokemonSpecies.toLowerCase()}/`
//     )
//     let response2 = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/dratini/`
//     )
//     pokemonHp = response.data.stats[0].base_stat
//     opponentHP = response2.data.stats[0].base_stat
//     opponentSprite = response2.data.sprites.other.showdown.front_default
//     playerSprite = response.data.sprites.other.showdown.back_default
//     fightWindowElement.classList.remove(`inactive`)
//     fightButtonContainerElement.classList.add(`inactive`)
//     textBoxElement.innerText = "You encounter your rival, Jeremy, and his Dratini!"
//     playerSpriteElement.setAttribute(`src`, playerSprite)
//     opponentSpriteElement.setAttribute(`src`, opponentSprite)
//     playerHPElement.innerText = `${pokemonSpecies.toUpperCase()}: ${pokemonHp} / ${pokemonHp}`
//     opponentHPElement.innerText = `DRATINI: ${opponentHP} / ${opponentHP}`
// })

growlitheSelectElement.addEventListener(`click`, () => {
    generatePokemon("growlithe", true)
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.remove(`inactive`)
    textBoxElement.innerText = `You have selected Growlithe!`
    nameYourStarterElement.classList.remove(`inactive`)
})

electrikeSelectElement.addEventListener(`click`, () => {
    generatePokemon("electrike", true)
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.remove(`inactive`)
    nameYourStarterElement.classList.remove(`inactive`)
    textBoxElement.innerText = `You have selected Electrike!`
})

rockruffSelectElement.addEventListener(`click`, () => {
    generatePokemon("rockruff", true)
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.remove(`inactive`)
    nameYourStarterElement.classList.remove(`inactive`)
    textBoxElement.innerText = `You have selected Rockruff!`
})

const generatePokemon = async (species, owned) => {
    pokemonNature = determineNature()
    
    let search = species

    if (species === "random") {
        search = Math.random() * 1000
    }

    response = await axios.get (
        `https://pokeapi.co/api/v2/pokemon/${search}/`
    )
    console.log(response)
    if (owned === true) {
        inPokeBall = true
    } else {
        inPokeBall = false
    }
    pokemonName = response.data.name
    pokemonSpecies = response.data.name
    pokemonType1 = response.data.types[0].type.name
    if (response.data.types[1] === null || response.data.types[1] === undefined) {
        pokemonType2 = "none"
    } else {
    pokemonType2 = response.data.types[1].type.name
    }
    pokemonFrontGif = response.data.sprites.other.showdown.front_default
    pokemonBackGif = response.data.sprites.other.showdown.back_default
    pokemonHp = response.data.stats[0].base_stat
    console.log(`You've made a ${pokemonNature} ${pokemonSpecies} named ${pokemonName} with ${pokemonHp} HP`)
    await generateATK(search, pokemonNature)
    await generateDEF(search, pokemonNature)
    await generateSPATK(search, pokemonNature)
    await generateSPDEF(search, pokemonNature)
    await generateSPD(search, pokemonNature)
    await sendToStorage()
    await getPlayer(search)
    console.log(pokemonStorage)
}

const sendToStorage = () => {

    const pokemon = {
        name: pokemonName,
        species: pokemonSpecies,
        type1: pokemonType1,
        type2: pokemonType2,
        hp: pokemonHp,
        atk: pokemonAtk,
        def: pokemonDef,
        spatk: pokemonSpatk,
        spdef: pokemonSpdef,
        spd: pokemonSpd,
        nature: pokemonNature,
        frontGif: pokemonFrontGif,
        backGif: pokemonBackGif
    };

    pokemonStorage.push(pokemon)
        
    console.log(`${pokemonName} has been stored!`)
}

okCongratsElement.addEventListener(`click`, () => {
    nameMyStarter()
})

nameInputElement.addEventListener(`keypress`, (e) => {
    if (e.key === `Enter`) {
        nameMyStarter()
}}
)
const nameMyStarter = () => {
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.add(`inactive`)
    nameYourStarterElement.classList.add(`inactive`)
    fightButtonContainerElement.classList.remove(`inactive`)
    if (nameInputElement.value !== "") {
        pokemonName = nameInputElement.value.toUpperCase()
    } else {
        pokemonName = pokemonSpecies.toUpperCase()
        }
    textBoxElement.innerText = `With ${pokemonName} the ${pokemonNature.toLowerCase()} ${pokemonSpecies}, at your side, you venture out into the wilds (despite being 10 years old)!`
}

const generateATK = async (species, nature) => {
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${species}/`
    )
    const speciesBonus = naturesObject[nature].bonus
    const speciesPen = naturesObject[nature].pen

    if (speciesBonus ==="atk" && speciesPen === "atk") {
        pokemonAtk = Math.floor(response.data.stats[1].base_stat)
    } else if  (speciesBonus === "atk") {
        pokemonAtk = Math.floor(response.data.stats[1].base_stat * 1.1)        
    } else if (speciesPen === "atk") {
        pokemonAtk = Math.floor(response.data.stats[1].base_stat * 0.9)
    } else {
        pokemonAtk = Math.floor(response.data.stats[1].base_stat)
    }
    console.log(`It has ${pokemonAtk} ATK!`)
}

const generateDEF = async (species, nature) => {
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${species.toLowerCase()}/`
    )
    const speciesBonus = naturesObject[nature].bonus
    const speciesPen = naturesObject[nature].pen

    if (speciesBonus ==="def" && speciesPen === "def") {
        pokemonDef = Math.floor(response.data.stats[2].base_stat)
    } else if  (speciesBonus === "def") {
        pokemonDef = Math.floor(response.data.stats[2].base_stat * 1.1)        
    } else if (speciesPen === "def") {
        pokemonDef = Math.floor(response.data.stats[2].base_stat * 0.9)
    } else {
        pokemonDef = Math.floor(response.data.stats[2].base_stat)
    }
    console.log(`It has ${pokemonDef} DEF!`)
}

const generateSPATK = async (species, nature) => {
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${species.toLowerCase()}/`
    )
    const speciesBonus = naturesObject[nature].bonus
    const speciesPen = naturesObject[nature].pen

    if (speciesBonus ==="spatk" && speciesPen === "spatk") {
        pokemonSpatk = Math.floor(response.data.stats[3].base_stat)
    } else if  (speciesBonus === "spatk") {
        pokemonSpatk = Math.floor(response.data.stats[3].base_stat * 1.1)        
    } else if (speciesPen === "spatk") {
        pokemonSpatk = Math.floor(response.data.stats[3].base_stat * 0.9)
    } else {
        pokemonSpatk = Math.floor(response.data.stats[3].base_stat)
    }
    console.log(`It has ${pokemonSpatk} SP. ATK!`)
}

const generateSPDEF = async (species, nature) => {
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${species.toLowerCase()}/`
    )
    const speciesBonus = naturesObject[nature].bonus
    const speciesPen = naturesObject[nature].pen

    if (speciesBonus ==="spdef" && speciesPen === "spdef") {
        pokemonSpdef = Math.floor(response.data.stats[4].base_stat)
    } else if  (speciesBonus === "spdef") {
        pokemonSpdef = Math.floor(response.data.stats[4].base_stat * 1.1)        
    } else if (speciesPen === "spdef") {
        pokemonSpdef = Math.floor(response.data.stats[4].base_stat * 0.9)
    } else {
        pokemonSpdef = Math.floor(response.data.stats[4].base_stat)
    }
    console.log(`It has ${pokemonSpdef} SP. DEF!`)
}

const generateSPD = async (species, nature) => {
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${species.toLowerCase()}/`
    )
    const speciesBonus = naturesObject[nature].bonus
    const speciesPen = naturesObject[nature].pen

    if (speciesBonus ==="spd" && speciesPen === "spd") {
        pokemonSpd = Math.floor(response.data.stats[5].base_stat)
    } else if  (speciesBonus === "spd") {
        pokemonSpd = Math.floor(response.data.stats[5].base_stat * 1.1)        
    } else if (speciesPen === "spd") {
        pokemonSpd = Math.floor(response.data.stats[5].base_stat * 0.9)
    } else {
        pokemonSpd = Math.floor(response.data.stats[5].base_stat)
    }
    console.log(`It has ${pokemonSpd} SPD!`)
}

const determineNature = () => {
    const randomNature = naturesArray[Math.floor(Math.random() * naturesArray.length)];
    return randomNature
  };

const naturesArray = [
    "Adamant", "Bashful", "Bold", "Brave", "Calm",
    "Careful", "Docile", "Gentle", "Hardy", "Hasty",
    "Impish", "Jolly", "Lax", "Lonely", "Mild", "Modest",
    "Naive", "Naughty", "Quiet", "Quirky", "Rash",
    "Relaxed", "Sassy", "Serious", "Timid"
]

const naturesObject = {
    Adamant: { bonus: "atk", pen: "spatk" },
    Bashful: { bonus: "spatk", pen: "spatk" },
    Bold: { bonus: "def", pen: "atk" },
    Brave: { bonus: "atk", pen: "spd" },
    Calm: { bonus: "spdef", pen: "atk" },
    Careful: { bonus: "spdef", pen: "spatk" },
    Docile: { bonus: "def", pen: "def" },
    Gentle: { bonus: "spdef", pen: "def" },
    Hardy: { bonus: "atk", pen: "atk" },
    Hasty: { bonus: "spd", pen: "def" },
    Impish: { bonus: "def", pen: "spatk" },
    Jolly: { bonus: "spd", pen: "spatk" },
    Lax: { bonus: "def", pen: "spdef" },
    Lonely: { bonus: "atk", pen: "def" },
    Mild: { bonus: "spatk", pen: "def" },
    Modest: { bonus: "spatk", pen: "atk" },
    Naive: { bonus: "spd", pen: "spdef" },
    Naughty: { bonus: "atk", pen: "spdef" },
    Quiet: { bonus: "spatk", pen: "spd" },
    Quirky: { bonus: "spdef", pen: "spdef" },
    Rash: { bonus: "spatk", pen: "spdef" },
    Relaxed: { bonus: "def", pen: "spd" },
    Sassy: { bonus: "spdef", pen: "spd" },
    Serious: { bonus: "spd", pen: "spd" },
    Timid: { bonus: "spd", pen: "atk" },
}

const typeAdvantage = {
    normal: {
        super: [],
        half: ["rock", "ghost", "steel"]
    },
    fire: {
        super: ["grass", "ice", "bug", "steel"],
        half: ["fire", "water", "rock", "dragon"]
    },
    water: {
        super: ["fire", "ground", "rock"],
        half: ["water", "grass", "dragon"]
    },
    electric: {
        super: ["water", "flying"],
        half: ["electric", "grass", "ground", "dragon"]
    },
    grass: {
        super: ["water", "ground", "rock"],
        half: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"]
    },
    ice: {
        super: ["grass", "ground", "flying", "dragon"],
        half: ["fire", "water", "ice", "steel"]
    },
    fighting: {
        super: ["normal", "ice", "rock", "dark", "steel"],
        half: ["poison", "flying", "psychic", "bug", "fairy"]
    },
    poison: {
        super: ["grass", "fairy"],
        half: ["poison", "ground", "rock", "ghost", "steel"]
    },
    ground: {
        super: ["fire", "electric", "poison", "rock", "steel"],
        half: ["grass", "flying", "bug"]
    },
    flying: {
        super: ["grass", "fighting", "bug"],
        half: ["electric", "rock", "steel"]
    },
    psychic: {
        super: ["fighting", "poison"],
        half: ["psychic", "dark", "steel"]
    },
    bug: {
        super: ["grass", "psychic", "dark"],
        half: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"]
    },
    rock: {
        super: ["fire", "ice", "flying", "bug"],
        half: ["fighting", "ground", "steel"]
    },
    ghost: {
        super: ["psychic", "ghost"],
        half: ["normal", "dark"]
    },
    dragon: {
        super: ["dragon"],
        half: ["steel", "fairy"]
    },
    dark: {
        super: ["psychic", "ghost"],
        half: ["fighting", "dark", "fairy"]
    },
    steel: {
        super: ["ice", "rock", "fairy"],
        half: ["fire", "water", "electric", "steel"]
    },
    fairy: {
        super: ["fighting", "dragon", "dark"],
        half: ["fire", "poison", "steel"]
    }
}

restartButtonElement.addEventListener(`click`, () => {
    startGame()
})

startGame()