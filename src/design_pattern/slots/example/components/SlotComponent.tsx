import type {ReactNode} from "react";
import {useMyContext} from "../hooks/useMyContext.ts";

export const SlotComponent = ({children}: {children: ReactNode}) => {
	const {value} = useMyContext();
	return (
		<div>
			<h3>Context Value: {value}</h3>
			<div>{children}</div>
		</div>
	);
}

export default SlotComponent;