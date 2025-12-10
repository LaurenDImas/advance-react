import {Children, cloneElement, isValidElement, type ReactNode, useEffect, useState} from "react";
import axios from "axios";

interface Todo {
    id: number,
    title: string,
    completed: string,
}

interface SingleTodoLoaderProps{
    todoId: number,
    children: ReactNode
}

interface ChildComponentProps{
    todos: Todo | null
}

const SingleTodoLoader = ({todoId, children}: SingleTodoLoaderProps) => {
    const [todos, setTodos] = useState<Todo | null>(null);
    
    useEffect(() => {
        (async () => {
            const response = await axios.get<Todo>(
                `https://jsonplaceholder.typicode.com/todos/${todoId}`
            );
            setTodos(response.data)
        })()
        
    }, [])
    
    return (
        <div>
            {Children.map(children, (child: ReactNode) => {
                if (isValidElement<ChildComponentProps>(child)) {
                    return cloneElement(child, {todos})
                }
                
                return child
            })}
        </div>
    )
}
export default SingleTodoLoader
