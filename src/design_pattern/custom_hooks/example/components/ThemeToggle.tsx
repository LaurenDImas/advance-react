import {useLocalStorage} from "../hooks/useLocalStorage.tsx";

const ThemeToggle = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    
    const toggleTheme =  () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }
    return (
        <div style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#333" : "#fff",
            padding: "20px"
        }}>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Button</button>
        </div>
    )
}
export default ThemeToggle
