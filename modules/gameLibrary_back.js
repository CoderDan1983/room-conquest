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
            { name: "light", type: "???", upgradeFee: 1 },
            { name: "blinding light", type: "camo", upgradeFee: 1 }
        ]
    },
    {
        name: "light bending",
        upgradeFee: 1,
        req: "light",
        color: "#ffffe6",
        abilities: [
            { name: "invisibility", type: "camo", upgradeFee: 1 },
            { name: "doppleganger", type: "camo", upgradeFee: 1 },
            { name: "laser", type: "attack", upgradeFee: 1 },
            { name: "precision cut", type: "process", req: "laser", upgradeFee: 1 }
        ]
    },
    {
        name: "fire",
        upgradeFee: 1,
        req: ["light", "thermal", "electric"],
        color: "#cc3300",
        abilities: [
            { name: "refine by heat", type: "process", upgradeFee: 1 },
            { name: "fire resistance", type: "resistance", upgradeFee: 1 },
            { name: "fireball", type: "attack", upgradeFee: 1 },
            { name: "fire aoe", type: "aoe", req: "fireball", upgradeFee: 1 }
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
            { name: "thermal sense", type: "perception", upgradeFee: 1 },
        ]
    },
    {
        name: "ice",
        upgradeFee: 1,
        req: ["thermal"],
        color: "#66b3ff",    
        abilities: [
            { name: "cold storage", type: "process", upgradeFee: 1 },
            { name: "ice wall", type: "wall", upgradeFee: 1 },
            { name: "cold resistance", type: "resistance", upgradeFee: 1 },
            { name: "fog", type: "camo", req: "water", upgradeFee: 1 },
            { name: "heat vampirism", type: "???", upgradeFee: 1 },
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
            { name: "electricute", type: "aoe", upgradeFee: 1 },
            { name: "zap", type: "attack", upgradeFee: 1 },
            { name: "emp", type: "attack", upgradeFee: 1 },
            { name: "emp aoe", type: "aoe", upgradeFee: 1 },
            { name: "electrical sense", type: "perception", upgradeFee: 1 },
            { name: "get charged", type: "boost", upgradeFee: 1 },
        ]
    },
    {
        name: "hacking",
        upgradeFee: 1,
        req: ["electricity"],
        color: "#ffcc00",
        abilities: [
            { name: "control", type: "???", upgradeFee: 1 },
            { name: "camera feed", type: "perception", upgradeFee: 1 },
            { name: "machine invisibility", type: "camo", upgradeFee: 1 },
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
            { name: "quantum blast", type: "attack", upgradeFee: 1 },
            { name: "quantum wave", type: "aoe", upgradeFee: 1 },
            { name: "quantum field", type: "defense", upgradeFee: 1 },
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
            { name: "rock blast", type: "attack", upgradeFee: 1 },
            { name: "rock storm", type: "aoe", upgradeFee: 1 },
            { name: "dirt shield", type: "wall", upgradeFee: 1 },
            { name: "earthquack", type: "camo", upgradeFee: 1 },
        ]
    },
    {
        name: "metal",
        upgradeFee: 1,
        req: "earth",
        color: "#999999",
        abilities: [
            { name: "metal mine", type: "process", upgradeFee: 1 },
            { name: "metal blast", type: "attack", upgradeFee: 1 },
            { name: "metal storm", type: "aoe", upgradeFee: 1 },
            { name: "metal shield", type: "wall", upgradeFee: 1 },
            { name: "technokenesis", type: "control", upgradeFee: 1 },
        ]
    },
    {
        name: "temporal",
        upgradeFee: 1,
        req: "quantum",
        color: "#4c00e6",
        abilities: [
            { name: "speed", type: "boost", upgradeFee: 1 },
            { name: "time stop", type: "???", upgradeFee: 1 },
            { name: "temporal blast", type: "attack", upgradeFee: 1 },
            { name: "slow shield", type: "wall", upgradeFee: 1 }, //decreases physical damage
            { name: "delay effects", type: "???", upgradeFee: 1 }, //removes all damage, to be recieved slowly over "x turns"
        ]
    },
    {
        name: "spacial",
        upgradeFee: 1,
        req: "quantum",
        color: "#330099",
        abilities: [
            { name: "teleportation", type: "movement", upgradeFee: 1 },
            { name: "teleporting dodge", type: "camo", upgradeFee: 1 },
            { name: "temporal blast", type: "attack", upgradeFee: 1 },
            { name: "extra storage", type: "???", upgradeFee: 1 }, //decreases physical damage
            { name: "dimensional blast", type: "attack", upgradeFee: 1 },
            { name: "dimensional shield", type: "defense", upgradeFee: 1 },
        ]
    },
    {
        name: "telekenesis",
        upgradeFee: 1,
        req: "none",
        color: "#000099",
        abilities: [
            { name: "ecolocation", type: "perception", upgradeFee: 1 },
            { name: "tk blast", type: "attack", upgradeFee: 1 },
            { name: "tk wave", type: "aoe", upgradeFee: 1 },
            { name: "tk bubble", type: "wall", upgradeFee: 1 }, //decreases physical damage
            { name: "flight", type: "movement", upgradeFee: 1 },
            { name: "manufacture", type: "process", upgradeFee: 1 },
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
            { name: "water creation", type: "???", upgradeFee: 1 },
            { name: "water blast", type: "attack", upgradeFee: 1 },
            { name: "water storm", req: "water blast", type: "aoe", upgradeFee: 1 },
            { name: "water wall", type: "defense", upgradeFee: 1 },
            { name: "water wall", type: "defense", upgradeFee: 1 },
            { name: "water sense", type: "perception", upgradeFee: 1 },
            { name: "swim bonus", type: "movement", upgradeFee: 1 },
        ]
    },
    {
        name: "mental",
        upgradeFee: 1,
        req: ["telekenesis", "life"],
        color: "#cccccc",
        abilities: [
            { name: "mind control", req: "sense other minds", type: "control", upgradeFee: 1 },
            { name: "sense other minds", type: "perception", upgradeFee: 1 },
            { name: "read other minds", req: "sense other minds", type: "perception", upgradeFee: 1 },
            { name: "confusion", type: "camo", upgradeFee: 1 },
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
            { name: "increased speed", type: "boost", upgradeFee: 1 },
            { name: "increased strength", type: "boost", upgradeFee: 1 },
            { name: "increased leap", type: "boost", upgradeFee: 1 },
            { name: "increased durability", type: "boost", upgradeFee: 1 },
            { name: "increased accuracy", type: "boost", upgradeFee: 1 },
            { name: "increased senses", type: "boost", upgradeFee: 1 },
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
            { name: "self heal", type: "heal", upgradeFee: 1 },
            { name: "auto heal", type: "heal", upgradeFee: 1 },
            { name: "heal others", req: "heal", type: "aoe", upgradeFee: 1 },
            { name: "boost stats", type: "boost", upgradeFee: 1 },
            { name: "water wall", type: "defense", upgradeFee: 1 },
            { name: "water sense", type: "perception", upgradeFee: 1 },
            { name: "swim bonus", type: "movement", upgradeFee: 1 },
        ]
    },
    {
        name: "death",
        upgradeFee: 1,
        req: "life",
        color: "#000",
        abilities: [
            { name: "death blast", type: "attack", upgradeFee: 1 },
            { name: "death wave", type: "aoe", upgradeFee: 1 },
            { name: "vampirism", type: "attack/heal", upgradeFee: 1 },
        ]
    },
    {
        name: "plants",
        upgradeFee: 1,
        req: "heal",
        color: "#99cc00",
        abilities: [
            { name: "poison immunity", type: "resistance", upgradeFee: 1 },
            { name: "poison creation", type: "process", upgradeFee: 1 },
            { name: "grow plant", type: "process", upgradeFee: 1 },
            { name: "plant attack", type: "attack", upgradeFee: 1 },
            { name: "plants attack!", type: "aoe", upgradeFee: 1 },
            { name: "plant wall", type: "wall", upgradeFee: 1 },
            { name: "plant sense", type: "preception", upgradeFee: 1 },
        ]
    },
];

function getUpgradeFee(elements, elementName){
    for (let e=0; e < elements.length; e++){
        if(elements[e].name === elementName){
            return elements[e].upgradeFee;
        }
    }
    return -1;
}

function addUpgradeFees(array){
    for(let a=0; a < array.length; a++){ //looping the object array
        for(prop in array[a]){ //looping each object in the array
            if(prop === "branches"){ //matching the property in the object.
                let miniArray = array[a][prop];
                for(let m=0; m < miniArray; m++){
                    miniArray[m].upgradeFee = getUpgradeFee(array, miniArray[m].name);
                }
            }
        }
    }
}

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

//the backend version
module.exports = {
    elements: elements,
    terrainTypes: terrainTypes,
    names: names,
    getUpgradeFee: getUpgradeFee,
}