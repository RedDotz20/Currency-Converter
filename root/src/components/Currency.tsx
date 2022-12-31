import { useState } from "react";
import {
	currencyInterface,
	optionInterface,
	valueInterface,
} from "../interface/currencyType";
import Result from "./Result";

function Currency({ currencies }: currencyInterface) {
	const options: optionInterface = {
		currKeys: Object.keys(currencies),
		currValues: Object.values(currencies),
	};
	const [result, setResult] = useState<number>(0);
	const [values, setValues] = useState<valueInterface>({
		amount: 1,
		fromValue: 31, //? USD Currency
		toValue: 23, //? PHP Currency
	});

	const { currKeys, currValues } = options;
	const { amount, fromValue, toValue } = values;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const fixedResult = amount * currValues[fromValue] * currValues[toValue];
		const convertedResult = fixedResult.toFixed(4);
		setResult(() => parseFloat(convertedResult));
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		setValues({
			...values,
			[event.target.name]: parseFloat(event.target.value),
		});
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
					<label htmlFor="fromValue" className="text-white">
						FROM
					</label>
					<select
						name="fromValue"
						id="fromValue"
						onChange={handleChange}
						defaultValue={values.fromValue}
						className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					>
						{options != (undefined || null) &&
							options.currKeys.map((values, key) => {
								return (
									<option key={key} value={key}>
										{values}
									</option>
								);
							})}
					</select>
				</div>

				<div className="mx-8 w-20">
					<label htmlFor="toValue" className="text-white">
						TO
					</label>
					<select
						name="toValue"
						id="toValue"
						defaultValue={values.toValue}
						onChange={handleChange}
						className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					>
						{options != (undefined || null) &&
							options.currKeys.map((values, key) => {
								return (
									<option key={key} value={key}>
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

			{result > 1 && (
				<Result resultCurrency={currKeys[toValue]} resultValue={result} />
			)}
		</>
	);
}

export default Currency;
