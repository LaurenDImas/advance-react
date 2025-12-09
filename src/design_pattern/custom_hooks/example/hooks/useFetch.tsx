import {useEffect, useState} from "react";

const useFetch = <T,>(url: string)=> {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) throw new Error('Could not fetch response')
                const result = (await response.json()) as T
                setData(result)
            }catch (error) {
                console.error(error);
                setError(error)
                setData(null)
            } finally {
                setLoading(false)
            }
        }
        
        fetchData()
    }, [url]);
    
    return [data, loading, error];
}

export default useFetch;