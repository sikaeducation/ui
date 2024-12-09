import "./Profile.scss";
import Portrait from "@/components/Portrait";
import TextContent from "@/elements/TextContent";
import classNames from "classnames";

type Props = {
  imageUrl: string;
  altText: string;
  copy: string;
  attribution: string;
  style: "profile" | "testimonial";
};

export default function Profile(
  { imageUrl, altText, copy, attribution, style = "profile" }: Props,
) {
  const portraitStyle = style === "testimonial" ? "medium" : "large";

  return (
    <div
      className={classNames({
        Profile: true,
        profile: style === "profile",
        testimonial: style === "testimonial",
      })}
    >
      <Portrait
        src={imageUrl}
        alt={altText}
        style={portraitStyle}
      />
      <div className="copy">
        <TextContent style="accent">
          {copy}
        </TextContent>
        {attribution &&
          <p className="attribution">—{attribution}</p>}
      </div>
    </div>
  );
}
