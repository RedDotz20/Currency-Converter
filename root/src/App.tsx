import { useState } from "react";
import "./App.scss";
// https://app.freecurrencyapi.com/dashboard

function getCurrencies() {
	fetch("https://api.freecurrencyapi.com/v1/latest", {
		headers: {
			apikey: "gwRkxLlgKJx36K810uCTKfZjz8ZsLqnGDPqDp0FH",
		},
	})
		.then((res) => res.json())
		.then((data) => console.log(data.data));
}

function App() {
	return (
		<div className="App">
			<button onClick={getCurrencies}>G E T C U R R E N C Y</button>
		</div>
	);
}

export default App;
