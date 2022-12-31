import numberFormat from "../utils/numberFormat";

interface ResultInterface {
	resultCurrency: string;
	resultValue: number;
}

function Result({ resultCurrency, resultValue }: ResultInterface) {
	const formatedResult = numberFormat(resultCurrency, resultValue);
	return (
		<div className="text-white font-semibold my-4">
			<h1>RESULTS</h1>
			<h2>{formatedResult}</h2>
		</div>
	);
}

export default Result;
