import "./Hero.scss";

type Props = {};

export default function Hero({ }: Props) {
  return (
    <div className="Hero">
      <p className="tagline">Tagline goes here</p>
      <p className="subheading">Do the thing that helps you do the thing</p>
    </div>
  );
}
