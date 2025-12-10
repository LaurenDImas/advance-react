import type {ReactNode} from "react";

const ModalFooter = ({children}: {children: ReactNode}) => {
	return (
		<div className="mt-4 justify-end flex space-x-2">
			<div>{children}</div>
		</div>
	)
}
export default ModalFooter
