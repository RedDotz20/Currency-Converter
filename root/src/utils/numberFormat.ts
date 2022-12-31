function numberFormat(currency: string, value: number) {
	const result = new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: currency,
	}).format(value);
	return result;
}

export default numberFormat;
