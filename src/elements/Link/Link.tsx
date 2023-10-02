import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import "./Link.scss";

type Props = {
	href: string;
	children: ReactNode | ReactNode[];
};

const InternalLink = ({
	href, children,
}: Props) => {
	return <a className="Link InternalLink" href={href} target="blank" rel="noreferrer">
		{children}
	</a>;
};

const ExternalLink = ({
	href, children,
}: Props) => {
	return <span className="Link">
		<a className="ExternalLink" href={href} target="blank" rel="noreferrer">
			{children}
		</a>
		&nbsp;
		<FontAwesomeIcon
			className="external-link-icon"
			icon={faExternalLinkAlt}
		/>
	</span>;
};

export default function Link({
	href, children,
}: Props){
	const isExternal = href?.match(/^(https?:)?\/\//) || href?.match(/^mailto:/);
	return isExternal
		? <ExternalLink href={href}>{children}</ExternalLink>
		: <InternalLink href={href}>{children}</InternalLink>;
}
