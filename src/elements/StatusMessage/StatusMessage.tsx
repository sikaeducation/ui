import "./StatusMessage.scss";

const messages = {
  "network-error": {
    message: "There's problem with the network. Are you online?",
  },
  "no-data": {
    message: "There's no data to show yet!",
  },
  "general-error": {
    message: "Something went wrong but it wasn't your fault. Try refreshing!",
  },
} as const;

type Props = {
  type: keyof typeof messages;
};

export default function StatusMessage({ type }: Props) {
  return <div className="StatusMessage">{messages[type].message}</div>;
}
