import "./LightBox.scss";
import {
	KeyboardEventHandler,
	MouseEventHandler,
	ReactNode, useEffect,
} from "react";
import { Keyboard } from "@playwright/test";

type props = {
	onClose: () => void;
	children: ReactNode;
};

export default function LightBox({
	onClose,
	children,
}: props) {
	const keyListeners = {
		"escape": onClose,
		"tab": onClose,
	};

	useEffect(() => {
		const keyEventHandler: KeyboardEventHandler = (event) => {
			let handler: () => void;
			switch (event.key) {
				case "escape":
					handler = onClose;
					break;
				case "tab":
					handler = onClose;
					break;
				default:
					return;
			}
			handler();
		};

		document.addEventListener("keydown", keyEventHandler);
		return () => document.removeEventListener("keydown", keyEventHandler);
	});

	return (
		<div id="lightbox-wrapper">
			<div id="LightBox">
				<div role="presentation" id="underlay" onClick={onClose}></div>
				<div id="lightbox-content">{children}</div>
			</div>
		</div>
	);
}
