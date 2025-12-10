import useForm from "./hooks/useForm.ts";
import {type ChangeEvent, useState} from "react";
import useDebounce from "./hooks/useDebounce.ts";
import usePrevious from "./hooks/usePrevious.ts";
import useLocalStorage from "./hooks/useLocalStorage.ts";
import useFetch from "./hooks/useFetch.ts";

const CustomHooksChallengeApp = () => {
    const {values, handleChange, handleSubmitted} = useForm({
        username: "",
        email: "",
    })
    
    const [inputValue, setInputValue] = useState('')
    const debouncedInput = useDebounce(inputValue, 2000)
    const previous = usePrevious(inputValue)
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    
    const [storedValue, setValue] =useLocalStorage('username', '')

    const {data, loading, error} =  useFetch('https://jsonplaceholder.typicode.com/posts')
    
    return (
        <div className="p-4">
            <h1>Custom Hooks In Action</h1>
            <div className="mb-4">
                <h2 className="text-xl">Form Handling Example</h2>
                <form onSubmit={handleSubmitted}>
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        className="border p-2 mb-2"
                        placeholder="Username"
                    />
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="border p-2 mb-2"
                        placeholder="Email"
                    />
                    <button
                        type="submit"
                        className="border p-2"
                        onClick={handleSubmitted}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="mb-4">
                <h2 className="text-2xl">Debounced Input Example</h2>
                <input
                    type="text"
                    className="border p-2"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={"Type to debounce"}
                />
                
                <p>Debounced Value: {debouncedInput}</p>
                <p>Previous Value: {previous}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-xl">Local Storage Example</h2>
                <input
                    type="text"
                    className="border p-2"
                    placeholder="Local Storage Set"
                    value={storedValue}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <h2 className="text-xl">Fetch Data Example</h2>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>
        </div>
    )
}
export default CustomHooksChallengeApp
