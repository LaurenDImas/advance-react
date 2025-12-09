interface Todo{
    id: number;
    title: string;
    completed: string;
}

interface TodoListProps{
    todo: Todo | null
}

const TodoList = ({todo}: TodoListProps) => {
    const {id, title} = todo || {};
    return (
        <div>
            <p>id: {id}</p>
            <p>title: {title}</p>
        </div>
    )
    
}
export default TodoList
