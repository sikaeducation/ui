import { useAuth0 } from "@auth0/auth0-react";
import { format } from "date-fns";
import { useContext } from "react";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import { programContext } from "../../contexts/program";
import useIndicator from "../../hooks/use-indicator";
import Markdown from "../ui/Markdown";
import LearnerQuestionEvaluable from "../LearnerQuestionEvaluable";
import "./LearnerQuestion.scss";

const formatTime = (dateTime: string) => format(new Date(dateTime), "p");

type props = {
  performance: evaluatedQuestionPerformance;
};

export default function LearnerQuestion({ performance }: props) {
  const { user } = useAuth0();
  const getIndicator = useIndicator();
  const role = (user && user["https://sikaeducation.com/role"]) || "";

  const { postsBySlug } = useContext(programContext);
  const post = postsBySlug[performance.payload?.originalPostSlug];
  const title = post.label?.short || post.label?.full || "";
  const { path } = post;

  const indicator = getIndicator(performance);

  return (
    <div className="LearnerQuestion">
      <p className="description">
        {performance.userId} submitted a question response from{" "}
        <Link to={path}>{title}</Link>
      </p>
      <ul className="meta">
        <li>
          <time>{formatTime(performance.createdAt)}</time>
        </li>
      </ul>
      <div className="question-prompt-response">
        <Markdown className="prompt" content={performance.payload.prompt} />
        {performance.evaluation && (
          <Markdown
            className="response"
            content={performance.payload.response}
          />
        )}
      </div>
      <span className="evaluation-status">{indicator}</span>
      {role === "coach" && !performance.evaluation && (
        <LearnerQuestionEvaluable performance={performance} />
      )}
      {performance.evaluation?.feedback && (
        <>
          <Gravatar
            className="evaluator-avatar"
            default="identicon"
            email={performance.evaluation.evaluatorId}
            size={40}
          />
          <Markdown
            className="evaluation-feedback"
            content={performance.evaluation.feedback || ""}
          />
        </>
      )}
    </div>
  );
}
