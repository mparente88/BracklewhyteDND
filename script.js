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

// Start screen

let pokemonStName = "Unknown Starter"
let pokemonStSpecies = "Unknown Starter"
let pokemonStHp = 0
let pokemonStAtk = 0
let pokemonStDef = 0
let pokemonStSpatk = 0
let pokemonStSpdef = 0
let pokemonStSpd = 0
let pokemonStNature = "nondescript"

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
    pokemonStName = "Unknown Starter"
    pokemonStSpecies = "Unknown Starter"
    pokemonStNature = "nondescript"
    pokemonStHp = 0
    pokemonStAtk = 0
    pokemonStDef = 0
    pokemonStSpatk = 0
    pokemonStSpdef = 0
    pokemonStSpd = 0
    nameInputElement.value = ""
}

const enterStart = () => {
    optnsContainerElement.classList.remove(`inactive`)
    starterSelectContainerElement.classList.remove(`inactive`)
    mainScreenElement.classList.remove(`inactive`)
    mainScreenElement.style.display = `flex`
    textBoxElement.innerText = `Choose your Starter!`

    //Leave this at the end so the menu goes away once everything is loaded
    titleScreenElement.classList.add(`inactive`)
}

// Display title screen (AI generated image?)


// If they click or press Enter, start the game

titleScreenElement.addEventListener(`click`, () => {
    enterStart()
})

document.addEventListener(`keydown`, (e) => {
    if (e.key === `Enter` && !titleScreenElement.classList.contains('inactive')) {
    enterStart()
    }
}
)

fightButtonElement.addEventListener(`click`, async () => {
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonStSpecies.toLowerCase()}/`
    )
    let response2 = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/dratini/`
    )
    opponentHP = response2.data.stats[0].base_stat
    opponentSprite = response2.data.sprites.other.showdown.front_default
    playerSprite = response.data.sprites.other.showdown.back_default
    fightWindowElement.classList.remove(`inactive`)
    fightButtonContainerElement.classList.add(`inactive`)
    textBoxElement.innerText = "You encounter your rival, Jeremy, and his Dratini!"
    playerSpriteElement.setAttribute(`src`, playerSprite)
    opponentSpriteElement.setAttribute(`src`, opponentSprite)
    playerHPElement.innerText = `${pokemonStSpecies.toUpperCase()}: ${pokemonStHp} / ${pokemonStHp}`
    opponentHPElement.innerText = `DRATINI: ${opponentHP} / ${opponentHP}`
})

// Restart Button brings them back to the start menu and restarts the game

restartButtonElement.addEventListener(`click`, () => {
    startGame()
})

//Congrats on Starter Select messages
growlitheSelectElement.addEventListener(`click`, () => {
    generateStarter("growlithe")
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.remove(`inactive`)
    textBoxElement.innerText = `You have selected Growlithe!`
    nameYourStarterElement.classList.remove(`inactive`)
})

electrikeSelectElement.addEventListener(`click`, () => {
    generateStarter("electrike")
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.remove(`inactive`)
    nameYourStarterElement.classList.remove(`inactive`)
    textBoxElement.innerText = `You have selected Electrike!`
})

rockruffSelectElement.addEventListener(`click`, () => {
    generateStarter("rockruff")
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.remove(`inactive`)
    nameYourStarterElement.classList.remove(`inactive`)
    textBoxElement.innerText = `You have selected Rockruff!`
})

//Press OK to remove the congrats message and name Starter
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
        pokemonStName = nameInputElement.value.toUpperCase()
    } else {
        pokemonStName = pokemonStSpecies.toUpperCase()
        }
    textBoxElement.innerText = `With ${pokemonStName} the ${starterNature.toLowerCase()} ${pokemonStSpecies}, at your side, you venture out into the wilds (despite being 10 years old)!`
}
// Choose and name your starting Pokemon, pull from API, adjust stats by nature (10% increase/decrease)
// ATK = ATK * 1.10
// DEF = DEF * .90

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

const generateStarter = async (starter) => {
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${starter.toLowerCase()}/`
    )
    pokemonStSpecies = starter
    console.log(pokemonStSpecies)
    starterNature = determineNature()
    const starterBonus = naturesObject[starterNature].bonus
    const starterPen = naturesObject[starterNature].pen

    pokemonStName = response.data.name
    pokemonStSpecies = response.data.name
    pokemonStHp = Math.floor(response.data.stats[0].base_stat)
    //Nature Check and Stat Formation
    if (starterBonus ==="atk" && starterPen === "atk") {
        pokemonStAtk = Math.floor(response.data.stats[1].base_stat)
    } else if  (starterBonus === "atk") {
        pokemonStAtk = Math.floor(response.data.stats[1].base_stat * 1.1)        
    } else if (starterPen === "atk") {
        pokemonStAtk = Math.floor(response.data.stats[1].base_stat * 0.9)
    } else {
        pokemonStAtk = Math.floor(response.data.stats[1].base_stat)
    }

    if (starterBonus ==="def" && starterPen === "def") {
        pokemonStDef = Math.floor(response.data.stats[2].base_stat)
    } else if  (starterBonus === "def") {
        pokemonStDef = Math.floor(response.data.stats[2].base_stat * 1.1)        
    } else if (starterPen === "def") {
        pokemonStDef = Math.floor(response.data.stats[2].base_stat * 0.9)
    } else {
        pokemonStDef = Math.floor(response.data.stats[2].base_stat)
    }

    if (starterBonus ==="spatk" && starterPen === "spatk") {
        pokemonStSpatk = Math.floor(response.data.stats[3].base_stat)
    } else if  (starterBonus === "spatk") {
        pokemonStSpatk = Math.floor(response.data.stats[3].base_stat * 1.1)        
    } else if (starterPen === "spatk") {
        pokemonStSpatk = Math.floor(response.data.stats[3].base_stat * 0.9)
    } else {
        pokemonStSpatk = Math.floor(response.data.stats[3].base_stat)
    }

    if (starterBonus ==="spdef" && starterPen === "spdef") {
        pokemonStSpdef = Math.floor(response.data.stats[4].base_stat)
    } else if  (starterBonus === "spdef") {
        pokemonStSpdef = Math.floor(response.data.stats[4].base_stat * 1.1)        
    } else if (starterPen === "spdef") {
        pokemonStSpdef = Math.floor(response.data.stats[4].base_stat * 0.9)
    } else {
        pokemonStSpdef = Math.floor(response.data.stats[4].base_stat)
    }

    if (starterBonus ==="spd" && starterPen === "spd") {
        pokemonStSpd = Math.floor(response.data.stats[5].base_stat)
    } else if  (starterBonus === "spd") {
        pokemonStSpd = Math.floor(response.data.stats[5].base_stat * 1.1)        
    } else if (starterPen === "spd") {
        pokemonStSpd = Math.floor(response.data.stats[5].base_stat * 0.9)
    } else {
        pokemonStSpd = Math.floor(response.data.stats[5].base_stat)
    }

    console.log(`You caught a ${starterNature.toLowerCase()} ${starter.toUpperCase()}!`)
    console.log(`It has ${pokemonStHp} HP, ${pokemonStAtk} ATK, ${pokemonStDef} DEF, ${pokemonStSpatk} SP ATK, ${pokemonStSpdef} SP DEF and ${pokemonStSpd} SPD`)
    console.log(response)
}



// Fixed loop of Wild Pokemon -> Rival -> Wild Pokemon -> Rival
// Rival Names from array list, pull from list as used

// VS Wild
    //CATCH or FIGHT
    //Catch is .random() with bonuses depending on current hp and
    //penalties based on speed

    //Over a certain value? Caught.

    //Fight is .random() with bonuses depending on a comparison of
    //Attacker's ATK vs Defender's DEF
    //Attacker's SPATK vs Defender's SPDEF
    //Attacker's SPD vs Defender's SPD

    //HP is reduced by 10 each time.
    //if enemy HP <= 0 then YOU WIN
    //if your HP <= 0 then YOU LOSE

// VS Rival
    //Same battle mechanic, but can run

    //Ending score is how many Rivals you beat before losing


//start the game when the page loads, after all the scripts are loaded in
startGame()