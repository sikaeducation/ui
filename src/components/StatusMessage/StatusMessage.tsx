import "./StatusMessage.scss";

type MessageId = "network-error";

type Props = {
	type: MessageId;
};

const messages = {
	"network-error": {
		message: "There was a problem fetching this data.",
	},
	"no-data": {
		message: "There's no data to show yet!",
	},
} as const;

export default function StatusMessage({
	type,
}: Props) {
	return (
		<div className="StatusMessage">
			{messages[type].message}
		</div>
	);
}
