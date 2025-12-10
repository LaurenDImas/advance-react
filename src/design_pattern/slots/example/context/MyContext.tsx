import {createContext, type Dispatch, type ReactNode, type SetStateAction, useState} from "react";

interface MyContextType {
	value: string;
	setValue: Dispatch<SetStateAction<string>>
}

// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext<MyContextType|undefined>(undefined)

export const MyProvider = ({children}: {children: ReactNode}) => {
	const [value, setValue] = useState("Hello from context");
	
	return (
		<MyContext.Provider value={{value, setValue}}>{children}</MyContext.Provider>
	)
};
