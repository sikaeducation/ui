import type {
	LightBoxRef,
} from "./LightBox";

export default function(event: KeyboardEvent, lightBoxRef: LightBoxRef) {
	const focusableModalElements = lightBoxRef.current?.querySelectorAll<HTMLDivElement>("a[href], button, textarea, input[type=\"text\"], input[type=\"radio\"], input[type=\"checkbox\"], select") || [];
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
