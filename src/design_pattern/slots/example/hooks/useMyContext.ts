import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const useMyContext = () => {
	const context = useContext(MyContext)
	
	if (!context) {
		throw new Error('useMyContext must be used within a context');
	}
	
	return context;
}