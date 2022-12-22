import { Currency } from "./components/Currency";
import useFetchAPI from "./hooks/useFetchAPI";

export default function App() {
	const { data, error, loading } = useFetchAPI();

	return (
		<div className="App">
			<Currency currencies={data} />
		</div>
	);
}
