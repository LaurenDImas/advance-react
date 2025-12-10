import {useEffect, useState} from "react";

const WithoutTanStackQuery = () => {
	const [id, setId] = useState(1);
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		let rc = false; // Race Condition
		
		const handleFetch = async () => {
			setIsLoading(true);
			setError(null);
			
			try {
				const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
				if (rc) return;
				
				if (!res.ok) {
					throw new Error(`Error fetching todos for ${res.statusText}`);
				}
				
				const result =await res.json();
				setData(result);
				
			}catch (e: any){
				setError(e.message);
			}finally {
				setIsLoading(false);
			}
		}
		
		handleFetch();
		
		return () => {
			console.log("hai");
			rc = true;
		}
		
	}, [id])
	
	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{data && <h1>{JSON.stringify(data)}</h1>}
			<button onClick={() => setId((prev) => prev + 1)}>Next</button>
		</div>
	)
}
export default WithoutTanStackQuery
