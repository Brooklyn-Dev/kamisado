import { Tower } from "./tower";
import { Colour } from "../types";

export class Board {
	#board: (Tower | null)[][] = [];

	// prettier-ignore
	static COLOURS = [
        [Colour.ORANGE, Colour.BLUE, Colour.PURPLE, Colour.PINK, Colour.YELLOW, Colour.RED, Colour.GREEN, Colour.BROWN],
        [Colour.RED, Colour.ORANGE, Colour.PINK, Colour.GREEN, Colour.BLUE, Colour.YELLOW, Colour.BROWN, Colour.PURPLE],
        [Colour.GREEN, Colour.PINK, Colour.ORANGE, Colour.RED, Colour.PURPLE, Colour.BROWN, Colour.YELLOW, Colour.BLUE],
        [Colour.PINK, Colour.PURPLE, Colour.BLUE, Colour.ORANGE, Colour.BROWN, Colour.GREEN, Colour.RED, Colour.YELLOW],
        [Colour.YELLOW, Colour.RED, Colour.GREEN, Colour.BROWN, Colour.ORANGE, Colour.BLUE, Colour.PURPLE, Colour.PINK],
        [Colour.BLUE, Colour.YELLOW, Colour.BROWN, Colour.PURPLE, Colour.RED, Colour.ORANGE, Colour.PINK, Colour.GREEN],
        [Colour.PURPLE, Colour.BROWN, Colour.YELLOW, Colour.BLUE, Colour.GREEN, Colour.YELLOW, Colour.ORANGE, Colour.RED],
        [Colour.BROWN, Colour.GREEN, Colour.RED, Colour.YELLOW, Colour.PINK, Colour.PURPLE, Colour.BLUE, Colour.ORANGE]
    ];

	constructor() {
		this.#board = Array.from({ length: 8 }, () => Array(8).fill(null));
		this.#initTowers();
	}

	#initTowers() {
		Board.COLOURS[0].forEach((colour, col) => {
			const tower = new Tower(colour, 2, 7, col);
			this.#board[0][col] = tower;
		});

		Board.COLOURS[7].forEach((colour, col) => {
			const tower = new Tower(colour, 1, 0, col);
			this.#board[7][col] = tower;
		});
	}

	getSquareColourName(row: number, col: number): string {
		return Colour.getName(Board.COLOURS[row][col]);
	}

	getSquareColour(row: number, col: number): string {
		return Board.COLOURS[row][col];
	}

	getTowerAt(row: number, col: number): Tower | null {
		return this.#board[row][col];
	}
}
