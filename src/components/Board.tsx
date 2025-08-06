import type { GameState } from "../game/gameState";

interface BoardProps {
	gameState: GameState;
}

export function Board({ gameState }: BoardProps) {
	const board = gameState.getBoard();

	return (
		<div className="board">
			{Array.from({ length: 64 }).map((_, i) => {
				const row = Math.floor(i / 8);
				const col = i % 8;
				const colourValue = board.getSquareColour(row, col);
				const tower = board.getTowerAt(row, col);

				return (
					<div key={i} className="square" style={{ backgroundColor: colourValue }}>
						{tower && (
							<div className={`tower player-${tower.getPlayer()}`} style={{ color: tower.getColour() }}>
								{tower.getColourName()[0]}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}
