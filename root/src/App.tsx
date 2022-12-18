import { useEffect, useState } from "react";
import { Currency } from "./components/Currency";
import { CurrencyType } from "./components/Currency";
import axios from "axios";
// https://app.freecurrencyapi.com/dashboard

export default function App() {
	const [currencies, setCurrencies] = useState<CurrencyType | {}>({});

	const getCurrencies = async () => {
		const baseURL = "https://api.freecurrencyapi.com/v1/latest";
		const response = await axios.get(baseURL, {
			headers: {
				apikey: "gwRkxLlgKJx36K810uCTKfZjz8ZsLqnGDPqDp0FH",
			},
		});
		setCurrencies(() => response.data.data);
	};

	useEffect(() => {
		getCurrencies();
	}, []);

	return (
		<div className="App">
			<button onClick={() => getCurrencies()}>G E T C U R R E N C Y</button>
			<Currency currencies={currencies} />
		</div>
	);
}
