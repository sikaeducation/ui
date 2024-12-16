import { Heading, Markdown, Tag, TextContent } from "@/index";
import "./PriceCard.scss";
import Button from "@/elements/Button";
import Badge from "@/components/Badge";

type Props = {
  heading: string;
  subheading: string;
  differentiator: string;
  body: string;
  price: {
    sale: string;
    full?: string;
    unit?: string;
  };
  button: {
    action: () => void;
    text: string;
  };
};

export default function PriceCard(
  { heading, subheading, body, button, price, differentiator }: Props,
) {
  return (
    <section className="PriceCard">
      <header>
        <Badge type="primary">{differentiator}</Badge>
        <Heading level={2}>{heading}</Heading>
        <TextContent className="subheading">{subheading}</TextContent>
        <div className="pricing">
          <span className="sale">{price.sale}</span>
          {price.full && <del>{price.full}</del>}
          <span className="unit">{price.unit}</span>
        </div>
      </header>
      <div className="content">
        <Markdown content={body.trim()} />
        <Button type="primary" action={button.action}>{button.text}</Button>
      </div>
    </section>
  );
}
