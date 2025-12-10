import React from 'react'
import type {ModalProps} from "../utils/component-types.ts";

const Modal = ({header, content, footer}: ModalProps) => {
	return (
		<div>
			<h2>{header}</h2>
			<p>{content}</p>
			<footer>{footer}</footer>
		</div>
	)
}
export default Modal
