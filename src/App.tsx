import "./App.css";
import { Colour } from "./types";

// prettier-ignore
const BOARD_COLOURS = [
	[Colour.ORANGE, Colour.BLUE, Colour.PURPLE, Colour.PINK, Colour.YELLOW, Colour.RED, Colour.GREEN, Colour.BROWN],
	[Colour.RED, Colour.ORANGE, Colour.PINK, Colour.GREEN, Colour.BLUE, Colour.YELLOW, Colour.BROWN, Colour.PURPLE],
	[Colour.GREEN, Colour.PINK, Colour.ORANGE, Colour.RED, Colour.PURPLE, Colour.BROWN, Colour.YELLOW, Colour.BLUE],
	[Colour.PINK, Colour.PURPLE, Colour.BLUE, Colour.ORANGE, Colour.BROWN, Colour.GREEN, Colour.RED, Colour.YELLOW],
	[Colour.YELLOW, Colour.RED, Colour.GREEN, Colour.BROWN, Colour.ORANGE, Colour.BLUE, Colour.PURPLE, Colour.PINK],
	[Colour.BLUE, Colour.YELLOW, Colour.BROWN, Colour.PURPLE, Colour.RED, Colour.ORANGE, Colour.PINK, Colour.GREEN],
	[Colour.PURPLE, Colour.BROWN, Colour.YELLOW, Colour.BLUE, Colour.GREEN, Colour.YELLOW, Colour.ORANGE, Colour.RED],
	[Colour.BROWN, Colour.GREEN, Colour.RED, Colour.YELLOW, Colour.PINK, Colour.PURPLE, Colour.BLUE, Colour.ORANGE]
];

function App() {
	function getSquareColour(index: number) {
		const row = Math.floor(index / 8);
		const col = index % 8;
		return BOARD_COLOURS[row][col];
	}

	return (
		<>
			<div>
				<h1>Kamisado</h1>
				<div className="board-container">
					<div className="board">
						{Array.from({ length: 64 }).map((_, i) => (
							<div key={i} className="square" style={{ backgroundColor: getSquareColour(i) }}>
								{i}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
