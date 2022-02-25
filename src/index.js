const elements = [
    {
        name: "light", 
        req: "none",
        branches: [
            { name: "fire", upgradeFee: 1 }, 
            { name: "light bending", upgradeFee: 1 }
        ], 
        abilities: [
            { name: "light", type: "???", upgradeFee: 1 },
            { name: "blinding light", type: "camo", upgradeFee: 1 }
        ]
    },
    {
        name: "light bending",
        req: "light", 
        abilities: [
            { name: "invisibility", type: "camo", upgradeFee: 1 },
            { name: "doppleganger", type: "camo", upgradeFee: 1 },
            { name: "laser", type: "attack", upgradeFee: 1 },
            { name: "precision cut", type: "process", req: "laser", upgradeFee: 1 }
        ]
    },
    {
        name: "fire",
        req: ["light", "thermal", "electric"],
        abilities: [
            { name: "refine by heat", type: "process", upgradeFee: 1 },
            { name: "fire resistance", type: "resistance", upgradeFee: 1 },
            { name: "fireball", type: "attack", upgradeFee: 1 },
            { name: "fire aoe", type: "aoe", req: "fireball", upgradeFee: 1 }
        ]
    },
    {
        name: "thermal",
        req: "none",
        branches: [
            { name: "fire", upgradeFee: 1 }, 
            { name: "ice", upgradeFee: 1 }
        ],
        abilities: [
            { name: "thermal sense", type: "perception", upgradeFee: 1 },
        ]
    },
    {
        name: "ice",
        req: ["thermal"],
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
        req: "none",
        branches: [
            { name: "hacking", upgradeFee: 1 }, 
            { name: "fire", upgradeFee: 1 }
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
        req: ["electricity"],
        abilities: [
            { name: "control", type: "???", upgradeFee: 1 },
            { name: "camera feed", type: "perception", upgradeFee: 1 },
            { name: "machine invisibility", type: "camo", upgradeFee: 1 },
        ]
    },
    {
        name: "quantum",
        req: "none",
        branches: [
            { name: "temporal", upgradeFee: 1 }, 
            { name: "spacial", upgradeFee: 1 }
        ],
        abilities: [
            { name: "quantum blast", type: "attack", upgradeFee: 1 },
            { name: "quantum wave", type: "aoe", upgradeFee: 1 },
            { name: "quantum field", type: "defense", upgradeFee: 1 },
        ]
    },
    {
        name: "earth",
        req: "none",
        branches: [
            { name: "metal", upgradeFee: 1 }, 
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
        req: "earth",
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
        req: "quantum",
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
        req: "quantum",
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
        req: "none",
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
        req: "none",
        branches: [
            { name: "ice", upgradeFee: 1 }, 
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
        req: ["telekenesis", "life"],
        abilities: [
            { name: "mind control", req: "sense other minds", type: "control", upgradeFee: 1 },
            { name: "sense other minds", type: "perception", upgradeFee: 1 },
            { name: "read other minds", req: "sense other minds", type: "perception", upgradeFee: 1 },
            { name: "confusion", type: "camo", upgradeFee: 1 },
        ]
    },
    {
        name: "life",
        req: "none",
        branches: [
            { name: "mental", upgradeFee: 1 }, 
            { name: "healing", upgradeFee: 1 }, 
            { name: "body modification", upgradeFee: 1 }, 
        ],
    },
    {
        name: "body modification",
        req: "life",
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
        req: "life",
        branches: [
            { name: "death", upgradeFee: 1 }, 
            { name: "plants", upgradeFee: 1 }, 
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
        req: "life",
        abilities: [
            { name: "death blast", type: "attack", upgradeFee: 1 },
            { name: "death wave", type: "aoe", upgradeFee: 1 },
            { name: "vampirism", type: "attack/heal", upgradeFee: 1 },
        ]
    },
    {
        name: "plants",
        req: "heal",
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
]


console.log(elements);