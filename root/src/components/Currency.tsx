export interface CurrencyType {
	string: number;
}

export function Currency(props: { currencies: CurrencyType | {} }) {
	return (
		<table>
			<thead>
				<tr>
					<td>Currency</td>
					<td>Value</td>
				</tr>
			</thead>
			<tbody>
				{Object.entries(props.currencies).map((value) => {
					return (
						<tr>
							<td>{value[0]}</td>
							<td>{value[1]}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
