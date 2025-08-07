import { Board } from "./board";

export class GameState {
	#board: Board;
	#currentPlayer: 1 | 2 = 1;
	#activeColour: string | null = null;
	#movesMade: number = 0;
	#winner: 1 | 2 | null = null;

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

	getWinner(): 1 | 2 | null {
		return this.#winner;
	}

	isFirstMove(): boolean {
		return this.#movesMade === 0;
	}

	isGameOver(): boolean {
		return this.#winner !== null;
	}

	makeMove(fromRow: number, fromCol: number, toRow: number, toCol: number): boolean {
		if (this.#winner) return false;

		if (!this.#board.canMoveTower(fromRow, fromCol, toRow, toCol)) return false;

		this.#board.moveTower(fromRow, fromCol, toRow, toCol);

		this.#checkWinner(toRow, toCol);

		if (!this.#winner) {
			this.#currentPlayer = this.#currentPlayer === 1 ? 2 : 1;
			this.#activeColour = this.#board.getSquareColourName(toRow, toCol);
		}

		this.#movesMade++;
		return true;
	}

	#checkWinner(row: number, col: number) {
		if (row === 0 && this.#currentPlayer === 1) {
			this.#winner = 1;
		} else if (row === 7 && this.#currentPlayer === 2) {
			this.#winner = 2;
		}
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
