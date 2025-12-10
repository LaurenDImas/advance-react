// import SingleTodoLoader from "./components/SingleTodoLoader.tsx";
// import TodoList from "./components/TodoList.tsx";
// import ResourceLoader from "./shared/ResourceLoader.tsx";
// import TodoList from "./components/TodoList.tsx";
// import CommentsList from "./components/CommentsList.tsx";

import TodoList from "./components/TodoList.tsx";
import axios from "axios";
import DataSource from "./shared/DataSource.tsx";
import CommentsList from "./components/CommentsList.tsx";

const getServerData = (url: string) => async () => {
    const response = await axios.get(url);
    return response.data;
}

const ForRefactor = () => {
    return (
        <>
            <DataSource
                getDataFunc={getServerData("https://jsonplaceholder.typicode.com/todos/1")}
                resourceName='todo'
            >
                <TodoList todo={null} />
            </DataSource>
            <DataSource
                getDataFunc={getServerData("https://jsonplaceholder.typicode.com/comments/1")}
                resourceName='comment'
            >
                <CommentsList comment={null} />
            </DataSource>
            
            {/*<ResourceLoader*/}
            {/*    resourceUrl="/todos/2"*/}
            {/*    resourceName="todo"*/}
            {/*>*/}
            {/*    <TodoList todo={null} />*/}
            {/*</ResourceLoader>*/}
            {/*<hr />*/}
            {/*<br />*/}
            {/*<ResourceLoader*/}
            {/*    resourceUrl="/comments/1"*/}
            {/*    resourceName="comment"*/}
            {/*>*/}
            {/*    <CommentsList comment={null}/>*/}
            {/*</ResourceLoader>*/}
            {/*<SingleTodoLoader todoId={2}>*/}
            {/*    <TodoList todos={null} />*/}
            {/*</SingleTodoLoader>*/}
            {/*<SingleTodoLoader todoId={3}>*/}
            {/*    <TodoList todos={null} />*/}
            {/*</SingleTodoLoader>*/}
            {/*<SingleTodoLoader todoId={4}>*/}
            {/*    <TodoList todos={null} />*/}
            {/*</SingleTodoLoader>*/}
        </>
    )
}
export default ForRefactor
