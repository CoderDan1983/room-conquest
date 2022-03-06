import {
    player, currentOrders, terrainTypes, names, attackStyle, tempZones, elements,
    displayPlayer, loadPowerClassSelector, makePurchaseButton, //big functions
    getUpgradeFee, addUpgradeFees, getFullAbility, getFullPowerClass, getPlayerLevel, //helpers
    allowedAbilities, findInArray, allowedElements, elementPreReqMet, removeAllChildren,
} from '../modules/gameLibrary_front.js';


makeToggleButton("playerStatsToggle", "playerStats0", "See Player Stats", "Hide Player Stats", 
{ funct: displayPlayer, params: ["playerStats0", "pointsRemaining", player, elements] })

displayPlayer("playerStats0", "pointsRemaining", player, elements);

const startGameB = document.getElementById("startGameB");
startGameB.addEventListener('click', (event)=>{
    event.preventDefault();
    const board = document.getElementById("board");
    const playerStatsForm = document.getElementById("playerStatsForm");
    board.className = "board";
    board.style.display = "inherited";
    playerStatsForm.className = "invisible";

    startGame();
});

function startGame(){

}

loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", "abilityPrice", "addAbility");
loadPowerClassSelector("addPowerClass", allowedElements, elements, "element", "elementPrice", "addPowerClass");
makePurchaseButton("buyAbility", "ability", "abilities", "abilityPrice");
makePurchaseButton("buyPowerClass", "element", "branches", "elementPrice");

document.getElementById("pointsRemaining").textContent = player.investmentPoints; //.toString(); //??




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
    territory.coords = coords;
    territory.terrain = createTerrain(level, coords);
    territory.enemy = returnCreature(territory.terrain);
    territory.treasures = createTreasures(territory.terrain, territory.enemy);
    
    
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

function addStyles(element, styleObj){ //* add specialized styling to an element :)
    if(typeof(element) == 'string'){
        element = document.getElementById(element);
    }

    for(let prop in styleObj){
        element.style[prop] = styleObj[prop];
    }
};

function makeToggleButton(toggleButton, toggledElement, showText, hideText, functObj) {
    //^ requires invisible and visible classes!
    if(typeof(toggleButton) == 'string'){
        toggleButton = document.getElementById(toggleButton);
    }
    if(typeof(toggledElement) == 'string'){
        toggledElement = document.getElementById(toggledElement);
    }

    toggleButton.addEventListener('click', (event)=>{
        event.preventDefault();        

        if(toggledElement.style.display == "none"){
            toggledElement.style.display = 'initial';
            toggleButton.textContent = hideText;
        }
        else{
            toggledElement.style.display = "none";
            toggleButton.textContent = showText;
        }
        
        if(typeof(functObj) !== undefined){
            functObj.funct( ...functObj.params);
        }
    });
}

function logTerritory(parentElement, object, kind, stylingObj, noLogList){    
    //^ uses findInArray, addStyles, removeAllChildren
    const { Prop, Value, KeyValue, TitleTop } = stylingObj;
    
    if(kind === "outside"){ //* useful for testing :)
        console.log('logging outside object: ');
        console.log(object);
    }
    if(typeof(parentElement) == 'string'){
        parentElement = document.getElementById(parentElement); //* this is probably the container if "inside"
    }
    if(typeof(object) == 'object'){
        let container, proppy, valley, val;
        if(kind == "outside"){
            removeAllChildren(parentElement);
        }
        
        //if(typeof(object) !== HTMLElement){
            for(let prop in object){
                //* if there is no noLogList or prop is not found in the noLogList...
                if((typeof(noLostList) == undefined)||(findInArray(noLogList, prop) == false)){
                    container = document.createElement("div");
                    if(stylingObj!== undefined){
                        container.className = KeyValue.class;
                        addStyles(container, KeyValue.extra);
                    }
                    parentElement.appendChild(container);
                    val = object[prop]; 

                    proppy = document.createElement("div");
                    if(stylingObj!== undefined){
                        proppy.className = Prop.class;
                        addStyles(proppy, Prop.extra);
                    }
                    proppy.textContent += `${prop}: `;
                    container.appendChild(proppy);

                    if(typeof(val) != 'object'){
                        valley = document.createElement("div");
                        if(stylingObj!== undefined){
                            valley.className = Value.class;
                            addStyles(valley, Value.extra);
                        }
                        valley.textContent = object[prop];
                        container.appendChild(valley);
                    }
                    else{ //* for those with an object inside, so to speak.
                        const objectContainer = document.createElement("div");
                        if(stylingObj!== undefined){
                            objectContainer.className = KeyValue.class;
                            addStyles(objectContainer, KeyValue.extra);
                            container.className = TitleTop.class; //* change parent container class! :D
                            addStyles(container, TitleTop.extra);
                        }
                        container.appendChild(objectContainer);
                        

                        logTerritory(objectContainer, object[prop], "inside", stylingObj, ['el']); //*automatically appends to parent :D //container
                    }
                }
            }
        //}
    }
}
function createTerritories(rows, columns){
    const lands = rows * columns;

    const styling = { //add particular styles here ^_^
        Prop: {
            class: "prop",
            extra: {

            }
        },
        Value: {
            class: "value",
            extra: {

            }
        },
        KeyValue: {
            class: "keyValue",
            extra: {
                backgroundColor: "#FFFFFF44",
            }
        },
        TitleTop: {
            class: "titleTopContainer",
            extra: {
                backgroundColor: "#0000FF44",
            }
        },
    }
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
                //alert(`${row}, ${column}`); //* this gives inaccurate info, so to speak.
                console.log(territories[a]);
                logTerritory("side", territories[a], "outside", styling, ['el']);
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
//console.log(elements);

function giveName(){
    const roll = Math.floor(Math.random()* names.length);
    const name = names[roll];
    names.splice(roll, 1); //removes name!
    return name;
}

