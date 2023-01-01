import { useState } from "react";
import { valueInterface } from "../interface/currencyType";
import Result from "./Result";

function Currency({ currencies }: any) {
	const [result, setResult] = useState<number>(0);
	const [amount, setAmount] = useState<GLfloat>(1);
	const [values, setValues] = useState<valueInterface>({
		fromValue: 31, //? USD
		toValue: 23, //? PHP
	});

	const { fromValue, toValue } = values;
	console.table(values);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const fixedResult =
			amount * currencies[fromValue].value * currencies[toValue].value;
		const convertedResult = fixedResult.toFixed(4);
		setResult(() => parseFloat(convertedResult));
	};

	// console.log(currencies[fromValue].value);

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
						// defaultValue={currencies[fromValue]}
						className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					>
						{currencies.map((values: any, key: any) => {
							return (
								<option key={key} value={values[key]}>
									{values.currency}
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
						// defaultValue={values.toValue.value}
						onChange={handleChange}
						className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					>
						{currencies.map((values: any, key: any) => {
							return (
								<option key={key} value={values[key].currency}>
									{values.currency}
								</option>
							);
						})}
					</select>
				</div>

				<button
					type="submit"
					// disabled={isNaN(values.amount) || values.amount < 1}
					className="p-2 w-40 rounded text-white bg-blue-600"
				>
					CONVERT
				</button>
			</form>

			{/* {result > 1 && (
				<Result resultCurrency={currKeys[toValue]} resultValue={result} />
			)} */}
		</>
	);
}

export default Currency;
