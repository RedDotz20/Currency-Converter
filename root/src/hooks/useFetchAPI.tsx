import { useState, useEffect } from "react";
import axios from "axios";

interface keyValuesInterface {
	currency: string;
	value: number;
}

interface errorDataInterface {
	message: string;
	code: number;
	details: object;
}

export default function useFetchAPI() {
	const [data, setData] = useState<keyValuesInterface[]>([]);
	const [error, setError] = useState<errorDataInterface | unknown>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const baseURL = "https://api.freecurrencyapi.com/v1/latest";
				const APIKey = "gwRkxLlgKJx36K810uCTKfZjz8ZsLqnGDPqDp0FH";
				const response = await axios
					.get(baseURL, {
						headers: {
							apikey: APIKey,
						},
					})
					.then((response) => {
						setData(() =>
							Object.entries(response.data.data).map(([currency, value]) => ({
								currency: currency as string,
								value: value as number,
							}))
						);
					});
			} catch (err) {
				setError(err);
			} finally {
				setLoading(() => false);
			}
		}
		fetchData();
	}, []);

	return { data, error, loading };
}
