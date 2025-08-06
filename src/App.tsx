import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { GameState } from "./game/gameState";

function App() {
	const [gameState] = useState(() => new GameState());

	return (
		<>
			<div>
				<h1>Kamisado</h1>
				<div className="board-container">
					<Board gameState={gameState} />
				</div>
			</div>
		</>
	);
}

export default App;
