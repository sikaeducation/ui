import classNames from "classnames";
import { KeyboardEventHandler, useState } from "react";
import "./Image.scss";
import LightBox from "@/components/LightBox";

type Props = {
  src: string;
  alt: string;
  attribution?: string;
  lightbox?: boolean;
};

export default function Image({
  src,
  alt,
  attribution,
  lightbox = true,
}: Props) {
  const [isLightboxed, setIsLightBoxed] = useState(false);

  const $attribution = attribution && (
    <p className="attribution">{attribution}</p>
  );

  const getImage = (clickHandler: () => void) => {
    const handleKeyDown: KeyboardEventHandler = (event) => {
      if (["Enter", "Space"].includes(event.key)) {
        setIsLightBoxed(true);
      }
    };
    return (
      <img
        onClick={clickHandler}
        onKeyDown={handleKeyDown}
        alt={alt}
        src={src}
      />
    );
  };

  const ImageElement = isLightboxed
    ? (
      <LightBox onClose={() => setIsLightBoxed(false)}>
        <div
          className={classNames({
            "image-wrapper": true,
            lightboxed: isLightboxed,
          })}
        >
          <>
            {
              /* Swallow click, prevent bubbling */
              getImage(() => event?.stopPropagation())
            }
            {$attribution}
          </>
        </div>
      </LightBox>
    )
    : (
      <div className="image-wrapper">
        {lightbox
          ? (
            <>
              {getImage(() => setIsLightBoxed(true))}
              {$attribution}
            </>
          )
          : (
            <>
              {getImage(() => event?.stopPropagation())}
              {$attribution}
            </>
          )}
      </div>
    );

  return <div className="Image">{ImageElement}</div>;
}
