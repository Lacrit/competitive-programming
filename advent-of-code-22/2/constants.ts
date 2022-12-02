import { GameOptions } from "./enums";

export const WinOptions = {
    [GameOptions.rock]: GameOptions.paper,
    [GameOptions.paper]: GameOptions.scissors,
    [GameOptions.scissors]: GameOptions.rock
}

export const LooseOptions = {
    [GameOptions.rock]: GameOptions.scissors,
    [GameOptions.paper]: GameOptions.rock,
    [GameOptions.scissors]: GameOptions.paper
}

export const SuggestedElfOptions = {
    X: "loose",
    Y: "draw",
    Z: "win"
};