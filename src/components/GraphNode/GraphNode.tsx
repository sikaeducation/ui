import {
	Link, Node as NodeType, RawNode,
} from "./types";
import classnames from "classnames";
import "./GraphNode.scss";

type Props = {
	node: NodeType;
	links: Link[];
	zoomTo: (node: RawNode) => void;
}

const nodeDiameter = 3;
const criticalNodeDiameter = 4;
type NodeState = "open" | "opening" | "closed" | "complete" | "in_progress"

// eslint-disable-next-line max-statements
export default function GraphNode({
	node, links, zoomTo,
}: Props){
	const {
		id, complete, in_progress, critical,
	} = node;
	const formattedId = id.replace(/\s/g, "-");

	const feederNodes = links
		.filter((link) => link.target.id === node.id)
		.map((link) => link.source);

	let nodeState: NodeState;
	if (complete){
		nodeState = "complete";
	} else if (in_progress){
		nodeState = "in_progress";
	} else if (feederNodes.every((node) => (
		node.complete || feederNodes.length === 0
	))){
		nodeState = "open";
	} else if (feederNodes.some((node) => node.complete)){
		nodeState = "opening";
	} else {
		nodeState = "closed";
	}

	return (
		<g
			id={formattedId}
			className={classnames({
				Node: true,
				open: nodeState === "open",
				opening: nodeState === "opening",
				closed: nodeState === "closed",
				complete: nodeState === "complete",
				"in-progress": nodeState === "in_progress",
				critical: critical,
			})}
			onClickCapture={() => zoomTo(node)}
		>
			{
				node.critical
					? <use
						width={criticalNodeDiameter}
						height={criticalNodeDiameter}
						href="#outlined-circle"
						x={node.x - criticalNodeDiameter / 2}
						y={node.y - criticalNodeDiameter / 2}
					/>
					: <use
						width={nodeDiameter}
						height={nodeDiameter}
						href="#circle"
						x={node.x - nodeDiameter / 2}
						y={node.y - nodeDiameter / 2}
					/>
			}
			<text
				className="label"
				textAnchor="middle"
				x={node.x}
				y={node.y + 4}
			>{id}</text>
		</g >
	);
}
