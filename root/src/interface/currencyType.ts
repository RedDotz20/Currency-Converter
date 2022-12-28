export interface currencyInterface {
	currencies: { string: number } | {} | string;
}

export interface valueInterface {
	amount: GLfloat;
	from: number;
	to: number;
}
