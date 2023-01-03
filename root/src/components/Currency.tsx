import { useState, useEffect } from "react";
import { valueInterface } from "../interface/currencyType";
import Result from "./Result";
import numberFormat from "../utils/numberFormat";

function Currency({ currencies }: any) {
	const [{ fromValue, toValue }, setValues] = useState<{
			fromValue: string;
			toValue: string;
		}>({
			fromValue: currencies[31].currency, //? USD currency (default)
			toValue: currencies[23].currency, //? PHP currency (default)
		}),
		[result, setResult] = useState<number>(0),
		[amount, setAmount] = useState<number>(1);

	const findValIndex = (selectedValue: string) =>
		currencies.findIndex(
			(index: { currency: string }) => index.currency === selectedValue
		);

	useEffect(() => {
		const fromValIndex: number = currencies[findValIndex(fromValue)].value;
		const toValIndex: number = currencies[findValIndex(toValue)].value,
			convertedResult: number = amount * (fromValIndex * toValIndex);
		setResult(() => convertedResult);
	}, [amount, fromValue, toValue]);

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(parseInt(event.target.value));
	};

	const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setValues({
			...{ fromValue, toValue },
			[event.target.name]: event.target.value,
		});
	};

	return (
		<>
			<div className="flex flex-col text-white mx-8">
				<label htmlFor="convertValue">Enter Value to Convert</label>
				<input
					className="text-black px-2 py-1"
					min="1"
					type="number"
					id="amount"
					name="amount"
					onChange={handleInput}
				/>
			</div>

			<div className="mx-8 w-20">
				<label htmlFor="fromValue" className="text-white">
					FROM
				</label>
				<select
					name="fromValue"
					id="fromValue"
					onChange={handleSelection}
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
					onChange={handleSelection}
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

			{result > 1 && (
				<Result
					resultCurrency={currencies[findValIndex(toValue)].currency}
					resultValue={result}
				/>
			)}
		</>
	);
}

export default Currency;
