import { useState } from "react";
import { currencyInterface } from "../interface/currencyType";

export function Currency(props: currencyInterface) {
	const [base, setBase] = useState<number>(0);
	const [convertTo, setConvertTo] = useState<number>(0);
	const [value, setValue] = useState<number | null>(null);

	console.log("Base:", typeof base, "ConvertTo:", typeof convertTo);
	console.log(props.currencies);

	return (
		<>
			<h2>{base}</h2>
			<h2>{convertTo}</h2>
			<h1>{base * convertTo}</h1>
			<form>
				<label htmlFor="base">Base</label>
				<select
					name="base"
					id="base"
					onChange={(e) => setBase(parseFloat(e.target.value))}
				>
					{Object.entries(props.currencies).map((value, key) => {
						return <option value={value[1]}>{value[0]}</option>;
					})}
				</select>

				<label htmlFor="convertTo">Convert To</label>
				<select
					name="convertTo"
					id="convertTo"
					onChange={(e) => setConvertTo(parseFloat(e.target.value))}
				>
					{Object.entries(props.currencies).map((value) => {
						return <option value={value[1]}>{value[0]}</option>;
					})}
				</select>
			</form>
		</>
	);
}

// export interface CurrencyType {
// 	string: number;
// }
