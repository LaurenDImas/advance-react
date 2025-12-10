import type {ReactNode} from "react";
import CardTitle from "./CardTitle.tsx";
import CardContent from "./CardContent.tsx";
import CardFooter from "./CardFooter.tsx";

const Card = ({children}: { children: ReactNode }) => {
	return (
		<div className=" rounded-lg shadow-lg w-[20rem] p-4 bg-white">
			{children}
		</div>
	)
}

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card
