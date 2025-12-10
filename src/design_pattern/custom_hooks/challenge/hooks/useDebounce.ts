import {useEffect, useState} from "react";

const useDebounce = <T>(value: T, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    
    useEffect(() => {
        console.log("Effect run. Value:", value);

        const handler = setTimeout(() => {
            console.log("Timeout executed:", value);
            setDebouncedValue(value);
        }, delay);

        return () => {
            console.log("Cleanup - clearTimeout for:", value);
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;