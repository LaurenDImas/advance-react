import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const fetchData = async (id: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.data;
}

const RefatchInteval = () => {
    const [currentId, setCurrentId] = useState(1);

    const {data, error, isLoading} = useQuery({
        queryKey: ["todo", currentId],
        queryFn: () => fetchData(currentId),
        refetchInterval: 5000,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentId((prev) => prev < 200 ? prev + 1 : 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={() => setCurrentId((prev) => prev < 200 ? prev + 1 : 1)}>Next</button>
        </div>
    )
}

export default RefatchInteval