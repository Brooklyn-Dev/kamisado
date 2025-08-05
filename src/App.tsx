import "./App.css";

function App() {
	return (
		<>
			<div>
				<h1>Kamisado</h1>
				<div className="board">
					{Array.from({ length: 64 }).map((_, i) => (
						<div key={i} className="square">
							{i}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
