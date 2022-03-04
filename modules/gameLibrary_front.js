const terrainTypes = [
    { name: "desert", zone: "tropical", effect: [
        { name: "plants", effect: -1 },
        { name: "water", effect: -2 },
        { name: "ice", effect: -1 },
        { name: "fire", effect: 1 },
        { name: "light", effect: 1 },
    ]},
    { name: "jungle", zone: "tropical", effect: [
        { name: "fire", effect: 1 },
        { name: "ice", effect: -1 },
        { name: "water", effect: 1 },
        { name: "plant", effect: 1 },
        { name: "light", effect: -1 },
    ]},
    { name: "wasteland", effect: [
        { name: "life", effect: -1 },
        { name: "plants", effect: -1 },
        { name: "water", effect: -1 },
    ]},
    { name: "city ruins", effect: [
        { name: "life", effect: -1 },
        { name: "plants", effect: -1 },
        { name: "electricity", effect: 1 },
        { name: "hacking", effect: 1 },
    ]},
    { name: "forest", zone: "temperate", effect: [
        { name: "light", effect: -1 },
        { name: "life", effect: 1 },
        { name: "plants", effect: 1 },
    ]},
    { name: "lightening zone", effect: [
        { name: "plants", effect: -1 },
        { name: "electricity", effect: 2 },
        { name: "hacking", effect: 1 },
    ]},
    { name: "rock zone", effect: [
        { name: "earth", effect: 1 },
        { name: "metal", effect: 1 },
        { name: "life", effect: -1 },
        { name: "plants", effect: -1 },
    ]},
    { name: "volcano zone", zone: "tropical", effect: [
        { name: "earth", effect: 1 },
        { name: "metal", effect: 1 },
        { name: "fire", effect: 2 },
        { name: "ice", effect: -2 },
        { name: "water", effect: -2 },
    ]},
    { name: "ocean", effect: [
        { name: "fire", effect: -1 },
        { name: "water", effect: 2 },
        { name: "plants", effect: 1 },
        { name: "light", effect: 1 },

        { name: "light bending", effect: 1 },
        { name: "electricity", effect: 1 },
        { name: "earth", effect: -1 },
    ]},
    { name: "lake", effect: [
        { name: "fire", effect: -1 },
        { name: "water", effect: 2 },
        { name: "plants", effect: 1 },
        { name: "light", effect: 1 },

        { name: "light bending", effect: 1 },
        { name: "electricity", effect: 1 },
        { name: "earth", effect: -1 },
    ]},
    { name: "artic tundra", zone: "polar", effect: [
        { name: "ice", effect: 1 },
        { name: "fire", effect: -1 },
        { name: "plants", effect: -1 },
    ]},
    { name: "polar cap", zone: "polar", effect: [
        { name: "ice", effect: 2 },
        { name: "fire", effect: -2 },
        { name: "plants", effect: -2 },
    ]},
    { name: "space", zone: "polar", effect: [
        { name: "plants", effect: -3 },
        { name: "ice", effect: 2 },
        { name: "fire", effect: -3 },
        { name: "telekenesis", effect: 1 },
        { name: "spacial", effect: 2 },
        { name: "temporal", effect: 1 },
        { name: "metal", effect: 1 },
    ]},
];

let names = [
    "OLIVER", "JACK","HARRY","JACOB","CHARLIE","THOMAS","GEORGE","OSCAR","JAMES","WILLIAM",
    "NOAH","ALFIE","JOSHUA","MUHAMMAD","HENRY","LEO","ARCHIE","ETHAN","JOSEPH","FREDDIE",
    "SAMUEL","ALEXANDER","LOGAN","DANIEL","ISAAC","MAX","MOHAMMED","BENJAMIN","MASON","LUCAS",
    "EDWARD","HARRISON","JAKE","DYLAN","RILEY","FINLEY","THEO","SEBASTIAN","ADAM","ZACHARY",
    "ARTHUR","TOBY","JAYDEN","LUKE","HARLEY","LEWIS","TYLER","HARVEY","MATTHEW","DAVID","REUBEN",
    "MICHAEL","ELIJAH","KIAN","TOMMY","MOHAMMAD","BLAKE","LUCA","THEODORE","STANLEY","JENSON",
    "NATHAN","CHARLES","FRANKIE","JUDE","TEDDY","LOUIE","LOUIS","RYAN","HUGO","BOBBY","ELLIOTT",
    "DEXTER","OLLIE","ALEX","LIAM","KAI","GABRIEL","CONNOR","AARON","FREDERICK","CALLUM","ELLIOT",
    "ALBERT","LEON","RONNIE","RORY","JAMIE","AUSTIN","SETH","IBRAHIM","OWEN","CALEB","ELLIS",
    "SONNY","ROBERT","JOEY","FELIX","FINLAY","JACKSON","AMELIA","OLIVIA","ISLA","EMILY","POPPY",
    "AVA","ISABELLA","JESSICA","LILY","SOPHIE","GRACE","SOPHIA","MIA","EVIE","RUBY","ELLA","SCARLETT",
    "ISABELLE","CHLOE","SIENNA","FREYA","PHOEBE","CHARLOTTE","DAISY","ALICE","FLORENCE","EVA","SOFIA",
    "MILLIE","LUCY","EVELYN","ELSIE","ROSIE","IMOGEN","LOLA","MATILDA","ELIZABETH","LAYLA","HOLLY",
    "LILLY","MOLLY","ERIN","ELLIE","MAISIE","MAYA","ABIGAIL","ELIZA","GEORGIA","JASMINE","ESME",
    "WILLOW","BELLA","ANNABELLE","IVY","AMBER","EMILIA","EMMA","SUMMER","HANNAH","ELEANOR","HARRIET",
    "ROSE","AMELIE","LEXI","MEGAN","GRACIE","ZARA","LACEY","MARTHA","ANN","VIOLET","DARCEY","MARIA",
    "MARYAM","BROOKE","AISHA","KATIE","LEAH","THEA","DARCIE","HOLLIE","AMY","MOLLIE","HEIDI",
    "LOTTIE","BETHANY","FRANCESCA","FAITH","HARPER","NANCY",
];

const attackStyle = ["range", "melee"];
const tempZones = ["polar", "temperate", "tropical"];

const elements = [
    {
        name: "light", 
        upgradeFee: 2.5,
        req: "none",
        color: "#ffffcc",
        branches: [
            { name: "fire" }, 
            { name: "light bending" }
        ], 
        abilities: [
            { name: "shiny light", type: "???", upgradeFee: 1, level: 1 },
            { name: "blinding light", type: "camo", upgradeFee: 1, level: 1 }
        ]
    },
    {
        name: "light bending",
        upgradeFee: 1,
        req: "light",
        color: "#ffffe6",
        abilities: [
            { name: "invisibility", type: "camo", upgradeFee: 1, level: 1 },
            { name: "doppleganger", type: "camo", upgradeFee: 1, level: 1 },
            { name: "laser", type: "attack", upgradeFee: 1, level: 1 },
            { name: "precision cut", type: "process", req: "laser", upgradeFee: 1, level: 1 }
        ]
    },
    {
        name: "fire",
        upgradeFee: 1,
        req: ["light", "thermal", "electricity"],
        color: "#cc3300",
        abilities: [
            { name: "refine by heat", type: "process", upgradeFee: 1, level: 1 },
            { name: "fire resistance", type: "resistance", upgradeFee: 1, level: 1 },
            { name: "fireball", type: "attack", upgradeFee: 1, level: 1 },
            { name: "fire aoe", type: "aoe", req: "fireball", upgradeFee: 1, level: 1 }
        ]
    },
    {
        name: "thermal",
        upgradeFee: 2,
        req: "none",
        color: "#b300b3",
        branches: [
            { name: "fire" }, 
            { name: "ice" }
        ],
        abilities: [
            { name: "thermal sense", type: "perception", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "ice",
        upgradeFee: 1,
        req: ["thermal"],
        color: "#66b3ff",    
        abilities: [
            { name: "cold storage", type: "process", upgradeFee: 1, level: 1 },
            { name: "ice wall", type: "wall", upgradeFee: 1, level: 1 },
            { name: "cold resistance", type: "resistance", upgradeFee: 1, level: 1 },
            { name: "fog", type: "camo", req: "water", upgradeFee: 1, level: 1 },
            { name: "heat vampirism", type: "???", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "electricity",
        upgradeFee: 3,
        req: "none",
        color: "#ffdb4d",    
        branches: [
            { name: "hacking" }, 
            { name: "fire" }
        ],
        abilities: [
            { name: "electricute", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "zap", type: "attack", upgradeFee: 1, level: 1 },
            { name: "emp", type: "attack", upgradeFee: 1, level: 1 },
            { name: "emp aoe", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "electrical sense", type: "perception", upgradeFee: 1, level: 1 },
            { name: "get charged", type: "boost", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "hacking",
        upgradeFee: 1,
        req: ["electricity"],
        color: "#ffcc00",
        abilities: [
            { name: "control", type: "???", upgradeFee: 1, level: 1 },
            { name: "camera feed", type: "perception", upgradeFee: 1, level: 1 },
            { name: "machine invisibility", type: "camo", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "quantum",
        upgradeFee: 3,
        req: "none",
        color: "#9966ff",
        branches: [
            { name: "temporal" }, 
            { name: "spacial" }
        ],
        abilities: [
            { name: "quantum blast", type: "attack", upgradeFee: 1, level: 1 },
            { name: "quantum wave", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "quantum field", type: "defense", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "earth",
        upgradeFee: 2,
        req: "none",
        color: "#996633",
        branches: [
            { name: "metal" }, 
        ],
        abilities: [
            { name: "rock blast", type: "attack", upgradeFee: 1, level: 1 },
            { name: "rock storm", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "dirt shield", type: "wall", upgradeFee: 1, level: 1 },
            { name: "earthquack", type: "camo", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "metal",
        upgradeFee: 1,
        req: "earth",
        color: "#999999",
        abilities: [
            { name: "metal mine", type: "process", upgradeFee: 1, level: 1 },
            { name: "metal blast", type: "attack", upgradeFee: 1, level: 1 },
            { name: "metal storm", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "metal shield", type: "wall", upgradeFee: 1, level: 1 },
            { name: "technokenesis", type: "control", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "temporal",
        upgradeFee: 1,
        req: "quantum",
        color: "#4c00e6",
        abilities: [
            { name: "speed", type: "boost", upgradeFee: 1, level: 1 },
            { name: "time stop", type: "???", upgradeFee: 1, level: 1 },
            { name: "temporal blast", type: "attack", upgradeFee: 1, level: 1 },
            { name: "slow shield", type: "wall", upgradeFee: 1, level: 1 }, //decreases physical damage
            { name: "delay effects", type: "???", upgradeFee: 1, level: 1 }, //removes all damage, to be recieved slowly over "x turns"
        ]
    },
    {
        name: "spacial",
        upgradeFee: 1,
        req: "quantum",
        color: "#330099",
        abilities: [
            { name: "teleportation", type: "movement", upgradeFee: 1, level: 1 },
            { name: "teleporting dodge", type: "camo", upgradeFee: 1, level: 1 },
            { name: "temporal blast", type: "attack", upgradeFee: 1, level: 1 },
            { name: "extra storage", type: "???", upgradeFee: 1, level: 1 }, //decreases physical damage
            { name: "dimensional blast", type: "attack", upgradeFee: 1, level: 1 },
            { name: "dimensional shield", type: "defense", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "telekenesis",
        upgradeFee: 1,
        req: "none",
        color: "#000099",
        abilities: [
            { name: "ecolocation", type: "perception", upgradeFee: 1, level: 1 },
            { name: "tk blast", type: "attack", upgradeFee: 1, level: 1 },
            { name: "tk wave", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "tk bubble", type: "wall", upgradeFee: 1, level: 1 }, //decreases physical damage
            { name: "flight", type: "movement", upgradeFee: 1, level: 1 },
            { name: "manufacture", type: "process", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "water",
        upgradeFee: 2,
        req: "none",
        color: "#0066ff",
        branches: [
            { name: "ice" }, 
        ],
        abilities: [
            { name: "water creation", type: "???", upgradeFee: 1, level: 1 },
            { name: "water blast", type: "attack", upgradeFee: 1, level: 1 },
            { name: "water storm", req: "water blast", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "water wall", type: "defense", upgradeFee: 1, level: 1 },
            { name: "water wall", type: "defense", upgradeFee: 1, level: 1 },
            { name: "water sense", type: "perception", upgradeFee: 1, level: 1 },
            { name: "swim bonus", type: "movement", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "mental",
        upgradeFee: 1,
        req: ["telekenesis", "life"],
        color: "#cccccc",
        abilities: [
            { name: "mind control", req: "sense other minds", type: "control", upgradeFee: 1, level: 1 },
            { name: "sense other minds", type: "perception", upgradeFee: 1, level: 1 },
            { name: "read other minds", req: "sense other minds", type: "perception", upgradeFee: 1, level: 1 },
            { name: "confusion", type: "camo", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "life",
        upgradeFee: 3,
        req: "none",
        color: "#99ff66",
        branches: [
            { name: "mental" }, 
            { name: "healing" }, 
            { name: "body modification" }, 
        ],
    },
    {
        name: "body modification",
        upgradeFee: 1,
        req: "life",
        color: "#00ff00",
        abilities: [
            { name: "increased speed", type: "boost", upgradeFee: 1, level: 1 },
            { name: "increased strength", type: "boost", upgradeFee: 1, level: 1 },
            { name: "increased leap", type: "boost", upgradeFee: 1, level: 1 },
            { name: "increased durability", type: "boost", upgradeFee: 1, level: 1 },
            { name: "increased accuracy", type: "boost", upgradeFee: 1, level: 1 },
            { name: "increased senses", type: "boost", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "healing",
        upgradeFee: 3,
        req: "life",
        color: "#66ff33",
        branches: [
            { name: "death" }, 
            { name: "plants" }, 
        ],
        abilities: [
            { name: "self heal", type: "heal", upgradeFee: 1, level: 1 },
            { name: "auto heal", type: "heal", upgradeFee: 1, level: 1 },
            { name: "heal others", req: "heal", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "boost stats", type: "boost", upgradeFee: 1, level: 1 },
            { name: "water wall", type: "defense", upgradeFee: 1, level: 1 },
            { name: "water sense", type: "perception", upgradeFee: 1, level: 1 },
            { name: "swim bonus", type: "movement", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "death",
        upgradeFee: 1,
        req: "life",
        color: "#000",
        abilities: [
            { name: "death blast", type: "attack", upgradeFee: 1, level: 1 },
            { name: "death wave", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "vampirism", type: "attack/heal", upgradeFee: 1, level: 1 },
        ]
    },
    {
        name: "plants",
        upgradeFee: 1,
        req: "heal",
        color: "#99cc00",
        abilities: [
            { name: "poison immunity", type: "resistance", upgradeFee: 1, level: 1 },
            { name: "poison creation", type: "process", upgradeFee: 1, level: 1 },
            { name: "grow plant", type: "process", upgradeFee: 1, level: 1 },
            { name: "plant attack", type: "attack", upgradeFee: 1, level: 1 },
            { name: "plants attack!", type: "aoe", upgradeFee: 1, level: 1 },
            { name: "plant wall", type: "wall", upgradeFee: 1, level: 1 },
            { name: "plant sense", type: "preception", upgradeFee: 1, level: 1 },
        ]
    },
];

for(let e=0; e < elements.length; e++){ // * add/modify elements array ^_^
    let parent = elements[e].name;
    let abil = elements[e].abilities;
    console.log(abil);
    if(Array.isArray(abil)){
        for(let a=0; a < abil.length; a++){
            abil[a].parent = parent; // * marking each ability with the group they came from ^_^.
        }
    }
}

let player = {
    name: "jimbo",
    strength: 10,
    speed: 10,
    health: 100,
    branches: [],
    abilities: [],
    abilityLevels: [],
    investmentPoints: 10,
    coords: {
        row: 0,
        column: 0,
    }
}

//FUNCTIONS
function displayPlayer(parentElement, player, elementArray){
    if(typeof parentElement === 'string'){
        parentElement = document.getElementById(parentElement);
    }
    removeAllChildren(parentElement);
    
    let powerContainer, abilitiesContainer, inst, abilityContainer, abilityTitle, abil, upgradeB;
    let power;

    for(let b=0; b < player.branches.length; b++){
        power = getFullPowerClass(player.branches[b]);
        powerContainer = document.createElement("div"); //container
        powerContainer.className = "powerContainer";
        powerContainer.id = `powerContainer_${player.branches[b]}`;
        powerContainer.style.backgroundColor =`${power.color}44`;
        parentElement.appendChild(powerContainer);

        inst = document.createElement("div"); //title
        inst.className = "powerTitle";
        inst.textContent = player.branches[b];
        powerContainer.appendChild(inst);

        abilitiesContainer = document.createElement("div");
        abilitiesContainer.className = "abilitiesContainer";
        powerContainer.appendChild(abilitiesContainer);

        for(let a=0; a < player.abilities.length; a++){
            const ability = getFullAbility(player.abilities[a]); //this gets default stats.
            let playerLevel = getPlayerLevel(ability.name); //this gets player's real level for that ability!
            // console.log(player.branches[b]);
            // console.log(' vs ' );
            // console.log(ability.parent);
            if(player.branches[b] == ability.parent){
                abilityContainer = document.createElement("div");
                abilityContainer.className = "abilityContainer";
                abilityContainer.style.backgroundColor =`${power.color}44`;
                abilityContainer.id = `abilityContainer_${ability.name}`;
                abilitiesContainer.appendChild(abilityContainer);

                abilityTitle = document.createElement("div");
                abilityTitle.textContent = `name: ${ability.name}, type: ${ability.type}, upgradeFee: ${ability.upgradeFee}, level: ${playerLevel}`;
                abilityContainer.appendChild(abilityTitle);

                upgradeB = document.createElement("button");
                upgradeB.textContent = "Upgrade";
                upgradeB.addEventListener('click', (event)=>{
                    event.preventDefault();
                    
                    let level = getPlayerLevel(ability.name)
                    if(level < 10){
                        alert(`upgrade ${ability.name} to level ${level + 1} for ${ability.upgradeFee} points?`);
                        for(let a=0; a < player.abilityLevels.length; a++){
                            if(player.abilityLevels[a].name == ability.name){
                                player.abilityLevels[a].level++;
                            }
                        }
                        console.log('logging player: ');
                        console.log(player);
                        displayPlayer("playerStats0", player, elements);
                    }
                    
                })
                abilityContainer.appendChild(upgradeB);
                // { name: "self heal", type: "heal", upgradeFee: 1, level: 1 },
            }
        }

    }
}

//loadPowerClassSelector("addPowerClass", allowedElements, elements, "element", "elementPrice", "addPowerClass")
function loadPowerClassSelector(elementName, arrayFilter, array, orderCat, priceDisplay, addName){
    if(typeof(elementName) == 'string'){
        elementName = document.getElementById(elementName);
    }
    if(typeof(priceDisplay) == 'string'){
        priceDisplay = document.getElementById(priceDisplay);
    }
    const orderableSet = arrayFilter(array); // * get what elements are available for purchase //, player.investmentPoints
    
    removeAllChildren(addName);
    let option;

    option = document.createElement("option"); //default message :D
    option.value = "none";
    option.name = addName;
    option.textContent = `Please select an ${orderCat}`;
    option.selected = true;
    option.hidden = true;
    elementName.appendChild(option);

    for(let a=0; a < orderableSet.length; a++){ // * add on the options :D
        option = document.createElement("option");
        option.value = orderableSet[a].name;
        option.name = addName;
        option.textContent = `Add ${orderableSet[a].name}`;
        elementName.appendChild(option);
    }
    elementName.addEventListener('change', (event)=>{ // * displayPrice
        priceDisplay.textContent = getUpgradeFee(orderableSet, event.target.value);
        const product = event.target.value;
        const price = getUpgradeFee(orderableSet, event.target.value); //okay?
        currentOrders[orderCat] = { product: product, price: price };
    })
}

function makePurchaseButton(elementName, orderCat, playerCat, priceDisplay){
    if(typeof(elementName) == 'string'){
        elementName = document.getElementById(elementName);
    }
    if(typeof(priceDisplay) == 'string'){
        priceDisplay = document.getElementById(priceDisplay);
    }
    elementName.addEventListener('click', (event)=>{
        event.preventDefault();
        if(currentOrders[orderCat]){
            // console.log('looking for ' + currentOrders[orderCat].product + ' in: ');
            // console.log(player.branches);
            if(findInArray(player[playerCat], currentOrders[orderCat].product) === false){ // * only purchase product if we don't have it
                if(player.investmentPoints >= currentOrders[orderCat].price){ // * if we can purchase
                    player.investmentPoints -= currentOrders[orderCat].price; //* ...charge it :)
                    document.getElementById("pointsRemaining").textContent = player.investmentPoints;
                    
                    player[playerCat].push(currentOrders[orderCat].product); // * add the product
                    if(orderCat === 'ability'){
                        player["abilityLevels"].push({ name: currentOrders[orderCat].product, level: 1});
                    }
                    if(orderCat === "element"){
                        loadPowerClassSelector("addPowerClass", allowedElements, elements, "element", "elementPrice", "addPowerClass"); //reset element selector ^_^
                        loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", "abilityPrice", "addAbility");
                        displayPlayer("playerStats0", player, elements);
                    }
                    else if(orderCat === "ability"){
                        loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", "abilityPrice", "addAbility");
                        displayPlayer("playerStats0", player, elements);
                    }
                    priceDisplay.textContent = ""; //reset price display
                }
                else{
                    alert("sorry, but you do not have enough points to research " + currentOrders[orderCat].product);
                }
            }
            else{
                alert(`you already have that ${orderCat}!`);
                if(orderCat === "element"){
                    loadPowerClassSelector("addPowerClass", allowedElements, elements, "element", "elementPrice", "addPowerClass"); //reset element selector ^_^
                    loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", "abilityPrice", "addAbility");
                }
                else if(orderCat === "ability"){
                    loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", "abilityPrice", "addAbility");
                }
                priceDisplay.textContent = ""; // * reset price display
            }
        }
        else{
            alert('please select an element to purchase :) ');
        }
        if(orderCat == "ability"){ // * to keep all the clickers from going off.  ^_^
            //console.log('After purchase, player is: ');
            console.log(player);
        }
    })
}

//HELPERS
function getUpgradeFee(elements, elementName){
    for (let e=0; e < elements.length; e++){
        if(elements[e].name === elementName){
            return elements[e].upgradeFee;
        }
    }
    return -1;
}

function addUpgradeFees(array){
    for(let a=0; a < array.length; a++){ // * looping the object array
        for(prop in array[a]){ // * looping each object in the array
            if(prop === "branches"){ // * matching the property in the object.
                let miniArray = array[a][prop];
                for(let m=0; m < miniArray; m++){
                    miniArray[m].upgradeFee = getUpgradeFee(array, miniArray[m].name);
                }
            }
        }
    }
}

function getFullAbility(ability){ //returns full ability! :D
    let abils;
    for(let e=0; e < elements.length; e++){
        abils = elements[e].abilities;
        if(Array.isArray(abils)){
            for(let a=0; a < abils.length; a++){
                if(abils[a].name == ability){
                    return abils[a];
                }
            }
        }
    }
}

function getFullPowerClass(name){
    for(let e=0; e < elements.length; e++){
        if(elements[e].name == name){
            return elements[e];
        }
    }
}

function getPlayerLevel(name){
    let level = 0;
    for(let a=0; a < player.abilityLevels.length; a++){
        if(player.abilityLevels[a].name == name){
            level = player.abilityLevels[a].level;
        }
    }
    return level;
}

function allowedAbilities(array){
    let playerBranches = player.branches;
    let currentAbilities = player.abilities;
    let abilityList = [];
    let powerClass = "";
    let miniAbilList;
    
    for(let a=0; a < array.length; a++){
        miniAbilList = array[a]["abilities"];
        powerClass = array[a].name;
        if(Array.isArray(miniAbilList)){
            for(let m=0; m < miniAbilList.length; m++){ // * go through ability lists ^_^ 
                if(findInArray(currentAbilities, miniAbilList[m].name) == false){ // * if player doesn't have this ability
                    if((miniAbilList[m].req === undefined)){ // * if there is no defined requirement 
                        // * ...and player has powerClass in their player branches :D
                        if(findInArray(playerBranches, powerClass)){
                            abilityList.push(miniAbilList[m]);
                        }
                    }
                    else if ((findInArray(playerBranches, miniAbilList[m].req))){
                        abilityList.push(miniAbilList[m]);
                    }
                }
            }
        }
    }
    return abilityList;
}

function findInArray(array, value, inThisProp){
    const logIt = false;

    for(let a=0; a < array.length; a++){
        
        if(logIt){
            console.log('gonna look for ' + value + ' in ');
            console.log(array);
        }
        if(array[a] === value){
            if(logIt){
                console.log('.................')
                console.log(array[a] + " equals " + value);
            }
            return true;
        }
        else if(inThisProp !== undefined){
            if(array[a][inThisProp] === value){
                return true;
            }
        }
    }
    return false;
}


function allowedElements(elements){ // * return the allowed powers ^_^ //, remainingPoints
    let allowed = [];
    for(let e=0; e < elements.length; e++){
        if(elementPreReqMet(elements[e])
        //&&(elements[e].upgradeFee <= remainingPoints)
        &&(findInArray(player.branches, elements[e].name) == false)){
            allowed.push(elements[e]);
        }
    }
    return allowed;
}

function elementPreReqMet(element){ //seems to be working :D
    for(let b=0; b < player.branches.length; b++){
        if(Array.isArray(element.req)){
            for(let r=0; r < element.req.length; r++){
                if(element.req[r] === player.branches[b]){
                    return true;
                }
            }
        }
        else{
            if(element.req === player.branches[b]){
                return true;
            }
        } 
    }
    if((element.req === "none")){
        return true;
    }
    return false;
}

function removeAllChildren(element){
    if(typeof element == 'string'){
        element = document.getElementById(element);
    }
    
    if(element){
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    else{
        alert('something wrong!  ' + element + " not found!")
    }
}

//the frontend version ^_^
export {
    player, 
    terrainTypes,
    names,
    attackStyle,
    tempZones,
    elements,

    displayPlayer, //big functions
    loadPowerClassSelector,
    makePurchaseButton,
    
    getUpgradeFee, //helpers
    addUpgradeFees,
    getFullAbility,
    getFullPowerClass,
    getPlayerLevel,
    allowedAbilities,
    findInArray,
    allowedElements,
    elementPreReqMet,
    removeAllChildren,
}