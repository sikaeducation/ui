/* eslint-disable */
/* @ts-nocheck */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Graph.scss";
import { runSimulation } from "@sikaeducation/sika-graph";

type Props = {
  nodes: any; //RawNode[];
  links: any; //RawLink[];
  groups: any; //Group[];
  options: any; //Options;
  currentFilter: string;
};

// eslint-disable-next-line max-statements
export default function Graph({
  nodes,
  links,
  groups,
  options,
  currentFilter,
}: Props) {
  const {
    // groups: graphGroups,
    nodes: graphNodes,
  } = runSimulation({
    nodes,
    links,
    groups,
    options,
    currentFilter,
  });

  console.log(nodes);
  return (
    <>
      {graphNodes.map((node: any) => (
        <circle
          key={node.id}
          fill="black"
          stroke="black"
          cx={node.x}
          cy={node.y}
          r="1"
        />
      ))}
    </>
  );
}
