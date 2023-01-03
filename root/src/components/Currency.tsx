import { useState, useEffect } from "react";
import { valueInterface } from "../interface/currencyType";
// import Result from "./Result";

function Currency({ currencies }: any) {
	const [{ fromValue, toValue }, setValues] = useState<any>({
			fromValue: currencies[31].currency, //? USD currency
			toValue: currencies[23].currency, //? PHP currency
		}),
		[result, setResult] = useState<number>(0),
		[amount, setAmount] = useState<GLfloat>(1);

	const findValIndex = (selectedValue: string) =>
		currencies.findIndex(
			(index: { currency: string }) => index.currency === selectedValue
		);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const fromValIndex: number = currencies[findValIndex(fromValue)].value;
		const toValIndex: number = currencies[findValIndex(toValue)].value,
			convertedResult: string = (amount * fromValIndex * toValIndex).toFixed(4);
		setResult(() => parseFloat(convertedResult));
	};

	useEffect(() => {
		console.log(result);
	}, [handleSubmit]);

	const handleChange = (
		event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		setValues({
			...{ fromValue, toValue },
			[event.target.name]: event.target.value,
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
						defaultValue={fromValue}
						className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					>
						{currencies.map((values: { currency: string }, key: number) => {
							return (
								<option key={key} value={values.currency}>
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
						defaultValue={toValue}
						onChange={handleChange}
						className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					>
						{currencies.map((val: { currency: string }, key: number) => {
							return (
								<option key={key} value={val.currency}>
									{val.currency}
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
