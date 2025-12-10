import {useEffect, useState} from "react";

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T|null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok!");
				}
				
				const result: T = await response.json();
				
				setData(result);
			}catch (e) {
				console.error(e);
				setError(e.message);
			}finally {
				setLoading(false);
			}
		}
		
		fetchData();
	}, [url]);
	
	return {data, error, loading};
}

export default useFetch;