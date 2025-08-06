import { Board } from "./board";

export class GameState {
	#board: Board;
	#currentPlayer: 1 | 2 = 1;
	#activeColour: string | null = null;
	#movesMade: number = 0;

	constructor() {
		this.#board = new Board();
	}

	getBoard(): Board {
		return this.#board;
	}

	getCurrentPlayer(): 1 | 2 {
		return this.#currentPlayer;
	}

	getActiveColour(): string | null {
		return this.#activeColour;
	}

	getMovesMade(): number {
		return this.#movesMade;
	}

	isFirstMove(): boolean {
		return this.#movesMade === 0;
	}

	makeMove(fromRow: number, fromCol: number, toRow: number, toCol: number): boolean {
		// Need to add validation
		if (!this.#board.canMoveTower(fromRow, fromCol, toRow, toCol)) return false;

		this.#board.moveTower(fromRow, fromCol, toRow, toCol);

		this.#currentPlayer = this.#currentPlayer === 1 ? 2 : 1;
		this.#activeColour = this.#board.getSquareColourName(toRow, toCol);
		this.#movesMade++;

		return true;
	}

	clone(): GameState {
		const newGameState = new GameState();
		newGameState.#board = this.#board.clone();
		newGameState.#currentPlayer = this.#currentPlayer;
		newGameState.#activeColour = this.#activeColour;
		newGameState.#movesMade = this.#movesMade;
		return newGameState;
	}
}
