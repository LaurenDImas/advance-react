import {useQuizStore} from "../stores/store.ts";
import {FaCheckCircle} from "react-icons/fa";

const Sidebar = () => {
    const {questions,spesificQuestion, answers} = useQuizStore();
    
    return (
        <div
            className="w-1/4 bg-gray-100 p-4"
        >
            <h2 className="text-xl font-bold mb-4">Quiz Progress</h2>
            
            <ul className="flex flex-wrap gap-4">
                {questions.map((_, index) => (
                    <li
                        key={index}
                        className="mb-2 flex-items-center"
                        onClick={() => spesificQuestion(index)}
                    >
                        
                        <FaCheckCircle className={`mr-2 ${
                            answers[index] ? "text-blue-500" : "text-gray-400"
                        }`} />
                        
                        <span>{index + 1}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Sidebar
