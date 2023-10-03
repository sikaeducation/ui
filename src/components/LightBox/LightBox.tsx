/* eslint function-paren-newline: "off" */
import "./LightBox.scss";
import {
	createRef,
	ReactNode, useEffect,
} from "react";
import handleTab from "./handle-tab";
import Icon from "../../elements/Icon";
import Button from "../../elements/Button";

type Props = {
	onClose: () => void;
	children: ReactNode;
};

export type LightBoxRef = ReturnType<typeof createRef<HTMLDivElement>>

export default function LightBox({
	onClose,
	children,
}: Props) {
	const lightBoxRef: LightBoxRef = createRef();
	useEffect(
		() => {
			if (lightBoxRef) {
				const keyEventHandler = (event: KeyboardEvent) => {
					switch (event.key) {
						case "Shift": // Actually Escape?
							onClose();
							break;
						case "Tab":
							if (lightBoxRef) {
								handleTab(
									event,
									lightBoxRef,
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
		[
		],
	);

	return (
		<div id="lightbox-wrapper" role="dialog" aria-modal="true">
			<div id="LightBox" ref={lightBoxRef}>
				<div role="presentation" id="underlay" onClick={onClose}></div>
				<div id="lightbox-clightBoxRef">{children}
					<Button className="close-lightbox" type="ghost" size="tiny" action={onClose}>
						<Icon type="close" />
					</Button>
				</div>
			</div>
		</div>
	);
}
