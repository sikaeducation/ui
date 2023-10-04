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
	faPlus,
	faMagnifyingGlass,
	faEyeSlash,
	faEye,
	faExpand,
} from "@fortawesome/free-solid-svg-icons";
import {
	FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";

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
	plus: <FontAwesomeIcon icon={faPlus} className="plus" title="Plus" />,
	close: <FontAwesomeIcon icon={faClose} className="close" title="Close" />,
	search: <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" title="search" />,
	view: <FontAwesomeIcon icon={faEye} className="view-icon" title="view" />,
	"no-view": <FontAwesomeIcon icon={faEyeSlash} className="no-view-icon" title="no view" />,
	expand: <FontAwesomeIcon icon={faExpand} className="expand-icon" title="expand" />,
} as const;

type IconType = keyof typeof icons;

type Props = {
	type: IconType;
	action?: () => void;
};


export default function Icon(props: Props) {
	const {
		action, type,
	} = props;
	return <span
		className={classNames({
			Icon: true,
			interactive: !!action,
		})}
		onClick={action
			? () => action()
			: undefined}
	>{icons[type]}</span>;
}
