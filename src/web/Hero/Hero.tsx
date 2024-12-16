import Badge from "@/components/Badge";
import WordmarkList from "@/web/WordmarkList";
import "./Hero.scss";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="Hero">
      <div className="hero-wrapper">
        <p className="tagline">Engineering education</p>
        <p className="subheading">
          Sika Education is personalized software engineering training through
          structured activities with feedback
        </p>
        <ul className="badges">
          <li>
            <Badge type="light">Good</Badge>
          </li>
          <li>
            <Badge type="light">Cheap</Badge>
          </li>
          <li>
            <Badge type="light">Fast!</Badge>
          </li>
        </ul>
        <div className="clients">
          <p>Trusted by:</p>
          <WordmarkList
            wordmarks={[
              "ford",
              "pluralsight",
              "liberty-mutual",
              "nyc-public-schools",
              "name-dot-com",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
