import { useState } from "react";
import { currencyInterface, valueInterface } from "../interface/currencyType";

export function Currency(props: currencyInterface) {
	const [result, setResult] = useState<number>(0);
	const [values, setValues] = useState<valueInterface>({
		amount: 0,
		from: 0,
		to: 0,
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
		setResult(() => values.amount * values.from * values.to);
	};

	console.log("result", result);
	console.log("from", values.from, "to", values.to);
	console.log("amount", values.amount);

	return (
		<form onSubmit={handleSubmit} className="flex justify-center">
			{/* Amount value */}
			<div className="flex flex-col text-white mx-8">
				<label htmlFor="convertValue">Enter Value to Convert</label>
				<input
					className="text-black px-2 py-1"
					min="1"
					type="number"
					id="amount"
					name="amount"
					value={values.amount}
					onChange={handleChange}
				/>
			</div>

			{/* From Value */}
			<div className="mx-8 w-20">
				<label htmlFor="base" className="text-white">
					FROM
				</label>
				<select
					name="from"
					id="from"
					onChange={handleChange}
					value={values.from}
					className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				>
					{Object.entries(props.currencies).map((value, key) => {
						return (
							<option key={key} value={value[1]}>
								{value[0]}
							</option>
						);
					})}
				</select>
			</div>

			{/* To Value */}
			<div className="mx-8 w-20">
				<label htmlFor="convertTo" className="text-white">
					TO
				</label>
				<select
					name="to"
					id="to"
					value={values.to}
					onChange={handleChange}
					className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal placeholder:text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				>
					{Object.entries(props.currencies).map((value, key) => {
						return (
							<option key={key} value={value[1]}>
								{value[0]}
							</option>
						);
					})}
				</select>
			</div>

			<button
				type="submit"
				disabled={false}
				className="p-2 w-40 rounded text-white bg-blue-600"
			>
				CONVERT
			</button>
		</form>
	);
}
