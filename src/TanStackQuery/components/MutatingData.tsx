import React, {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";

interface Todo{
    title: string;
    completed: boolean;
}

const postTodo = async (newTodo: Todo) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo)
    })
    
    if (!response.ok) throw new Error(response.statusText);
    
    return response.json();
}

const MutatingData = () => {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState<string>("");
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim() === "") return;
        mutate({title, completed: false})
        setTitle("")
    }
    
    const {mutate, error, status} = useMutation<Todo, Error, Todo>({
        mutationFn: postTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] })
        }
    })
    
    return (
        <div>
            <h1>Create New Todo</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="border"
                />
                <button type="submit" className="bg-black text-white">
                    {status === 'pending' ? 'Adding...' : 'Submit'}
                </button>
                
                {error && <h1>{error.message}</h1>}
                {status === 'success' && (<p>Successfully Added</p>)}
            </form>
        </div>
    )
}
export default MutatingData
