import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"


const fetchTodos = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    return response.data;
}

const fetchPosts = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return response.data;
}

const FethMultipleQueries = () => {
    const [currentTodoId, setCurrentTodoId] = useState(1);
    const [currentPostId, setCurrentPostId] = useState(1);

    const results = useQueries({
        queries: [
            {
                queryKey: ['todos'],
                queryFn: fetchTodos
            },
            {
                queryKey: ['posts'],
                queryFn: fetchPosts
            }
        ]
    })

    const [todosQuery, postsQuery] = results;
    
    if (todosQuery.isLoading || postsQuery.isLoading ) return <h1>Loading...</h1>;
    
    if (todosQuery.error || postsQuery.error){
        return (
            <div>
                An error occurred while fetching posts.
            </div>
        )
    }

    const todosData = todosQuery.data;
    const postsData = postsQuery.data;
    
    return (
        <div>
            <h1>Todo</h1>
            <pre>{JSON.stringify(todosData.find((todo: any) => todo.id === currentTodoId ))}</pre>
            
            
            <h1>Posts</h1>
            <pre>{JSON.stringify(postsData.find((todo: any) => todo.id === currentPostId ))}</pre>
            
            <button></button>
        </div>
    )
}

export default FethMultipleQueries