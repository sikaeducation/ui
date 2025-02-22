import Logo, { technologies } from "@/elements/Logo";
import "./TechnologyList.scss";

type Props = {
  technologies: typeof technologies;
};

export default function TechnologyList({ technologies }: Props) {
  return (
    <ul className="TechnologyList">
      {technologies.map((technology) => (
        <li>
          <Logo size="regular" subject={technology} style="monochrome" />
        </li>
      ))}
    </ul>
  );
}
