
interface Todo {
    id: number;
    title: string;
    body: string;
}

interface TodoListProps {
    todo: Todo | null;
}

const TodoList = (
    {todo}: TodoListProps
) => {
    const {id, title} = todo || {};
    
    return (
        <div>
            {id}: {title}
        </div>
    )
}
export default TodoList
