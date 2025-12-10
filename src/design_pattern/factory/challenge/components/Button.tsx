import type {ButtonProps} from "../utils/component-types.ts";

const Button = ({label, onClick, disabled}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	)
}
export default Button
