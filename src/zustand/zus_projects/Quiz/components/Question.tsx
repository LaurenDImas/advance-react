import {useQuizStore} from "../stores/store.ts";
import {useEffect, useState} from "react";

const Question = () => {
    const {
        questions,
        currentQuestion,
        selectAnswer,
        answers,
        nextQuestion,
        prevQuestion,
        showScore,
        score,
        resetQuiz,
        shuffleQuiz
    } = useQuizStore();
    
    const [timer, setTimer] = useState<number>(10);
    
    useEffect(() => {
        if (timer <= 0) return;
        
        const interval = setInterval(() => {
            setTimer((s) => s - 1);
        }, 1000)
        
        return () => clearInterval(interval)
    }, [timer]);
    
    const question = questions[currentQuestion];
    const currentAnswer = answers[currentQuestion];
    
    const handleSelect = (optionIndex: number) => {
        selectAnswer(optionIndex);
    }
    
    const handleSubmit = () => nextQuestion();
    
    useEffect(() => {
        shuffleQuiz();
    }, []);
    
    if (showScore) {
        return (
            <div
                className="w-3/4 p-6"
            >
                <h2 className="text-2xl font-semibold">Your Score</h2>
                <p className="mt-4 text-lg">You Scored {score} out of {questions.length}</p>
                <button
                    onClick={resetQuiz}
                    className="mt-6 px-3 py-2 border rounded-md shadow-sm text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 mr-2"
                >Restart</button>
            </div>
        )
    }
    return (
        <div
            className="w-3/4 p-6"
        >
            <p className="mb-4">Time: {timer}</p>
            <h3 className="text-2xl font-semibold">{question.question}</h3>
            <div className="mt-4">
                {question.options.map((option, index) => (
                    <div
                        key={index}
                        className="my-2"
                    >
                        <label
                            className="flex items-center"
                        >
                            <input
                                type="radio"
                                name={`question-${currentQuestion}`}
                                checked={currentAnswer === index}
                                onChange={() => handleSelect(index)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                {currentQuestion > 0 && (
                    <button
                        onClick={prevQuestion}
                        className="px-3 py-2 border rounded-md shadow-sm text-white bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 mr-2"
                    >Prev</button>
                )}
                
                {currentQuestion < questions.length - 1 ? (
                    <button
                        onClick={nextQuestion}
                        className="px-3 py-2 border rounded-md shadow-sm text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 mr-2"
                    >Next</button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="px-3 py-2 border rounded-md shadow-sm text-white bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 mr-2"
                    >Submit</button>
                )}
            </div>
        </div>
    )
}
export default Question
