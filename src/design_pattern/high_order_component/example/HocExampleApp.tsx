// import {printProps} from "./utils/printProps.tsx";
// import TodoList from "./components/TodoList.tsx";
// import MyComponent from "./components/MyComponent.tsx";
// import {withLoading} from "./utils/withLoading.tsx";
// import {useEffect, useState} from "react";

// const TodoListWrapper = printProps(TodoList)
// const MyComponentWithLoading = withLoading(MyComponent);

import {withTodo} from "./utils/withTodo.tsx";
import TodoList from "./components/TodoList.tsx";

const TodoListWrapper = withTodo(TodoList, '2')

const HocExampleApp = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [data, setData] = useState("");
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         setData("Data Fetched")
    //         setIsLoading(false)
    //     }, 2000)
    // }, []);
    return (
        <>
            {/*<TodoListWrapper*/}
            {/*    title={"Todo"}*/}
            {/*    items={"hai"}*/}
            {/*/>*/}
            
            {/*<MyComponentWithLoading isLoading={isLoading} data={data} />*/}
            
            <TodoListWrapper />
        </>
    )
}
export default HocExampleApp
