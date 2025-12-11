import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    
    const {data, error, isLoading } =useQuery({
        queryKey: ["todos", currentPage],
        queryFn: async () => {
            const response  = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${pageSize}`);
            return response.data;
        }
    })
    
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...</h1>;
    
    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    }
    
    const handleNextPage = () => {
        setCurrentPage(prev => prev + 1);
    }
    
    return (
        <div>
            <h1>Todos</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            
            <div>
                
                <button className="bg-teal-500 mb-10 p-3 mr-2" onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                <button className="bg-teal-500 mb-10 p-3 mr-2" onClick={handleNextPage}>Next</button>
            </div>
        </div>
    )
}
export default Pagination
