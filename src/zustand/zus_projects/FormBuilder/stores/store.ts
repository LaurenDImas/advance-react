import {create} from "zustand";

interface FormFields {
    label: string;
    type: 'text' | 'number'| 'password' | 'textarea' | 'date' | 'file';
    value: string;
}

interface FormStoreState{
    formFields: FormFields[];
    addField: (field: FormFields) => void;
    removeField: (index: number) => void;
    updateField: (index: number, updatedField: FormFields) => void;
    resetForm: () => void;
}

const useFormStore = create<FormStoreState>((set) => ({
    formFields: [],
    
    addField: (field: FormFields) => set((state) => ({
        formFields: [...state.formFields, field]
    })),
    
    removeField: (index: number) => set((state) => ({
        formFields: state.formFields.filter((_, i) => i !== index)
    })),
    
    updateField: (index: number, updatedField: FormFields) => set((state) => ({
        formFields: state.formFields.map((field, i) =>
            i === index ? {...field, ...updatedField} : field)
    })),
    
    resetForm: () => set({ formFields: [] }),
}))

export default useFormStore;