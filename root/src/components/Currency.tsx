import { useState } from "react";
import {
	currencyValues,
	optionInterface,
	valueInterface,
} from "../interface/currencyType";
import Result from "./Result";

export function Currency(props: { currencies: currencyValues }) {
	const [options, setOptions] = useState<optionInterface>({
		currKeys: Object.keys(props.currencies),
		currValues: Object.values(props.currencies),
	});
	const [result, setResult] = useState<number>(0);
	const [values, setValues] = useState<valueInterface>({
		amount: 1,
		from: options.currValues[31], //? USD Currency
		to: options.currValues[23], //? PHP Currency
	});

	const handleChange = (
		event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		setValues({
			...values,
			[event.target.name]: parseFloat(event.target.value),
		});
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const fixedResult = values.amount * values.from * values.to,
			convertedResult = fixedResult.toFixed(4);
		setResult(() => parseFloat(convertedResult));
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="flex justify-center">
				<div className="flex flex-col text-white mx-8">
					<label htmlFor="convertValue">Enter Value to Convert</label>
					<input
						className="text-black px-2 py-1"
						min="1"
						type="number"
						id="amount"
						name="amount"
						onChange={handleChange}
					/>
				</div>

				<div className="mx-8 w-20">
					<label htmlFor="from" className="text-white">
						FROM
					</label>
					<select
						name="from"
						id="from"
						onChange={handleChange}
						defaultValue={values.from}
						className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					>
						{options != (undefined || null) &&
							options.currKeys.map((values, key) => {
								return (
									<option key={key} value={options.currValues[key]}>
										{values}
									</option>
								);
							})}
					</select>
				</div>

				<div className="mx-8 w-20">
					<label htmlFor="to" className="text-white">
						TO
					</label>
					<select
						name="to"
						id="to"
						defaultValue={values.to}
						onChange={handleChange}
						className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					>
						{options != (undefined || null) &&
							options.currKeys.map((values, key) => {
								return (
									<option key={key} value={options.currValues[key]}>
										{values}
									</option>
								);
							})}
					</select>
				</div>

				<button
					type="submit"
					disabled={isNaN(values.amount) || values.amount < 1}
					className="p-2 w-40 rounded text-white bg-blue-600"
				>
					CONVERT
				</button>
			</form>

			{result > 1 && <Result>{result}</Result>}
		</>
	);
}
