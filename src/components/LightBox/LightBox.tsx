/* eslint function-paren-newline: "off" */
import "./LightBox.scss";
import {
	createRef,
	forwardRef,
	MutableRefObject,
	ReactNode, useEffect,
} from "react";

type Props = {
	onClose: () => void;
	children: ReactNode;
};

type ModalRef = ReturnType<typeof createRef<HTMLDivElement>>

const handleTab = (event: KeyboardEvent, modalRef: ModalRef) => {
	const focusableModalElements = modalRef.current?.querySelectorAll<HTMLDivElement>("a[href], button, textarea, input[type=\"text\"], input[type=\"radio\"], input[type=\"checkbox\"], select") || [];
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

const LightBoxRef = forwardRef<HTMLDivElement, Props>(({
	children, onClose,
}, divRef) => {
	useEffect(
		() => {
			if (divRef) {
				const keyEventHandler = (event: KeyboardEvent) => {
					console.log(
						"key was",
						event.key,
					);
					switch (event.key) {
						case "Shift": // Actually Escape?
							onClose();
							break;
						case "Tab":
							if (divRef) {
								handleTab(
									event,
									divRef as MutableRefObject<HTMLDivElement>,
								);
							}
							break;
					}
				};
				document.addEventListener(
					"keydown",
					keyEventHandler,
				);
				return () => document.removeEventListener(
					"keydown",
					keyEventHandler,
				);
			}
		},
		[],
	);

	return (
		<div id="LightBox" ref={divRef}>
			<div role="presentation" id="underlay" onClick={onClose}></div>
			<div id="lightbox-content">{children}</div>
		</div>
	);
});

export default function LightBox({
	onClose,
	children,
}: Props) {
	const modalRef: ModalRef = createRef();

	return (
		<div id="lightbox-wrapper" role="dialog" aria-modal="true">
			<LightBoxRef onClose={onClose} children={children} ref={modalRef} />
		</div>
	);
}
