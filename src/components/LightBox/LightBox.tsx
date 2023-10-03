import "./LightBox.scss";
import type { ReactNode } from "react";

type props = {
	onClose: () => void;
	children: ReactNode;
};

export default function LightBox({
	onClose,
	children,
}: props) {
	return (
		<div id="lightbox-wrapper">
			<div id="LightBox">
				<div role="presentation" id="underlay" onClick={onClose}></div>
				<div id="lightbox-content">{children}</div>
			</div>
		</div>
	);
}
