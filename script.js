//Gather HTML elements
const titleScreenElement = document.querySelector(`#titleScreen`)
const optnsContainerElement = document.querySelector(`#optnsContainer`)
const restartButtonElement = document.querySelector(`#restartButton`)
const starterSelectContainerElement = document.querySelector(`#starterSelectContainer`)
const yamperSelectElement = document.querySelector(`#yamperSelect`)
const lillipupSelectElement = document.querySelector(`#lillipupSelect`)
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
const fightOptnsContainerElement = document.querySelector(`#fightOptnsContainer`)
const attackBtnElement = document.querySelector(`#attackBtn`)
const fleeBtnElement = document.querySelector(`#fleeBtn`)
const volumeSliderElement = document.querySelector(`#volumeSlider`)
const rockruffHighlightElement = document.querySelector(`#rockruffHighlight`)
const lillipupHighlightElement = document.querySelector(`#lillipupHighlight`)
const yamperHighlightElement = document.querySelector(`#yamperHighlight`)
let fighting = false

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
let pokemonAudio = ""
let pokemonHp = 1
let pokemonAtk = 1
let pokemonDef = 1
let pokemonSpatk = 1
let pokemonSpdef = 1
let pokemonSpd = 1
let pokemonNature = "nondescript"
let pokemonFrontGif = "404 Pokemon Not Found"
let pokemonBackGif = "404 Pokemon Not Found"
let playerOwned = false
let rivalOwned = false
let wildOwned = false

//Empty variables for current fighting player-side Pokemon
let playerName = "Unknown Starter"
let playerType1 = "normal"
let playerType2 = "none"
let playerAudio = ""
let playerHp = 1
let playerCurrentHp = 1
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
let opponentAudio = ""
let opponentHp = 1
let opponentCurrentHp = 1
let opponentAtk = 1
let opponentDef = 1
let opponentSpatk = 1
let opponentSpdef = 1
let opponentSpd = 1
let opponentFrontGif = "404 Pokemon Not Found"

//Store Pokemon types for comparison during battle

let playerTypes = []
let opponentTypes = []

// Reseting values/menus when page opens or reset button is pressed

const startGame = () => {
    titleScreenElement.classList.remove(`inactive`)
    optnsContainerElement.classList.add(`inactive`)
    mainScreenElement.classList.add(`inactive`)
    mainScreenElement.style.display = `none`
    textBoxElement.innerText = ``
    nameYourStarterElement.classList.add(`inactive`)
    nameInputElement.classList.add(`inactive`)
    fightButtonContainerElement.classList.add(`inactive`)
    fightWindowElement.classList.add(`inactive`)
    fightButtonContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.add(`inactive`)
    fightOptnsContainerElement.classList.add(`inactive`)
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
    playerOwned = false
    rivalOwned = false
    wildOwned = false
    playerName = ""
    playerType1 = ""
    playerType2 = ""
    playerHp = 0
    playerAtk = 0
    playerDef = 0
    playerSpatk = 0
    playerSpdef = 0
    playerSpd = 0
    playerBackGif = ""
    opponentName = ""
    opponentType1 = ""
    opponentType2 = ""
    opponentHp = 0
    opponentAtk = 0
    opponentDef = 0
    opponentSpatk = 0
    opponentSpdef = 0
    opponentSpd = 0
    opponentFrontGif = ""
    fighting = false
}

//When the title screen is clicked, a random rival's pokemon is made

const generateRival = async () => {
    console.log(`Generating Rival...`)
    let rivalRandom = (Math.random() * 3)
    
    let rivalDetermination = "shinx"
    if (rivalRandom >= 0 && rivalRandom < 1) {
        rivalDetermination = "shinx"
    } else if (rivalRandom >= 1 && rivalRandom < 2) {
        rivalDetermination = "espurr"
    } else {
        rivalDetermination = "skitty"
    }

    generatePokemon(rivalDetermination, "rival")
}

//Click or press enter on title screen to continue

titleScreenElement.addEventListener(`click`, () => {
    enterStart()
})

document.addEventListener(`keydown`, (e) => {
    if (e.key === `Enter` && !titleScreenElement.classList.contains('inactive')) {
    enterStart()
    }
}
)

//Open up options for starter selection after title screen

const enterStart = () => {
    let audioUrl = "/Sound Effects/click-buttons-ui-menu-sounds-effects-button-6-203600.mp3"
    let audio = new Audio(audioUrl)
    
    audio.volume = parseFloat(volumeSliderElement.value)
    audio.play()

    optnsContainerElement.classList.remove(`inactive`)
    starterSelectContainerElement.classList.remove(`inactive`)
    mainScreenElement.classList.remove(`inactive`)
    mainScreenElement.style.display = `flex`
    textBoxElement.innerText = `Today you leave Assemblytown to embark on your very own Pokémon journey.
    Professor Maple is even giving you your first Pokémon! Which one will you choose?`

    //Leave this at the end so the menu goes away once everything is loaded
    titleScreenElement.classList.add(`inactive`)
    generateRival()
}

// Input player/opponent to start fight between them.
//Enter "random" for opponent to generate new.

const initiateFight = (player, opponent) => {

    fighting = true

    getPlayer(player)
    getOpponent(opponent)

    playerName = playerPokemon[0].name
    playerType1 = playerPokemon[0].type1
    playerType2 = playerPokemon[0].type2
    playerHp = playerPokemon[0].hp
    playerCurrentHp = playerPokemon[0].hp
    playerAtk = playerPokemon[0].atk
    playerDef = playerPokemon[0].def
    playerSpatk = playerPokemon[0].spatk
    playerSpdef = playerPokemon[0].spdef
    playerSpd = playerPokemon[0].spd
    playerBackGif = playerPokemon[0].backGif

    opponentName = opponentPokemon[0].name
    opponentType1 = opponentPokemon[0].type1
    opponentType2 = opponentPokemon[0].type2
    opponentHp = opponentPokemon[0].hp
    opponentCurrentHp = opponentPokemon[0].hp
    opponentAtk = opponentPokemon[0].atk
    opponentDef = opponentPokemon[0].def
    opponentSpatk = opponentPokemon[0].spatk
    opponentSpdef = opponentPokemon[0].spdef
    opponentSpd = opponentPokemon[0].spd
    opponentFrontGif = opponentPokemon[0].frontGif

    fightWindowElement.classList.remove(`inactive`)
    fightOptnsContainerElement.classList.remove(`inactive`)
    fightButtonContainerElement.classList.add(`inactive`)
    playerSpriteElement.setAttribute(`src`, playerBackGif)
    opponentSpriteElement.setAttribute(`src`, opponentFrontGif)
    playerHPElement.innerText = `${playerName.toUpperCase()}: ${playerHp} / ${playerHp}`
    opponentHPElement.innerText = `${opponentName.toUpperCase()}: ${opponentHp} / ${opponentHp}`
    console.log(playerName)
    console.log(opponentName)
}

//Button for combat logic

attackBtnElement.addEventListener(`click`, () => {
    runAttackRound()
    console.log(`Trying to fight...`)
})

//Run combat logic

const runAttackRound = () => {
    let playerModifier =  Math.floor(Math.random() * 10)
    let opponentModifier = Math.floor(Math.random() * 10)

    //Compare playerAtk to opponentDef

    if (playerAtk > opponentDef) {
        playerModifier = playerModifier + 1
    } else if (playerAtk < opponentDef) {
        opponentModifier = opponentModifier + 1
    }

    //Compare playerDef to opponentAtk

    if (playerDef > opponentAtk) {
        playerModifier = playerModifier + 1
    } else if (playerDef < opponentAtk) {
        opponentModifier = opponentModifier + 1
    }

    //Compare playerSpatk to opponentSpdef

    if (playerSpatk > opponentSpdef) {
        playerModifier = playerModifier + 1
    } else if (playerSpatk < opponentSpdef) {
        opponentModifier = opponentModifier + 1
    }

    //Compare playerSpdef to opponentSpatk

    if (playerSpdef > opponentSpatk) {
        playerModifier = playerModifier + 1
    } else if (playerSpdef < opponentSpatk) {
        opponentModifier = opponentModifier + 1
    }

    //Compare playerSpd to opponentSpd

    if (playerSpd > opponentSpd) {
        playerModifier = playerModifier + 1
    } else if (playerSpd < opponentSpd) {
        opponentModifier = opponentModifier + 1
    }

    //Compare types

    playerTypes = []
    opponentTypes = []
    playerTypes.push(playerType1)
    playerTypes.push(playerType2)
    opponentTypes.push(opponentType1)
    opponentTypes.push(opponentType2)

    let playerDamageMultiplier = compareTypes(playerTypes, opponentTypes)
    let opponentDamageMultiplier = compareTypes(opponentTypes, playerTypes)

    //Deal damage

    console.log(`Player's damage is multiplied by ${playerDamageMultiplier} with a modifier of ${playerModifier}!`)
    console.log(`Opponent's damage is multiplied by ${opponentDamageMultiplier} with a modifier of ${opponentModifier}!`)

    if (playerModifier > (opponentModifier - 3)) {

        opponentCurrentHp = opponentCurrentHp - (10*playerDamageMultiplier)
    }

    if (opponentModifier > (playerModifier - 3)) {
        playerCurrentHp = playerCurrentHp - (10*opponentDamageMultiplier)
    }

    if (opponentCurrentHp < 0) {
        opponentCurrentHp = 0
    }

    if (playerCurrentHp < 0) {
        playerCurrentHp = 0
    }

    if (opponentCurrentHp === 0) {
        opponentCurrentHp = 0
        endFight("player")
    } else if (playerCurrentHp === 0) {
        endFight("rival")
    }

    playerHPElement.innerText = `${playerName.toUpperCase()}: ${playerCurrentHp} / ${playerHp}`
    opponentHPElement.innerText = `${opponentName.toUpperCase()}: ${opponentCurrentHp} / ${opponentHp}`
    
}

//x2 multiplier for type advantage, 0.5 multiplier for disadvantage

const compareTypes = (attackingTypes, defendingTypes) => {
    let multiplier = 1

    attackingTypes.forEach(attacker => {
        defendingTypes.forEach(defender => {
            if (typeAdvantage[attacker].super.includes(defender)) {
                multiplier *= 2
            } else if (typeAdvantage[attacker].half.includes(defender)) {
                multiplier *= 0.5
            }
        })
    })
    return multiplier
}

//Take pokemon from storage and put into player-specific storage
const getPlayer = (name) => {
    const pokemon = pokemonStorage.find(pokemon => pokemon.name === name);
    playerPokemon = []
    playerPokemon.push(pokemon)
    console.log(playerPokemon)
}

//Take pokemon from storage and put into opponent-specific storage
const getOpponent = (name) => {
    const pokemon = pokemonStorage.find(pokemon => pokemon.name === name);
    opponentPokemon = []
    opponentPokemon.push(pokemon)
    console.log(opponentPokemon)
}

endFight = (winner) => {
    console.log(`The winner is ${winner}!`)
    fightOptnsContainerElement.classList.add(`inactive`)
    if (winner === "player") {
        textBoxElement.innerText = `You win!`

        if (Math.random() >= 0.4) {
            playerPokemon[0].hp = playerPokemon[0].hp + 5
            console.log(`HP Level up!`)
            setTimeout(() => {
                textBoxElement.innerText = `${playerPokemon[0].name}'s HP has increased by 5!`
            }, 2000)
        }

        if (Math.random() >= 0.4) {
            playerPokemon[0].atk = playerPokemon[0].atk + 3
            console.log(`ATK Level up!`)
            setTimeout(() => {
                textBoxElement.innerText = `${playerPokemon[0].name}'s ATK has increased by 3!`
            }, 4000)
        }

        if (Math.random() >= 0.4) {
            playerPokemon[0].def = playerPokemon[0].def + 3
            console.log(`DEF Level up!`)
            setTimeout(() => {
                textBoxElement.innerText = `${playerPokemon[0].name}'s DEF has increased by 3!`
            }, 6000)
        }

        if (Math.random() >= 0.4) {
            playerPokemon[0].spatk = playerPokemon[0].spatk + 3
            console.log(`SP. ATK Level up!`)
            setTimeout(() => {
                textBoxElement.innerText = `${playerPokemon[0].name}'s SP. ATK has increased by 3!`
            }, 8000)
        }

        if (Math.random() >= 0.4) {
            playerPokemon[0].spdef = playerPokemon[0].spdef + 3
            console.log(`SP. DEF Level up!`)
            setTimeout(() => {
                textBoxElement.innerText = `${playerPokemon[0].name}'s SP. DEF has increased by 3!`
            }, 10000)
        }

        if (Math.random() >= 0.4) {
            playerPokemon[0].spd = playerPokemon[0].spd + 3
            console.log(`SPD Level up!`)
            setTimeout(() => {
                textBoxElement.innerText = `${playerPokemon[0].name}'s SPD has increased by 3!`
            }, 12000)
        }

    } else if (winner === "rival") {
        textBoxElement.innerText = `Jeremy wins!`
    } else {
        textBoxElement.innerText = "You lose!"
    }
}

//Play title music when the page loads
window.onload = () => {
    
    let audioUrl = "Sound Effects/titleTheme.mp3"
    let audio = new Audio(audioUrl)

    audio.volume = parseFloat(volumeSliderElement.value)
    audio.play()

    volumeSliderElement.addEventListener('input', () => {
        audio.volume = parseFloat(volumeSliderElement.value)
    })
}


//Fight button for the first rival fight, initiating the game
fightButtonElement.addEventListener('click', async () => {
    let audio3Url = "Sound Effects/1-05. Your Rival Appears.mp3"
    let audio3 = new Audio(audio3Url)
    
    audio3.volume = parseFloat(volumeSliderElement.value)
    audio3.play()

    volumeSliderElement.addEventListener('input', () => {
        audio3.volume = parseFloat(volumeSliderElement.value)
    })
    updateVolume()
    
    const pokemon = pokemonStorage.find(pokemon => pokemon.Pownership === true)
    const opponent = pokemonStorage.find(pokemon => pokemon.Rownership === true)
    textBoxElement.innerText = `You encounter your rival, Jeremy, and his pokemon, ${opponent.name.toUpperCase()}!`
    setTimeout(() => {
        if (fighting) {
            textBoxElement.innerText = `Jeremy: "Just give up. You'll never beat me with that pathetic ${pokemon.species}!"`
        }
    }, 5500)
    initiateFight(pokemon.name, opponent.name)
})


//Select Yamper for your starter
yamperSelectElement.addEventListener(`mouseover`, () => {
    yamperHighlightElement.classList.remove(`inactive`)
})

yamperSelectElement.addEventListener(`mouseout`, () => {
    yamperHighlightElement.classList.add(`inactive`)
})

yamperSelectElement.addEventListener(`click`, () => {
    let audioUrl = "Sound Effects/click-buttons-ui-menu-sounds-effects-button-7-203601.mp3"
    let audio = new Audio(audioUrl)
    
    audio.volume = parseFloat(volumeSliderElement.value)
    console.log
    audio.play()
    generatePokemon("yamper", "player")
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.remove(`inactive`)
    textBoxElement.innerText = `You have selected Yamper!`
    nameYourStarterElement.classList.remove(`inactive`)
})

//Select Lillipup for your starter
lillipupSelectElement.addEventListener(`mouseover`, () => {
    lillipupHighlightElement.classList.remove(`inactive`)
})

lillipupSelectElement.addEventListener(`mouseout`, () => {
    lillipupHighlightElement.classList.add(`inactive`)
})

lillipupSelectElement.addEventListener(`click`, () => {
    let audioUrl = "Sound Effects/click-buttons-ui-menu-sounds-effects-button-7-203601.mp3"
    let audio = new Audio(audioUrl)
    
    audio.volume = parseFloat(volumeSliderElement.value)
    console.log
    audio.play()
    generatePokemon("lillipup", "player")
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.remove(`inactive`)
    nameYourStarterElement.classList.remove(`inactive`)
    textBoxElement.innerText = `You have selected Lillipup!`
})

//Select Rockruff for your starter
rockruffSelectElement.addEventListener(`mouseover`, () => {
    rockruffHighlightElement.classList.remove(`inactive`)
})

rockruffSelectElement.addEventListener(`mouseout`, () => {
    rockruffHighlightElement.classList.add(`inactive`)
})

rockruffSelectElement.addEventListener(`click`, () => {
    let audioUrl = "Sound Effects/click-buttons-ui-menu-sounds-effects-button-7-203601.mp3"
    let audio = new Audio(audioUrl)
    
    audio.volume = parseFloat(volumeSliderElement.value)
    console.log
    audio.play()
    generatePokemon("rockruff", "player")
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.remove(`inactive`)
    nameYourStarterElement.classList.remove(`inactive`)
    textBoxElement.innerText = `You have selected Rockruff!`
})


//Pull a Pokemon's stats from the API and put into storage
const generatePokemon = async (species, ownership) => {
    pokemonNature = determineNature()
    
    let search = species

    if (species === "random") {
        search = Math.random() * 1000
    }

    response = await axios.get (
        `https://pokeapi.co/api/v2/pokemon/${search}/`
    )
    console.log(response)
    if (ownership === "player") {
        playerOwned = true
        rivalOwned = false
        wildOwned = false
    } else if (ownership === "rival") {
        playerOwned = false
        rivalOwned = true
        wildOwned = false
    } else {
        playerOwned = false
        rivalOwned = false
        wildOwned = true
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
    pokemonAudio = response.data.cries.latest
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

//Push a pokemon into storage
const sendToStorage = () => {

    const pokemon = {
        name: pokemonName,
        species: pokemonSpecies,
        audio: pokemonAudio,
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
        backGif: pokemonBackGif,
        Pownership: playerOwned,
        Rownership: rivalOwned,
        Wownership: wildOwned,
    };

    pokemonStorage.push(pokemon)
        
    console.log(`${pokemonName} has been stored!`)
}

//Confirm name for Starter
okCongratsElement.addEventListener(`click`, () => {
    let audioUrl = "Sound Effects/click-buttons-ui-menu-sounds-effects-button-7-203601.mp3"
    let audio = new Audio(audioUrl)
    
    audio.volume = parseFloat(volumeSliderElement.value)
    console.log
    audio.play()
    nameMyStarter()
})

nameInputElement.addEventListener(`keypress`, (e) => {
    let audioUrl = "Sound Effects/click-buttons-ui-menu-sounds-effects-button-7-203601.mp3"
    let audio = new Audio(audioUrl)
    
    audio.volume = parseFloat(volumeSliderElement.value)
    console.log
    audio.play()
    if (e.key === `Enter`) {
        nameMyStarter()
}}
)

//Click player pokemon to hear their sound (ANNOYING)
playerSpriteElement.addEventListener(`click`, () => {
    let audioUrl = playerPokemon[0].audio
    let audio = new Audio(audioUrl)
    
    audio.volume = parseFloat(volumeSliderElement.value)
    console.log
    audio.play()
})

//Same for opponent pokemon
opponentSpriteElement.addEventListener(`click`, () => {
    let audioUrl = opponentPokemon[0].audio
    let audio = new Audio(audioUrl)

    audio.volume = parseFloat(volumeSliderElement.value)
    console.log
    audio.play()
})
//Set Starter's name and progress story
const nameMyStarter = () => {
    starterSelectContainerElement.classList.add(`inactive`)
    selectionCongratsElement.classList.add(`inactive`)
    nameYourStarterElement.classList.add(`inactive`)
    fightButtonContainerElement.classList.remove(`inactive`)
    if (nameInputElement.value !== "") {
        playerName = nameInputElement.value.toUpperCase()
    } else {
        playerName = pokemonSpecies.toUpperCase()
        }
    const pokemon = pokemonStorage.find(pokemon => pokemon.Pownership === true);
    pokemon.name = playerName

    textBoxElement.innerText = `With ${playerName} the ${pokemonNature.toLowerCase()} ${pokemonSpecies}, at your side, you venture out into the wilds (despite being 10 years old)!`
}
//Generate stats according to nature
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
//Randomly determine nature from Array
const determineNature = () => {
    const randomNature = naturesArray[Math.floor(Math.random() * naturesArray.length)];
    return randomNature
  };
//Nature Array
const naturesArray = [
    "Adamant", "Bashful", "Bold", "Brave", "Calm",
    "Careful", "Docile", "Gentle", "Hardy", "Hasty",
    "Impish", "Jolly", "Lax", "Lonely", "Mild", "Modest",
    "Naive", "Naughty", "Quiet", "Quirky", "Rash",
    "Relaxed", "Sassy", "Serious", "Timid"
]
//Object to consult for nature bonuses and penalties
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
//type chart for damage modifiers
const typeAdvantage = {
    "none": {
        super: [],
        half: []
    },
    "normal": {
        super: [],
        half: ["rock", "ghost", "steel"]
    },
    "fire": {
        super: ["grass", "ice", "bug", "steel"],
        half: ["fire", "water", "rock", "dragon"]
    },
    "water": {
        super: ["fire", "ground", "rock"],
        half: ["water", "grass", "dragon"]
    },
    "electric": {
        super: ["water", "flying"],
        half: ["electric", "grass", "ground", "dragon"]
    },
    "grass": {
        super: ["water", "ground", "rock"],
        half: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"]
    },
    "ice": {
        super: ["grass", "ground", "flying", "dragon"],
        half: ["fire", "water", "ice", "steel"]
    },
    "fighting": {
        super: ["normal", "ice", "rock", "dark", "steel"],
        half: ["poison", "flying", "psychic", "bug", "fairy"]
    },
    "poison": {
        super: ["grass", "fairy"],
        half: ["poison", "ground", "rock", "ghost", "steel"]
    },
    "ground": {
        super: ["fire", "electric", "poison", "rock", "steel"],
        half: ["grass", "flying", "bug"]
    },
    "flying": {
        super: ["grass", "fighting", "bug"],
        half: ["electric", "rock", "steel"]
    },
    "psychic": {
        super: ["fighting", "poison"],
        half: ["psychic", "dark", "steel"]
    },
    "bug": {
        super: ["grass", "psychic", "dark"],
        half: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"]
    },
    "rock": {
        super: ["fire", "ice", "flying", "bug"],
        half: ["fighting", "ground", "steel"]
    },
    "ghost": {
        super: ["psychic", "ghost"],
        half: ["normal", "dark"]
    },
    "dragon": {
        super: ["dragon"],
        half: ["steel", "fairy"]
    },
    "dark": {
        super: ["psychic", "ghost"],
        half: ["fighting", "dark", "fairy"]
    },
    "steel": {
        super: ["ice", "rock", "fairy"],
        half: ["fire", "water", "electric", "steel"]
    },
    "fairy": {
        super: ["fighting", "dragon", "dark"],
        half: ["fire", "poison", "steel"]
    }
}


const updateVolume = () => {
    const audios = document.querySelectorAll('audio')
    const volumeValue = parseFloat(volumeSliderElement.value)
    
    audios.forEach(audio => {
        audio.volume = volumeValue
    })
}

//Restart button to restart all values and screens

restartButtonElement.addEventListener(`click`, () => {
    let audioUrl = "Sound Effects/click-buttons-ui-menu-sounds-effects-button-7-203601.mp3"
    let audio = new Audio(audioUrl)

    
    audio.volume = parseFloat(volumeSliderElement.value)
    console.log
    audio.play()
    startGame()
})

startGame()