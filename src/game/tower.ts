import { Colour } from "../types";

export class Tower {
	#colour: string;
	#player: 1 | 2;
	#row: number;
	#col: number;

	constructor(colour: string, player: 1 | 2, row: number, col: number) {
		this.#colour = colour;
		this.#player = player;
		this.#row = row;
		this.#col = col;
	}

	getColour() {
		return this.#colour;
	}

	getColourName() {
		return Colour.getName(this.#colour);
	}

	getPlayer() {
		return this.#player;
	}

	getRowCol() {
		return { row: this.#row, col: this.#col };
	}

	moveTo(row: number, col: number) {
		this.#row = row;
		this.#col = col;
	}
}
