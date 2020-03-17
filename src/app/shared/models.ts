export class Type {
    count: number;
    next: string;
    results: SubArray;
    id: any;
    constructor(
        count: number,
        next: string,
        results: SubArray
    ) {
        this.count = count;
        this.next = next;
        this.results = results;
    }
}

export class Pokemon {
    count: number;
    next: string;
    results: SubArray;
    id: any;
    constructor(
        count: number,
        next: string,
        results: SubArray
    ) {
        this.count = count;
        this.next = next;
        this.results = results;
    }
}

export class SubArray {
    name: string;
    url: string;
    details: PokemonId;
    constructor(
        name: string,
        url: string,
        details: PokemonId
    ) {
        this.name = name;
        this.url = url;
        this.details = details;
    }
}

export class PokemonId {
    name: string;
    id: number;
    sprites: Sprites;
    stringId: string;
    species: Object;
    description: string;
    height: number;
    weight: number;
    types: Object[];
    games: Object[];
    generations: Object[];
    baseStats: BaseStat[];
    moves: Move[];

    constructor(
        name: string,
        id: number,
        sprites: Sprites,
        stringId: string,
        species: Object,
        description: string,
        height: number,
        weight: number,
        types: Object[],
        games: Object[],
        generations: Object[],
        baseStats: BaseStat[],
        moves: Move[]
    ) {
        this.name = name;
        this.id = id;
        this.sprites = sprites;
        this.stringId = stringId;
        this.species = species;
        this.description = description;
        this.height = height;
        this.weight = weight;
        this.types = types;
        this.games = games;
        this.generations = generations;
        this.baseStats = baseStats;
        this.moves = moves;
    }
}

export class Sprites {
    front_default: string;
    constructor(
        front_default: string
    ) {
        this.front_default = front_default;
    }
}

export class BaseStat {
    base_stat: number;
    percent: number;
    stat: string;
}

export class Move {
    name: string;
    type: string;
    learnBy: string;
    levelLearned: number;
}