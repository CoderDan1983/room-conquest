import {
    player, terrainTypes, names, attackStyle, tempZones, elements,
    displayPlayer, loadPowerClassSelector, makePurchaseButton, //big functions
    getUpgradeFee, addUpgradeFees, getFullAbility, getFullPowerClass, getPlayerLevel, //helpers
    allowedAbilities, findInArray, allowedElements, elementPreReqMet, removeAllChildren,
} from '../modules/gameLibrary_front.js';


let currentOrders = { //holds orders

}

// console.log('fullAbility test!');
// console.log(fullAbility("poison immunity"));
const playerStatsToggle = document.getElementById("playerStatsToggle");
playerStatsToggle.addEventListener('click', (event)=>{
    event.preventDefault();
    
    const playerStats = document.getElementById("playerStats0");
    
    if(playerStats.className == "invisible"){
        playerStats.className = 'visible';
        playerStatsToggle.textContent = "Hide Player Stats"
    }
    else{
        playerStats.className = "invisible";
        playerStatsToggle.textContent = "See Player Stats";
    }
    
    displayPlayer(playerStats, player, elements);
});



displayPlayer("playerStats0", player, elements);

const startGameB = document.getElementById("startGameB");
startGameB.addEventListener('click', (event)=>{
    event.preventDefault();
    const board = document.getElementById("board");
    const playerStatsForm = document.getElementById("playerStatsForm");
    board.className = "board";
    playerStatsForm.className = "invisible";

    startGame();
});

function startGame(){

}

loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", "abilityPrice", "addAbility");
loadPowerClassSelector("addPowerClass", allowedElements, elements, "element", "elementPrice", "addPowerClass");



document.getElementById("pointsRemaining").textContent = player.investmentPoints; //.toString(); //??

//"addAbility"


makePurchaseButton("buyAbility", "ability", "abilities", "abilityPrice");
makePurchaseButton("buyPowerClass", "element", "branches", "elementPrice");

//other stuff below, so to speak! ^_^

function createTreasures(terrain){
    let options = [];
    switch(terrain.name){
        case "desert":
            options = [
                { reward: "sand", chance: 80 },
                { reward: "vegetables", chance: 20 },
            ]             
        break;
        case "jungle":
            options = [
                { reward: "meat", chance: 40 },
                { reward: "water", chance: 20 },
                { reward: "vegetables", chance: 40 },
            ]              
        break;
        case "wasteland":
            options = [
                { reward: "dirty water", chance: 30 },
                { reward: "dirty dirt", chance: 40 },
                { reward: "dirty food", chance: 30 },
            ]        
        break;
        case "city ruins":
            options = [
                { reward: "food", chance: 30 },
                { reward: "batteries", chance: 20 },
                { reward: "other", chance: 50 },
            ]
        break;
        case "forest":
            options = [
                { reward: "meat", chance: 30 },
                { reward: "vegetables", chance: 30 },
                { reward: "wood", chance: 40 },
            ]
        break;
        case "lightening zone":
            options = [
                { reward: "battery", chance: 100 },
            ]
        break;

        case "rock zone":
            options = [
                { reward: "rock", chance: 95 },
                { reward: "grass", chance: 5 },
            ]
        break;
        case "volcano zone":
            options = [
                { reward: "rock", chance: 60 },
                { reward: "magma", chance: 40 },
            ]
        break;

        case "ocean":
            options = [
                { reward: "saltwater", chance: 70 },
                { reward: "fish", chance: 25 },
                { reward: "rock", chance: 5 },
            ]
        break;

        case "lake":
            options = [
                { reward: "water", chance: 65 },
                { reward: "fish", chance: 25 },
                { reward: "rock", chance: 10 },
            ]
        break;

        case "artic tundra":
            options = [
                { reward: "ice", chance: 50 },
                { reward: "rock", chance: 5 },
                { reward: "meat", chance: 10 },
                { reward: "grass", chance: 20 },
                { reward: "dirt", chance: 15 },
            ]
        break;

        case "polar cap":
            options = [
                { reward: "ice", chance: 60 },
                { reward: "saltwater", chance: 25 },
                { reward: "rock", chance: 10 },
                { reward: "meat", chance: 5 },
            ]
        break;
    }

    const roll = Math.floor(Math.random() * 100);
    let count = 0;
    for(let p=0; p < options.length; p++){
        if(count >= roll){
            return { reward: options[p].reward, amount: 10 };
        }
        else{
            count += options[p].chance;
        }
    }
    return { reward: "", amount: 0 };
}

function createTerrain(level, coords){
    const index = Math.floor(Math.random() * terrainTypes.length);
    let terrrain = {};
    terrrain.name = terrainTypes[index].name;
    terrrain.zone = terrainTypes[index].zone;
    terrrain.level = level;
    terrrain.coords = coords;

    if(terrrain.zone === undefined){
        terrrain.zone = tempZones[Math.floor(Math.random * returnCreature.length)];
    }
    
    return terrrain;
}

function createTerritory(level, coords){
    let territory = {};
    territory.terrain = createTerrain(level, coords);
    territory.enemy = returnCreature(territory.terrain);
    territory.treasures = createTreasures(territory.terrain, territory.enemy);
    territory.coords = coords;
    
    return territory;
}

function returnCreature(terrain){
    let roll = Math.floor(Math.random() * 100);
    let level = terrain.level;
    if(roll > 80){
        level += (level * Math.floor(Math.random()));
    }

    let newCreatureRoll = Math.floor(Math.random() * 100);
    if(newCreatureRoll >= enemyList.length){
        let enemy = {
            level: level,
            canFly: trueOrFalse(50),
            armor: withinRange(0, 5),
            damage: withinRange(5, 10),
            speed: withinRange(5, 10),
            perception: withinRange(1, 5),
            name: `${giveName()}atron`,
            elementType: randomFromArray(elements).name,
            attackStyle: randomFromArray(attackStyle),
        };

        enemyList.push(enemy); //record enemy ^_^
        return enemy;
    }
    else{
        return enemyList[newCreatureRoll];
    }
}

function trueOrFalse(propabilityTrue){
    let roll = Math.floor(Math.random() * 100);
    if(roll >= propabilityTrue){
        return true;
    }
    return false;
}

function withinRange(min, max){
    return Math.floor((Math.random()) * (max - min));
}

function randomFromArray(array){
    let roll = Math.floor(Math.random() * array.length);
    return array[roll];
}


let territories = [];
let enemyList = [];
function createTerritories(rows, columns){
    const lands = rows * columns;

    let row = 0; 
    let column = 0;
    const board = document.getElementById("board");
    for(let a=0; a < lands; a++){
        let terry = createTerritory(a, { row: row, column: column });
        if(board){
            terry.el = document.createElement("div");
            terry.el.className = "territory";
            terry.el.textContent = `div #${a}`;
            terry.el.addEventListener('click', (event)=>{
                alert(`${row}, ${column}`);
                console.log(territories[a]);
            });
            board.appendChild(terry.el);
        }

        territories.push(terry);
        column++;
        // alert(column + ", " + columns + ", " + row);
        if(column >= columns){
            column = 0;
            row++;
        }
    }
}
createTerritories(10, 10);
console.log(elements);

function giveName(){
    const roll = Math.floor(Math.random()* names.length);
    const name = names[roll];
    names.splice(roll, 1); //removes name!
    return name;
}

