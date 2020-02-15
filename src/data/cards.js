const CARDS = {
    goblins: [
        {
            type: "Goblin",
            name: "Feig",
            strength: 8,
            skill: 11,
            magic: 1,
            weapons: 9,
            power: 6,
            img: "feig.jpg"
        },
        {
            type: "Goblin",
            name: "Hanz",
            strength: 10,
            skill: 4,
            magic: 4,
            weapons: 3,
            power: 4,
            img: "hanz.jpg"
        },
        {
            type: "Water Spirit",
            name: "Purfa Minosa",
            strength: 3,
            skill: 18,
            magic: 12,
            weapons: 0,
            power: 12,
            img: "minosa.jpg"
        },
        {
            type: "Kelpie",
            name: "Nuzvonica",
            strength: 12,
            skill: 12,
            magic: 13,
            weapons: 1,
            power: 11,
            img: "nuzvonica.jpg"
        },
        {
            type: "Bogle",
            name: "Hornblind",
            strength: 17,
            skill: 3,
            magic: 2,
            weapons: 0,
            power: 1,
            img: "hornblind.jpg"
        },
        {
            type: "Goblin",
            name: "Fract",
            strength: 4,
            skill: 3,
            magic: 1,
            weapons: 4,
            power: 3,
            img: "fract.jpg"
        },
        {
            type: "Lebrechaun",
            name: "Dywarth Green",
            strength: 4,
            skill: 17,
            magic: 16,
            weapons: 2,
            power: 8,
            img: "dywarthgreen.jpg"
        },
        {
            type: "Goblin",
            name: "Frichte",
            strength: 12,
            skill: 19,
            magic: 16,
            weapons: 1,
            power: 16,
            img: "frichte.jpg"
        },
        {
            type: "Sprite",
            name: "Dobby",
            strength: 3,
            skill: 4,
            magic: 3,
            weapons: 6,
            power: 3,
            img: "dobby.jpg"
        },
        {
            type: "Goblin",
            name: "Greuler",
            strength: 5,
            skill: 11,
            magic: 16,
            weapons: 2,
            power: 15,
            img: "greuler.jpg"
        },
        {
            type: "Goblin",
            name: "Moccha",
            strength: 5,
            skill: 4,
            magic: 6,
            weapons: 7,
            power: 2,
            img: "moccha.jpg"
        },
        {
            type: "Kobold",
            name: "Bikarage",
            strength: 13,
            skill: 12,
            magic: 3,
            weapons: 8,
            power: 12,
            img: "bikarage.jpg"
        },
        {
            type: "Goblin",
            name: "Haskell",
            strength: 5,
            skill: 4,
            magic: 6,
            weapons: 3,
            power: 9,
            img: "haskell.jpg"
        },
        {
            type: "Goblin",
            name: "Gobby",
            strength: 6,
            skill: 3,
            magic: 2,
            weapons: 8,
            power: 5,
            img: "gobby.jpg"
        },
        {
            type: "Goblin",
            name: "Hodor",
            strength: 12,
            skill: 11,
            magic: 1,
            weapons: 12,
            power: 5,
            img: "hodor.jpg"
        },
        {
            type: "Banshee",
            name: "Blitzer",
            strength: 14,
            skill: 6,
            magic: 3,
            weapons: 1,
            power: 11,
            img: "blitzer.jpg"
        },
        {
            type: "Trow",
            name: "Smilax",
            strength: 3,
            skill: 4,
            magic: 6,
            weapons: 2,
            power: 3,
            img: "smilax.jpg"
        },
        {
            type: "Will 'O' Wisp",
            name: "Fera",
            strength: 3,
            skill: 4,
            magic: 14,
            weapons: 2,
            power: 3,
            img: "fera.jpg"
        },
        {
            type: "Goblin",
            name: "Flewly",
            strength: 10,
            skill: 6,
            magic: 13,
            weapons: 6,
            power: 12,
            img: "flewly.jpg"
        },
        {
            type: "Goblin",
            name: "Galabar",
            strength: 12,
            skill: 7,
            magic: 2,
            weapons: 4,
            power: 7,
            img: "galabar.jpg"
        },
        {
            type: "Goblin",
            name: "Gobby",
            strength: 6,
            skill: 3,
            magic: 2,
            weapons: 8,
            power: 5,
            img: "gobby.jpg"
        },
        {
            type: "Pixie",
            name: "Pexel",
            strength: 3,
            skill: 9,
            magic: 6,
            weapons: 1,
            power: 5,
            img: "pexel.jpg"
        },
        {
            type: "Pixie",
            name: "Bloodnix",
            strength: 6,
            skill: 5,
            magic: 8,
            weapons: 2,
            power: 5,
            img: "bloodnix.jpg"
        },
        {
            type: "Fawn",
            name: "Charmas",
            strength: 4,
            skill: 3,
            magic: 15,
            weapons: 0,
            power: 15,
            img: "charmas.jpg"
        },
        {
            type: "Goblin",
            name: "Orcan",
            strength: 6,
            skill: 3,
            magic: 2,
            weapons: 9,
            power: 9,
            img: "orcan.jpg"
        },
        {
            type: "Nymph",
            name: "Zelda",
            strength: 4,
            skill: 8,
            magic: 12,
            weapons: 4,
            power: 7,
            img: "zelda.jpg"
        },
        {
            type: "Brownie",
            name: "Gertrudd",
            strength: 4,
            skill: 8,
            magic: 14,
            weapons: 3,
            power: 8,
            img: "gertrudd.jpg"
        },
        {
            type: "Goblin",
            name: "Honeypuff",
            strength: 9,
            skill: 6,
            magic: 2,
            weapons: 3,
            power: 11,
            img: "honeypuff.jpg"
        },
        {
            type: "Sprigan",
            name: "Duns Scots",
            strength: 4,
            skill: 12,
            magic: 18,
            weapons: 10,
            power: 6,
            img: "dunsscots.jpg"
        },
        {
            type: "Goblin",
            name: "Balstreakan",
            strength: 11,
            skill: 6,
            magic: 1,
            weapons: 6,
            power: 10,
            img: "balstreakan.jpg"
        }
    ]
}

export default CARDS;