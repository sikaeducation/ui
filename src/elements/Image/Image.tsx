import classNames from "classnames";
import {
	ComponentType, MouseEventHandler, ReactNode, useState,
} from "react";
import "./Image.scss";

type Props = {
	src: string;
	alt: string;
	attribution?: string;
	Lightbox?: ComponentType<{
		children: ReactNode,
		onClose: () => void;
	}>;
};

export default function Image({
	src, alt, attribution, Lightbox,
}: Props) {
	const [
		isLightboxed,
		setIsLightBoxed,
	] = useState(false);

	const potentialAttribution = attribution
		&& <p className="attribution">{attribution}</p>;

	const getImage = (clickHandler?: MouseEventHandler) => (
		<img
			onClick={clickHandler}
			alt={alt}
			src={src}
		/>
	);

	const ImageElement = Lightbox && isLightboxed
		? <Lightbox onClose={() => setIsLightBoxed(false)}>
			<div className={classNames({
				"image-wrapper": true,
				"lightboxed": isLightboxed,
			})}>
				{
					/* Swallow click, prevent bubbling */
					getImage((event) => event.stopPropagation())
				}
				{potentialAttribution}
			</div>
		</Lightbox>
		: <div className="image-wrapper">
			{
				Lightbox
					? <>
						{getImage(() => setIsLightBoxed(true))}
						{potentialAttribution}
					</>
					: <>
						{getImage()}
						{potentialAttribution}
					</>
			}
		</div>;

	return (
		<div className="Image">
			{ImageElement}
		</div>
	);
}
