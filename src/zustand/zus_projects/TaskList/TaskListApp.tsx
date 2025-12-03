import Sidebar from "./components/Sidebar.tsx";
import Main from "./components/Main.tsx";
import {useStore} from "./stores/store.ts";
import {MdMoreVert} from "react-icons/md";

const TaskListApp = () => {
    const {
        todos,
        editIndex,
        editText,
        dropdownIndex,
        handleEdit,
        handleUpdate,
        handleDropdownClick,
        deleteTodo,
        setEditIndex,
        setEditText,
    } = useStore();
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-5">
                <Main />
                
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4 ml-[2rem]">Todo List</h2>
                    
                    <ul className="list-disc pl-5">
                        {todos.map((todo, index) => (
                            <li
                                key={index}
                                className="mb-2 ml-[2rem]"
                            >
                                {editIndex === index ? (
                                    <div
                                        className="flex items-center"
                                    >
                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleUpdate(index)}
                                            className="flex items-center px-2 py-2 bg-green-800 text-white rounded-lg hover:bg-green-600 mr-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setEditIndex(null)}
                                            className="flex items-center px-2 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 mr-2"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="relative flex items-center justify-between">
                                        <div>
                                            <span className="mr-2">
                                                <strong>{todo.text}</strong>{" "}
                                                (List: {todo.list})
                                                Workspace: {todo.workspace}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center">
                                            <MdMoreVert
                                                className="cursor-pointer"
                                                size={24}
                                                onClick={() => handleDropdownClick(index)}
                                            />
                                            {dropdownIndex === index && (
                                                <div
                                                    className="absolute right-0 mt-2 bg-white  rounded shadow-lg"
                                                >
                                                    <button
                                                        onClick={() => handleEdit(index)}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                                                        Update
                                                    </button>
                                                    
                                                    <button
                                                        onClick={() => deleteTodo(index)}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TaskListApp
