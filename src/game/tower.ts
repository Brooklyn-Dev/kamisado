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

	getColour(): string {
		return this.#colour;
	}

	getColourName(): string {
		return Colour.getName(this.#colour);
	}

	getPlayer(): 1 | 2 {
		return this.#player;
	}

	getRow(): number {
		return this.#row;
	}

	getCol(): number {
		return this.#col;
	}

	getRowCol(): { row: number; col: number } {
		return { row: this.#row, col: this.#col };
	}

	moveTo(row: number, col: number) {
		this.#row = row;
		this.#col = col;
	}

	clone(): Tower {
		const newTower = new Tower(this.#colour, this.#player, this.#row, this.#col);
		return newTower;
	}
}
