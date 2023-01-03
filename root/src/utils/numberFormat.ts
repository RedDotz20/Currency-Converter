function numberFormat(currency: any, value: any) {
	const result = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currency,
	}).format(value);
	return result;
}

export default numberFormat;
