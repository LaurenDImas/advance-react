import {type ChangeEvent, type FormEvent, useState} from "react";

const useForm = (initialValues: {[key:string]: string}) => {
    const [values, setValues] = useState(initialValues);
    const [submitted, setSubmitted] = useState<boolean>(false);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setValues(prev => ({...prev, [name]: value}));
    }
    
    const handleSubmit = (callback: () => void) => (event: FormEvent) => {
        event.preventDefault();
        setSubmitted(true);
        callback();
    }
    
    return {values, submitted, handleChange, handleSubmit};
}

export default useForm;