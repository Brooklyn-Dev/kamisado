import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { GameState } from "./game/gameState";

function App() {
	const [gameState, setGameState] = useState(() => new GameState());

	function handleMove(fromRow: number, fromCol: number, toRow: number, toCol: number): boolean {
		const newGameState = gameState.clone();
		const success = newGameState.makeMove(fromRow, fromCol, toRow, toCol);
		if (success) {
			setGameState(newGameState);
		}
		return success;
	}

	const winner = gameState.getWinner();

	return (
		<>
			<div>
				<h1>Kamisado</h1>

				<h2>{winner ? `Player ${winner} wins!` : `Player ${gameState.getCurrentPlayer()}'s turn`}</h2>

				<div className="board-container">
					<Board gameState={gameState} onMove={winner ? () => false : handleMove} />
				</div>
			</div>
		</>
	);
}

export default App;
