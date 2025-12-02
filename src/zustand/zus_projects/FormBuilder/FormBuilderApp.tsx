import useFormStore from "./stores/store.ts";
import React, {useState} from "react";
import FormField from "../RecipeBook/components/FormField.tsx";

interface NewField {
    label: string;
    type: 'text' | 'number'| 'password' | 'textarea' | 'date' | 'file';
    value: string;
}

const FormBuilderApp = () => {
    const {formFields, addField, removeField, updateField, resetForm} = useFormStore();
    const [newField, setNewField] = useState<NewField>({
        label: "",
        type: "text",
        value: "",
    });
    
    const handleAddField = () => {
        addField(newField);
        setNewField({
            label: "",
            type: "text",
            value: ""
        })
    }
    
    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setNewField((prev) =>
            ({...prev, [name]: value}));
    }
    
    const handleFieldUpdate = (
        index: number,
        updatedField: NewField) => {
        updateField(index, updatedField);
    }
    
    const handleFieldRemove = (index: number) => removeField(index);
    return (
        <div
            className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
        >
            <h1 className="text-2xl font-bold mb-4 text-center">Form Builder</h1>
            
            <div className="flex flex-col mb-6 space-y-3">
                <input
                    type="text"
                    name="label"
                    placeholder="Label"
                    value={newField.label}
                    onChange={handleFieldChange}
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2
                        focus:ring-blue-500"
                    
                />
                
                <select
                    name="type"
                    value={newField.type}
                    onChange={handleFieldChange}
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2
                        focus:ring-blue-500"
                >
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="textarea">Textarea</option>
                    <option value="date">Date</option>
                    <option value="file">File</option>
                </select>
                
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={handleAddField}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Add Field
                    </button>
                    
                    
                    <button
                        type="button"
                        onClick={resetForm}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600
                                    focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Reset Field
                    </button>
                </div>
            </div>
            
            <form>
                {formFields.map((field, index) => (
                    <FormField
                        key={index}
                        field={field}
                        index={index}
                        onUpdate={handleFieldUpdate}
                        onRemove={handleFieldRemove}
                    />
                ))}
            </form>
            <ul>
                {formFields.map((field, index) => (
                    <li key={index}>
                        {field.label} : {field.value}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FormBuilderApp
