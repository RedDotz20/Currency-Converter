import { useState } from "react";

export function Currency(props: { currencies: CurrencyType | {} }) {
	const [base, setBase] = useState(null);
	const [convertTo, setConvertTo] = useState(null);

	return (
		<form>
			<label htmlFor="base">Base</label>
			<select name="base" id="base">
				{Object.entries(props.currencies).map((value, key) => {
					return <option value={value[0]}>{value[0]}</option>;
				})}
			</select>

			<label htmlFor="convertTo">Convert To</label>
			<select name="convertTo" id="convertTo">
				{Object.entries(props.currencies).map((value) => {
					return <option value={value[0]}>{value[0]}</option>;
				})}
			</select>
		</form>
	);
}

export interface CurrencyType {
	string: number;
}
