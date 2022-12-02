export enum GameOptions {
    rock = 1,
    paper=  2, 
    scissors = 3
};

export enum Outcomes {
    draw = 3,
    won = 6,
    lost = 0
}

export enum OpponentOptions {
    A = GameOptions.rock,
    B = GameOptions.paper,
    C = GameOptions.scissors
};

export enum ElfOptions {
    X = GameOptions.rock,
    Y = GameOptions.paper,
    Z = GameOptions.scissors
};
