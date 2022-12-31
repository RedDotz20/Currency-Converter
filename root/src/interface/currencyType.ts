export interface currencyInterface {
	currencies: { string: number } | {};
}

export interface valueInterface {
	amount: GLfloat;
	fromValue: number;
	toValue: number;
}

export interface optionInterface {
	currKeys: string[];
	currValues: any[];
}
