import { useState } from "react";
import type { GameState } from "../game/gameState";

interface BoardProps {
	gameState: GameState;
	onMove: (fromRow: number, fromCol: number, toRow: number, toCol: number) => boolean;
}

export function Board({ gameState, onMove }: BoardProps) {
	const [selectedSquare, setSelectedSquare] = useState<{ row: number; col: number } | null>(null);
	const [validMoves, setValidMoves] = useState<Set<string>>(new Set());

	const board = gameState.getBoard();

	function clearSelection() {
		setSelectedSquare(null);
		setValidMoves(new Set());
	}

	function selectSquare(row: number, col: number) {
		setSelectedSquare({ row, col });
		const moves = board.getMoves(row, col);
		const moveSet = new Set(moves.map((move) => `${move.row},${move.col}`));
		setValidMoves(moveSet);
	}

	function handleSquareClick(row: number, col: number) {
		const clickedTower = board.getTowerAt(row, col);
		const currentPlayer = gameState.getCurrentPlayer();

		if (gameState.isFirstMove()) {
			if (selectedSquare) {
				const isValidMove = validMoves.has(`${row},${col}`);

				if (isValidMove) {
					const { row: fromRow, col: fromCol } = selectedSquare;
					const success = onMove(fromRow, fromCol, row, col);
					if (success) {
						clearSelection();
					}
				} else {
					if (clickedTower && clickedTower.getPlayer() === currentPlayer) {
						selectSquare(row, col);
					} else {
						clearSelection();
					}
				}
			} else {
				if (clickedTower && clickedTower.getPlayer() === currentPlayer) {
					selectSquare(row, col);
				}
			}
		}
	}

	return (
		<div className="board">
			{Array.from({ length: 64 }).map((_, i) => {
				const row = Math.floor(i / 8);
				const col = i % 8;
				const colourValue = board.getSquareColour(row, col);
				const tower = board.getTowerAt(row, col);
				const selected = selectedSquare && selectedSquare.row === row && selectedSquare.col === col;
				const validMove = validMoves.has(`${row},${col}`);

				return (
					<div
						key={i}
						className={`square ${validMove ? "valid-move" : ""}`}
						style={{ backgroundColor: colourValue }}
						onClick={() => handleSquareClick(row, col)}
					>
						{tower && (
							<div
								className={`tower player-${tower.getPlayer()} ${selected ? "selected" : ""}`}
								style={{ color: tower.getColour() }}
							>
								{tower.getColourName()[0]}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}
