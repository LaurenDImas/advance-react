import React, {useState} from "react";

const ControlledForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subscribe: false,
        message: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value, type} = e.target;
        
        const finalValue =
            type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : value;
        
        setFormData(prev => ({
            ...prev,
            [name]: finalValue
        }));
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border mt-2"
            />
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border mt-2"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border mt-2"
            />
            
            <label>
                <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                />
            </label>
            
            <textarea
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className="border mt-2"
            ></textarea>
            
            <button type="submit" className="border-2">Submit</button>
        </form>
    )
}
export default ControlledForm
