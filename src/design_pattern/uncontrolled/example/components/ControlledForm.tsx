import {useEffect, useState} from "react";

const ControlledForm = () => {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [hairColor, setHairColor] = useState<string>('');
    const [nameInputError, setNameInputError] = useState<string | null>(null);
    
    useEffect(() => {
        if (name.length < 3) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setNameInputError('Name should be at least 3 characters long');
        } else {
            setNameInputError(null);
        }
    }, [name]);
    
    return (
        <form>
            {nameInputError && <p className="text-red-600">{nameInputError}</p>}
            <input
                type="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border mt-2"
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(+e.target.value)}
                className="border mt-2"
            />
            <input
                type="text"
                name="hairColor"
                placeholder="Hair Color"
                value={hairColor}
                onChange={(e) => setHairColor(e.target.value)}
                className="border mt-2"
            />
            
            <button>Submit</button>
        </form>
    )
}
export default ControlledForm
