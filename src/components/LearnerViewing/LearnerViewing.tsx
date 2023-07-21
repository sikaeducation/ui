import { format } from "date-fns";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { programContext } from "../../contexts/program";
import useIndicator from "../../hooks/use-indicator";
import "./LearnerViewing.scss";

type props = {
  performance: postedViewPerformance;
};
const formatTime = (dateTime: string) => format(new Date(dateTime), "p");

export default function LearningViewing({ performance }: props) {
  const { postsBySlug } = useContext(programContext);
  const getIndicator = useIndicator();
  const post = postsBySlug[performance.postSlug];
  const path = post?.path || "";
  const title = post.label?.short || post.label?.full || "";

  const indicator = getIndicator(performance);

  return (
    <div className="LearnerViewing">
      <p className="description">
        {" "}
        {performance.userId} read <Link to={path}>{title}</Link>.{" "}
      </p>
      <ul className="meta">
        <li>
          <time>{formatTime(performance.createdAt)}</time>
        </li>
      </ul>
      <span className="evaluation-status">{indicator}</span>
    </div>
  );
}
