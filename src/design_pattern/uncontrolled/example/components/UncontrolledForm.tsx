import {type FormEvent, useRef} from "react";

const UncontrolledForm = () => {
    const nameInput = useRef<HTMLInputElement>(null);
    const ageInput = useRef<HTMLInputElement>(null);
    const hairColorInput = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (nameInput.current && ageInput.current && hairColorInput.current) {
            console.log(nameInput.current)
            console.log(ageInput.current)
            console.log(hairColorInput.current)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={nameInput}
                type="text"
                className="border"
                name="name"
                placeholder="Name"
            />
            <input
                ref={ageInput}
                type="number"
                className="border"
                name="age"
                placeholder="Age"
            />
            <input
                ref={hairColorInput}
                type="text"
                className="border"
                name="hairColor"
                placeholder="Hair Color"
            />
            <input
                type="submit"
                className="border"
                value="Submit"
            />
        </form>
    )
}
export default UncontrolledForm
