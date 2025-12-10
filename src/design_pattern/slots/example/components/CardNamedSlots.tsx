import type {ReactNode} from "react";

interface CardNamedSlotsProps {
	cardTitle: ReactNode,
	cardContent: ReactNode,
	cardButton: ReactNode,
}
const CardNamedSlots = ({
	cardTitle,
	cardContent,
	cardButton,
}: CardNamedSlotsProps) => {
	return (
		<div>
			{cardTitle}
			{cardContent}
			{cardButton}
		</div>
	)
}
export default CardNamedSlots
