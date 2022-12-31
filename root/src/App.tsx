// import Currency from "./components/Currency";
import useFetchAPI from "./hooks/useFetchAPI";

export default function App() {
	const { data, error, loading } = useFetchAPI();
	if (loading)
		return <h1 className="text-white grid place-items-center">Loading</h1>;
	if (error) return error;

	console.log(data);

	return (
		<div className="p-8 h-full flex flex-col justify-center text-center">
			<h1 className="text-white font-bold tracking-widest mb-8">
				Currency Converter
			</h1>
			{/* <Currency currencies={data} /> */}
		</div>
	);
}
