export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	/*
	yanmegashell: {
		fusion: ['Yanmega', 'Torkoal'],
		num: 1,
		name: "Yanmega-Shell",
		types: ["Bug", "Fire"],
		baseStats: {hp: 70, atk: 105, def: 145, spa: 85, spd: 90, spe: 60},
		abilities: {0: "As One (Torkoal)"},
		weightkg: 131.9,
	},
	pelipperink: {
      fusion: ['Pelipper', 'Tentacruel'],
		num: 2,
		name: "Pelipper-Ink",
		types: ["Water", "Poison"],
		baseStats: {hp: 80, atk: 78, def: 85, spa: 100, spd: 135, spe: 105},
		abilities: {0: "As One (Tentacruel)"},
		weightkg: 83,
	},
	excadrillboulder: {
		fusion: ['Excadrill', 'Gigalith'],
		num: 3,
		name: "Excadrill-Boulder",
		types: ["Steel", "Rock"],
		baseStats: {hp: 85, atk: 135, def: 130, spa: 90, spd: 80, spe: 79},
		abilities: {0: "As One (Gigalith)"},
		weightkg: 300.4,
	},
	vanilluxefur: {
		fusion: ['Vanilluxe', 'Beartic'],
		num: 4,
		name: "Vanilluxe-Fur",
		types: ["Ice"],
		baseStats: {hp: 90, atk: 90, def: 115, spa: 124, spd: 115, spe: 60},
		abilities: {0: "As One (Beartic)"},
		weightkg: 311.5,
	},
	butterfreeangler: {
		fusion: ['Butterfree', 'Lanturn'],
		num: 5,
		name: "Butterfree-Angler",
		types: ["Water", "Flying"],
		baseStats: {hp: 125, atk: 83, def: 58, spa: 106, spd: 76, spe: 67},
		abilities: {0: "As One (Lanturn)"},
		weightkg: 54.5,
	},
   dedenneluchador: {
		fusion: ['Dedenne', 'Hawlucha'],
		num: 6,
		name: "Dedenne-Luchador",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 78, atk: 120, def: 95, spa: 74, spd: 86, spe: 118},
		abilities: {0: "As One (Hawlucha)"},
		weightkg: 23.7,
	},
	shucklebrick: {
		fusion: ['Shuckle', 'Stakataka'],
		num: 7,
		name: "Shuckle-Brick",
		types: ["Bug", "Steel"],
		baseStats: {hp: 61, atk: 131, def: 231, spa: 117, spd: 101, spe: 13},
		abilities: {0: "As One (Stakataka)"},
		weightkg: 840.5,
	},
	munchlaxforest: {
		fusion: ['Munchlax', 'Torterra'],
		num: 8,
		name: "Munchlax-Forest",
		types: ["Normal", "Grass"],
		baseStats: {hp: 95, atk: 109, def: 130, spa: 95, spd: 85, spe: 76},
		abilities: {0: "As One (Torterra)"},
		weightkg: 415,
	},
	bunnelbyworker: {
		fusion: ['Bunnelby', 'Mudsdale'],
		num: 9,
		name: "Bunnelby-Worker",
		types: ["Normal", "Ground"],
		baseStats: {hp: 100, atk: 60, def: 100, spa: 114, spd: 80, spe: 65},
		abilities: {0: "As One (Mudsdale)"},
		weightkg: 925,
	},
	sirfetchdfantasy: {
		fusion: ['Sirfetch\u2019d', 'Rapidash-Galar'],
		num: 10,
		name: "Sirfetch\u2019d-Fantasy",
		types: ["Fighting", "Fairy"],
		baseStats: {hp: 90, atk: 114, def: 90, spa: 105, spd: 80, spe: 105},
		abilities: {0: "As One (Rapidash-Galar)"},
		weightkg: 197,
	},
	frogadierbeetle: {
		fusion: ['Frogadier', 'Heracross'],
		num: 11,
		name: "Frogadier-Beetle",
		types: ["Water", "Bug"],
		baseStats: {hp: 80, atk: 130, def: 75, spa: 102, spd: 95, spe: 85},
		abilities: {0: "As One (Heracross)"},
		weightkg: 64.9,
	},
	chandelureballoon: {
		fusion: ['Chandelure', 'Drifblim'],
		num: 12,
		name: "Chandelure-Balloon",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 150, atk: 105, def: 65, spa: 113, spd: 65, spe: 86},
		abilities: {0: "As One (Drifblim)"},
		weightkg: 49.4,
	},
	infernapeclimber: {
		fusion: ['Infernape', 'Exeggutor-Alola'],
		num: 13,
		name: "Infernape-Climber",
		types: ["Fire", "Dragon"],
		baseStats: {hp: 95, atk: 125, def: 85, spa: 125, spd: 110, spe: 89},
		abilities: {0: "As One (Exeggutor-Alola)"},
		weightkg: 470,
	},
   ribombeecharmer: {
		fusion: ['Ribombee', 'Steelix'],
		num: 14,
		name: "Ribombee-Charmer",
		types: ["Fairy", "Steel"],
		baseStats: {hp: 75, atk: 85, def: 205, spa: 105, spd: 85, spe: 32},
		abilities: {0: "As One (Steelix)"},
		weightkg: 400.5,
	},
   beheeyemufo: {
		fusion: ['Beheeyem', 'Magnezone'],
		num: 15,
		name: "Beheeyem-UFO",
		types: ["Psychic", "Electric"],
		baseStats: {hp: 70, atk: 120, def: 130, spa: 130, spd: 105, spe: 60},
		abilities: {0: "As One (Magnezone)"},
		weightkg: 214.5,
	},
	sableyedoom: {
		fusion: ['Sableye', 'Absol'],
		num: 16,
		name: "Sableye-Doom",
		types: ["Dark"],
		baseStats: {hp: 65, atk: 140, def: 100, spa: 75, spd: 85, spe: 76},
		abilities: {0: "As One (Absol)"},
		weightkg: 58,
	},
   mareaniemagma: {
		fusion: ['Mareanie', 'Salazzle'],
		num: 17,
		name: "Mareanie-Magma",
		types: ["Water", "Poison"],
		baseStats: {hp: 68, atk: 64, def: 80, spa: 111, spd: 80, spe: 127},
		abilities: {0: "As One (Salazzle)"},
		weightkg: 30.2,
	},
	thwackeydune: {
		fusion: ['Thwackey', 'Hippowdon'],
		num: 18,
		name: "Thwackey-Dune",
		types: ["Grass", "Ground"],
		baseStats: {hp: 108, atk: 112, def: 118, spa: 68, spd: 127, spe: 62},
		abilities: {0: "As One (Hippowdon)"},
		weightkg: 314,
	},
   sphealsiren: {
		fusion: ['Spheal', 'Tapu-Fini'],
		num: 19,
		name: "Spheal-Siren",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 70, atk: 105, def: 125, spa: 95, spd: 130, spe: 93},
		abilities: {0: "As One (Tapu-Fini)"},
		weightkg: 60.7,
	},
   pincurchingoo: {
		fusion: ['Pincurchin', 'Sliggoo'],
		num: 20,
		name: "Pincurchin-Goo",
		types: ["Electric", "Dragon"],
		baseStats: {hp: 68, atk: 75, def: 102, spa: 95, spd: 120, spe: 64},
		abilities: {0: "As One (Sliggoo)"},
		weightkg: 151.5,
	},
   nihilegopsychosis: {
		fusion: ['Nihilego', 'Indeedee-F'],
		num: 21,
		name: "Nihilego-Psychosis",
		types: ["Rock", "Psychic"],
		baseStats: {hp: 70, atk: 65, def: 95, spa: 115, spd: 125, spe: 100},
		abilities: {0: "As One (Indeedee-F)"},
		weightkg: 83,
	},
   stunfiskjagged: {
		fusion: ['Stunfisk', 'Druddigon'],
		num: 22,
		name: "Stunfisk-Jagged",
		types: ["Ground", "Dragon"],
		baseStats: {hp: 77, atk: 120, def: 120, spa: 100, spd: 90, spe: 56},
		abilities: {0: "As One (Druddigon)"},
		weightkg: 150,
	},
   pawniardaviation: {
		fusion: ['Pawniard', 'Mandibuzz'],
		num: 23,
		name: "Pawniard-Aviation",
		types: ["Steel", "Dark"],
		baseStats: {hp: 110, atk: 105, def: 105, spa: 55, spd: 95, spe: 96},
		abilities: {0: "As One (Mandibuzz)"},
		weightkg: 49.5,
	},
   watchogscout: {
		fusion: ['Watchog', 'Braviary'],
		num: 24,
		name: "Watchog-Scout",
		types: ["Normal", "Flying"],
		baseStats: {hp: 100, atk: 123, def: 95, spa: 57, spd: 125, spe: 80},
		abilities: {0: "As One (Braviary)"},
		weightkg: 68,
	},
   mothimgourd: {
		fusion: ['Mothim', 'Gourgeist-Super'],
		num: 25,
		name: "Mothim-Gourd",
		types: ["Bug", "Ghost"],
		baseStats: {hp: 85, atk: 115, def: 122, spa: 58, spd: 95, spe: 89},
		abilities: {0: "As One (Gourgeist-Super)"},
		weightkg: 62.3,
	},
   clefairyselene: {
		fusion: ['Clefairy', 'Lunatone'],
		num: 26,
		name: "Clefairy-Selene",
		types: ["Fairy", "Rock"],
		baseStats: {hp: 90, atk: 75, def: 90, spa: 91, spd: 90, spe: 77},
		abilities: {0: "As One (Lunatone)"},
		weightkg: 175.5,
	},
   hoothootperch: {
		fusion: ['Hoothoot', 'Slowking-Galar'],
		num: 27,
		name: "Hoothoot-Perch",
		types: ["Normal", "Poison"],
		baseStats: {hp: 95, atk: 75, def: 100, spa: 120, spd: 110, spe: 33},
		abilities: {0: "As One (Slowking-Galar)"},
		weightkg: 100.7,
	},
   swoobataroma: {
		fusion: ['Swoobat', 'Vileplume'],
		num: 28,
		name: "Swoobat-Aroma",
		types: ["Psychic", "Grass"],
		baseStats: {hp: 75, atk: 85, def: 95, spa: 135, spd: 105, spe: 65},
		abilities: {0: "As One (Vileplume)"},
		weightkg: 29.1,
	},
   blacephalonborealis: {
		fusion: ['Blacephalon', 'Aurorus'],
		num: 29,
		name: "Blacephalon-Borealis",
		types: ["Ghost", "Ice"],
		baseStats: {hp: 123, atk: 77, def: 82, spa: 123, spd: 92, spe: 119},
		abilities: {0: "As One (Aurorus)"},
		weightkg: 238,
	},
   malamarparallel: {
		fusion: ['Malamar', 'Girafarig'],
		num: 30,
		name: "Malamar-Parallel",
		types: ["Dark", "Psychic"],
		baseStats: {hp: 70, atk: 95, def: 100, spa: 100, spd: 100, spe: 70},
		abilities: {0: "As One (Girafarig)"},
		weightkg: 88.5,
	},
	*/
};
