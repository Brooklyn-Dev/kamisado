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

	function handleReset() {
		setGameState(new GameState());
	}

	const winner = gameState.getWinner();

	return (
		<>
			<h1>Kamisado</h1>

			<h2>
				{winner
					? `${winner === 1 ? "Black" : "White"} wins!`
					: `${gameState.getCurrentPlayer() === 1 ? "Black" : "White"}'s turn`}
			</h2>

			<div className="game-container">
				<Board
					key={gameState.getMovesMade()}
					gameState={gameState}
					onMove={winner ? () => false : handleMove}
				/>
				<div className="game-status">
					<div className="game-controls">
						<button className="game-btn" onClick={handleReset}>
							Reset
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
