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

	return (
		<>
			<div>
				<h1>Kamisado</h1>
				<div className="board-container">
					<Board gameState={gameState} onMove={handleMove} />
				</div>
			</div>
		</>
	);
}

export default App;
