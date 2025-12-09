import useFetch from "../hooks/useFetch.tsx";

interface Todo{
    id: string;
    title: string
}

const WithCustomHook = () => {
    const [data, loading, error] = useFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos/")
    
    if (loading) {
        return <div>Loading...</div>
    }
    
    if (error) return <div>Error: {error}</div>
    
    return (
        <div>
            {data && data.map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </div>
    )
}
export default WithCustomHook
