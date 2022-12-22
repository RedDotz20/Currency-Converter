import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchAPI() {
	const [data, setData] = useState<{ string: number } | {}>({});
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const baseURL = "https://api.freecurrencyapi.com/v1/latest";
				const response = await axios.get(baseURL, {
					headers: {
						apikey: "gwRkxLlgKJx36K810uCTKfZjz8ZsLqnGDPqDp0FH",
					},
				});
				setData(() => response.data.data);
			} catch (error) {
				setError(() => error);
			} finally {
				setLoading(() => false);
			}
		}
		fetchData();
	}, []);

	return { data, error, loading };
}
