//import { compareByInspect } from "chai/lib/chai/utils";

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
    },
    piece: null,
}

let currentOrders = { //holds orders

}

//displayPlayer(groupArr, investmentRemainingArr, player)
function displayPlayer(input, player){ //todo upgraded price display
    const { version, remainDisplay } = input;

    for(let p=0; p < remainDisplay.length; p++){
        if(typeof(remainDisplay[p]) == 'string'){
            remainDisplay[p] = document.getElementById(remainDisplay[p]);
        }
    }
    for(let g=0; g < version.length; g++){ 
        if(typeof(version[g].parent) == 'string'){ //*make sure we are referencing all the elements :)
            version[g].parent = document.getElementById(version[g].parent);
        }
        
        removeAllChildren(version[g].parent);
        
        let powerContainer, abilitiesContainer, inst, abilityContainer, abilityTitle, abil, upgradeB;
        let power;

        for(let b=0; b < player.branches.length; b++){
            power = getFullPowerClass(player.branches[b]);
            powerContainer = document.createElement("div"); //container
            powerContainer.className = "powerContainer";
            powerContainer.id = `powerContainer_${player.branches[b]}_${version[g].suffix}`;
            powerContainer.style.backgroundColor =`${power.color}44`;
            version[g].parent.appendChild(powerContainer);

            inst = document.createElement("div"); //title
            inst.className = "powerTitle";
            inst.textContent = player.branches[b];
            powerContainer.appendChild(inst);

            abilitiesContainer = document.createElement("div");
            abilitiesContainer.className = "abilitiesContainer";
            powerContainer.appendChild(abilitiesContainer);

            for(let a=0; a < player.abilities.length; a++){
                const ability = getFullAbility(player.abilities[a]); //* this gets default stats.
                let playerLevel = getPlayerLevel(ability.name); //* this gets player's real level for that ability!
                if(player.branches[b] == ability.parent){
                    abilityContainer = document.createElement("div");
                    abilityContainer.className = "abilityContainer";
                    abilityContainer.style.backgroundColor =`${power.color}44`;
                    abilityContainer.id = `abilityContainer_${ability.name}_${version[g].suffix}`;
                    abilitiesContainer.appendChild(abilityContainer);

                    abilityTitle = document.createElement("div");
                    abilityTitle.textContent = `name: ${ability.name}, type: ${ability.type}, upgradeFee: ${ability.upgradeFee}, level: ${playerLevel}`;
                    abilityContainer.appendChild(abilityTitle);

                    upgradeB = document.createElement("button");
                    upgradeB.textContent = "Upgrade";
                    upgradeB.addEventListener('click', (event)=>{
                        event.preventDefault();
                        
                        let level = getPlayerLevel(ability.name);
                        const fee = getFullAbility(ability.name).upgradeFee;
                        if(level < 10){
                            if(player.investmentPoints >= fee){
                                alert(`upgrade ${ability.name} to level ${level + 1} for ${ability.upgradeFee} points?`);
                                for(let a=0; a < player.abilityLevels.length; a++){
                                    if(player.abilityLevels[a].name == ability.name){
                                        player.abilityLevels[a].level++;
                                        player.investmentPoints -= fee;
                                        for(let p=0; p < remainDisplay.length; p++){
                                            if(typeof(remainDisplay[p]) == 'string'){
                                                remainDisplay[p].textContent = player.investmentPoints;
                                            }
                                        }
                                        
                                        break;
                                    }
                                }
                                console.log('logging player: ');
                                console.log(player);
                                displayPlayer(input, player);                           
                            }
                            else {
                                alert("get more points to upgrade!")
                            }
                        }
                        else{
                            alert("already at max level!");
                        }
                        
                    })
                    abilityContainer.appendChild(upgradeB);
                    // { name: "self heal", type: "heal", upgradeFee: 1, level: 1 },
                }
            }

        }
    }
}

function displayPlayerPiece(coords, player, board){
    if(typeof(board) == 'string'){
        board = document.getElementById(board);
    }
    if(player.piece == null){ //* create piece if it doesn't exist ^_^
        let piece = document.createElement("div");
        player.piece = piece;
        piece.className = "playerPiece";
        piece.textContent = 'player';
        piece.addEventListener('click', (event)=>{
            alert(`${player.coords.column}, ${player.coords.row}`);
        });
        board.appendChild(piece);
    }
    let xP = player.coords.column * 10;
    let yP = player.coords.row * 10;
    player.piece.style.top = `${yP}%`;
    player.piece.style.left = `${xP}%`;
}

function setupPlayerMovement(player, board, limits){
    var stopIt = function(e) {
        e.preventDefault();
        e.scrollTo(0,0);
    }
    document.addEventListener('scroll', stopIt, false);
    document.addEventListener('mousewheel', stopIt, false);
    document.addEventListener('touchmove', stopIt, false);

    document.addEventListener('keyup', (event)=>{
        let dreamCoords = JSON.parse(JSON.stringify(player.coords));
        let move = false;
        if(event.key == 'ArrowUp'){
            dreamCoords.row--;
        }
        else if(event.key == 'ArrowDown'){
            dreamCoords.row++;
        }
        else if(event.key == 'ArrowLeft'){
            dreamCoords.column--;
        }
        else if(event.key == 'ArrowRight'){
            dreamCoords.column++;  
        }

        if((dreamCoords.row >= limits.minRow)&&(dreamCoords.row <= limits.maxRow)&&
        (dreamCoords.column >= limits.minColumn)&&(dreamCoords.column <= limits.maxColumn)){
            move = true;
        }

        move = true;

        if(move){
            player.coords = dreamCoords;
            displayPlayerPiece(dreamCoords, player, board);
        }
    });

}
function loadPowerClassSelector(elementName, arrayFilter, array, orderCat, priceDisplayArr, addName){ //todo upgraded price display
    if(typeof(elementName) == 'string'){
        elementName = document.getElementById(elementName);
    }
    for(let p=0; p < priceDisplayArr.length; p++){
        if(typeof(priceDisplayArr[p]) == 'string'){
            priceDisplayArr[p] = document.getElementById(priceDisplayArr[p]);
        }
    }
    
    const orderableSet = arrayFilter(array); // * get what elements are available for purchase //, player.investmentPoints
    
    removeAllChildren(addName);
    let option;

    option = document.createElement("option");
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
        const product = event.target.value;
        const price = getUpgradeFee(orderableSet, event.target.value);
        for(let p=0; p < priceDisplayArr.length; p++){
            priceDisplayArr[p].textContent = price;
        }
        
        currentOrders[orderCat] = { product: product, price: price };
    })
}

const localPlayerStatsDisplayInfo = {
    version: [{parent: "playerStats0", suffix: "main"}, {parent: "playerDisplay", suffix: "side"}],
    remainDisplay: ["pointsRemaining", "pointsRemainingSide"],
};
let localPurchaseDisplays = {
    powerClassDisplay: [],
    abilityDisplay: [],
    remainingPointsDisplay: [],
}

function makePurchaseButton(purchaseButton, orderCat, playerCat, displays, suffix){ //todo upgraded price display
    if(typeof(purchaseButton) == 'string'){
        purchaseButton = document.getElementById(purchaseButton);
    }
    let { powerClassDisplay, abilityDisplay, remainingPointsDisplay } = displays;

    powerClassDisplay = HTMLElementArray(powerClassDisplay);
    abilityDisplay = HTMLElementArray(abilityDisplay);
    remainingPointsDisplay = HTMLElementArray(remainingPointsDisplay);

    purchaseButton.addEventListener('click', (event)=>{
        event.preventDefault();
        if(currentOrders[orderCat]){  
            if(findInArray(player[playerCat], currentOrders[orderCat].product) === false){ // * only purchase product if we don't have it
                if(player.investmentPoints >= currentOrders[orderCat].price){ // * if we can purchase
                    player.investmentPoints -= currentOrders[orderCat].price; //* ...charge it :)

                    changeTextOfHTMLArray(remainingPointsDisplay, player.investmentPoints);
                    player[playerCat].push(currentOrders[orderCat].product); // * add the product
                    if(orderCat === 'ability'){
                        player["abilityLevels"].push({ name: currentOrders[orderCat].product, level: 1});
                    }
                    if(orderCat === "element"){
                        loadPowerClassSelector("addPowerClass", allowedElements, elements, "element", powerClassDisplay, "addPowerClass"); //*reset element selector ^_^ //"elementPrice"
                        loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", abilityDisplay, "addAbility"); // "abilityPrice"
                        displayPlayer(localPlayerStatsDisplayInfo, player);

                        changeTextOfHTMLArray(powerClassDisplay, ""); //* reset price display
                    }
                    else if(orderCat === "ability"){
                        loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", abilityDisplay, "addAbility");
                        displayPlayer(localPlayerStatsDisplayInfo, player);
                    }

                    changeTextOfHTMLArray(abilityDisplay, ""); //* reset price display
                }
                else{
                    alert("sorry, but you do not have enough points to research " + currentOrders[orderCat].product);
                }
            }
            else{
                alert(`you already have that ${orderCat}!`);
                if(orderCat === "element"){
                    loadPowerClassSelector("addPowerClass", allowedElements, elements, "element", powerClassDisplay, "addPowerClass"); //reset element selector ^_^
                    loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", abilityDisplay, "addAbility");

                    changeTextOfHTMLArray(powerClassDisplay, ""); //* reset price display
                }
                else if(orderCat === "ability"){
                    loadPowerClassSelector("addAbility", allowedAbilities, elements, "ability", abilityDisplay, "addAbility");
                }

                changeTextOfHTMLArray(abilityDisplay, ""); //* reset price display
            }
        }
        else{
            alert('please select an element to purchase :) ');
        }
        if(orderCat == "ability"){ // * to keep all the clickers from going off.  ^_^
            console.log('After purchase, player is: ');
            console.log(player);
        }
    })
}

function makeToggleButton(toggleButton, toggledElementArr, showText, hideText, functObj) {
    if(typeof(toggleButton) == 'string'){
        toggleButton = document.getElementById(toggleButton);
    }
    for(let g=0; g < toggledElementArr.length; g++){ //* things that are hidden on toggle ^_^
        if(typeof(toggledElementArr[g]) == 'string'){
            toggledElementArr[g] = document.getElementById(toggledElementArr[g]);
        }
    }

    toggleButton.addEventListener('click', (event)=>{
        event.preventDefault();        
        for(let g=0; g < toggledElementArr.length; g++){
            if(toggledElementArr[g].style.display == "none"){
                toggledElementArr[g].style.display = 'initial';
                toggleButton.textContent = hideText;
            }
            else{
                toggledElementArr[g].style.display = "none";
                toggleButton.textContent = showText;
            }
        }
        
        if(typeof(functObj) !== 'undefined'){
            console.log(typeof(functObj));
            console.log(functObj);
            
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

//unsent helpers: 
function HTMLElementArray(array){ //* returns an array of all html elements :D
    for(let a=0; a < array.length; a++){
        if(typeof(array[a]) == 'string'){
            array[a] = document.getElementById(array[a]);
        }
    }
    return array;
}

function changeTextOfHTMLArray(array, text){
    for(let p=0; p < array.length; p++){
        array[p].textContent = text; //* reset price display
    }
}

//HELPERS
function addStyles(element, styleObj){ //* add specialized styling to an element :)
    if(typeof(element) == 'string'){
        element = document.getElementById(element);
    }

    for(let prop in styleObj){
        element.style[prop] = styleObj[prop];
    }
};

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

function getFullAbility(ability){ //* returns full ability! :D
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
    currentOrders, 
    terrainTypes,
    names,
    attackStyle,
    tempZones,
    elements,

    displayPlayer, //big functions
    loadPowerClassSelector,
    makePurchaseButton,
    logTerritory, 
    makeToggleButton,

    displayPlayerPiece,
    setupPlayerMovement, 

    addStyles, //helpers
    getUpgradeFee, 
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