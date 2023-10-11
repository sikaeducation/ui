import "./StatusMessage.scss";

const messages = {
  "network-error": {
    message: "There was a problem fetching this data.",
  },
  "no-data": {
    message: "There's no data to show yet!",
  },
} as const;

type Props = {
  type: keyof typeof messages;
};

export default function StatusMessage({ type }: Props) {
  return <div className="StatusMessage">{messages[type].message}</div>;
}
