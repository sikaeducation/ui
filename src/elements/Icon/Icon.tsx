import "./Icon.scss";
import {
	faBookOpen,
	faCheck,
	faCheckCircle,
	faClipboardCheck,
	faClose,
	faMinus,
	faQuestion,
	faTimes,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconType =
	| "accepted"
	| "pending"
	| "rejected"
	| "clear"
	| "confident"
	| "unclear"
	| "deferred"
	| "checkmark"
	| "article"
	| "close"
	| "search";

type Props = {
	type: IconType;
};

const icons = {
	accepted:
		<FontAwesomeIcon
			icon={faClipboardCheck}
			className="accepted"
			title="Your latest submission was accepted!"
		/>,
	pending:
		<FontAwesomeIcon
			icon={faQuestion}
			className="pending"
			title="Your latest submission is waiting to be evaluated"
		/>,
	rejected:
		<FontAwesomeIcon
			icon={faTimes}
			className="rejected"
			title="Your latest submission needs more work"
		/>,
	clear:
		<FontAwesomeIcon
			icon={faCheck}
			className="clear"
			title="You read this and indicated that it was clear to you"
		/>,
	confident:
		<FontAwesomeIcon
			icon={faCheckCircle}
			className="confident"
			title="You read this and indicated that you were confident about it."
		/>,
	unclear:
		<FontAwesomeIcon
			icon={faTimes}
			className="unclear"
			title="You read this and indicated that it was unclear to you"
		/>,
	deferred:
		<FontAwesomeIcon
			icon={faMinus}
			className="deferred"
			title="A new submission was created before this was evaluated"
		/>,
	checkmark:
		<FontAwesomeIcon icon={faCheck} className="checkmark" title="Checkmark" />,
	article:
		<FontAwesomeIcon icon={faBookOpen} className="article" title="Article" />,
	close: <FontAwesomeIcon icon={faClose} className="close" title="Close" />,
	search: <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" title="search" />,
} as const;

export default function Icon({ type }: Props) {
	return <span className="Icon">{icons[type]}</span>;
}
