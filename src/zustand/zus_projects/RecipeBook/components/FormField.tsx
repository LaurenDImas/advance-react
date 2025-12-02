import React from "react";

interface FormFieldProps{
    field: {
        label: string;
        type: 'text' | 'number'| 'password' | 'textarea' | 'date' | 'file';
        value: string;
    },
    index: number;
    onUpdate: (
        index: number,
        updatedField: {
            label: string;
            type: 'text' | 'number'| 'password' | 'textarea' | 'date' | 'file';
            value: string;
        }
    ) => void;
    onRemove: (index: number) => void;
}
const FormField: React.FC<FormFieldProps> = ({
    field,
    index,
    onUpdate,
    onRemove,
}) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
        onUpdate(index, {
            ...field,
            value: e.target.value,
        })
    }
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdate(index, {
            ...field,
            value: e.target.files ?
                Array.from(e.target.files)
                    .map(file => file.name)
                    .join(", ")
                : "",
        })
    }
    return (
        <div
            className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md space-y-4"
        >
            <label className="block mb-2 text-lg font-medium text-gray-700">{field.label}</label>
            
            {
                field.type === 'textarea' ?
                (
                    <textarea
                        value={field.value}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2
                        focus:ring-blue-500"
                    />
                ) :
                field.type === 'file' ?
                (
                    <input type="file" onChange={handleFileChange}  className="border border-gray-300 rounded-lg w-full"/>
                ) :
                (
                    <input
                        type={field.type}
                        value={field.value}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2
                        focus:ring-blue-500"
                    />
                )
            }
            
            <button
                type="button"
                onClick={() => onRemove(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600
                                    focus:outline-none focus:ring-2 focus:ring-red-500"
            >Remove</button>
        </div>
    )
}
export default FormField
