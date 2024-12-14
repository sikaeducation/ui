import "./PriceCard.scss";
import Button from "@/elements/Button";

type Props = {};

export default function PriceCard({}: Props) {
  return (
    <section className="PriceCard">
      <header>
        <h3>Programming Lessons</h3>
      </header>
      <div>
        <p>Hey now</p>
      </div>
      <Button type="">Do it now</Button>
    </section>
  );
}
