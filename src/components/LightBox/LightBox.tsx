import "./LightBox.scss";
import {
	createRef,
	ReactNode, useEffect,
} from "react";

type props = {
	onClose: () => void;
	children: ReactNode;
};

type ModalRef = ReturnType<typeof createRef<HTMLFormElement>>

const handleTab = (event: KeyboardEvent, modalRef: ModalRef) => {
	const focusableModalElements = modalRef?.current?.querySelectorAll<HTMLFormElement>("a[href], button, textarea, input[type=\"text\"], input[type=\"radio\"], input[type=\"checkbox\"], select") || [];
	const firstElement = focusableModalElements?.length > 0
		? focusableModalElements[0]
		: undefined;
	const lastElement
		= focusableModalElements?.length > 0
			? focusableModalElements[focusableModalElements.length - 1]
			: undefined;

	if (!event.shiftKey && document.activeElement !== firstElement) {
		firstElement?.focus();
		event.preventDefault();
	}

	if (event.shiftKey && document.activeElement !== lastElement) {
		lastElement?.focus();
		event.preventDefault();
	}
};

export default function LightBox({
	onClose,
	children,
}: props) {
	const modalRef: ModalRef = createRef<HTMLFormElement>();

	useEffect(() => {
		const keyEventHandler = (event: KeyboardEvent) => {
			switch (event.key) {
				case "escape":
					onClose();
					break;
				case "tab":
					handleTab(event, modalRef);
					break;
			}
		};
		document.addEventListener("keydown", keyEventHandler);
		return () => document.removeEventListener("keydown", keyEventHandler);
	}, []);


	return (
		<div id="lightbox-wrapper">
			<div id="LightBox">
				<div role="presentation" id="underlay" onClick={onClose}></div>
				<div id="lightbox-content">{children}</div>
			</div>
		</div>
	);
}
