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
	useEffect(() => {
		const keyEventHandler = (event: { key: string }) => {
			switch (event.key) {
				case "escape":
					onClose();
					break;
				case "tab":
					onClose();
					break;
			}
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
