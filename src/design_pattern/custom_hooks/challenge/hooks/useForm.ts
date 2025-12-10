import React, {useState} from "react";

const useForm =<T>(initialValue: T) => {
    const [values, setValues] = useState<T>(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmitted = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(values);
    }

    return {
        values,
        handleChange,
        handleSubmitted
    }
}

export default useForm;