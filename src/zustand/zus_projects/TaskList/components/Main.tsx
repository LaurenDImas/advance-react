import {useStore} from "../stores/store.ts";
import {FaPlus} from "react-icons/fa";

const Main = () => {
    const {
        lists,
        workspaces,
        selectedList,
        selectedWorkspace,
        todoText,
        setSelectedList,
        setSelectedWorkspace,
        setTodoText,
        handleAddTodo
    } = useStore();
    
    return (
        <div
            className="flex-1 p-6"
        >
            <div className="mb-4">
                <input
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <div className="mt-2 flex items-center gap-2">
                    <select
                        value={selectedList}
                        onChange={(e) => setSelectedList(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select List</option>
                        {lists?.map((item, index) => (
                            <option
                                key={index}
                                value={item.name}
                            >{item.emoji} {item.name}</option>
                        ))}
                    </select>
                    
                    <select
                        value={selectedWorkspace}
                        onChange={(e) => setSelectedWorkspace(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select List</option>
                        {workspaces?.map((item, index) => (
                            <option
                                key={index}
                                value={item.name}
                            >{item.emoji} {item.name}</option>
                        ))}
                    </select>
                    
                    <button
                        type="button"
                        onClick={handleAddTodo}
                        className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
                    >
                        <FaPlus className="mr-2"/> Add Todo
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Main
