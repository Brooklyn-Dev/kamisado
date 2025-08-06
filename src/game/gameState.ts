import { Board } from "./board";

export class GameState {
	#board: Board;
	currentPlayer: 1 | 2 = 1;

	constructor() {
		this.#board = new Board();
	}

	getBoard(): Board {
		return this.#board;
	}
}
