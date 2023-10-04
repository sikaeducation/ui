import classNames from "classnames";
import {
	MouseEventHandler, useState,
} from "react";
import "./Image.scss";
import LightBox from "../../components/LightBox";

type Props = {
	src: string;
	alt: string;
	attribution?: string;
	lightbox: boolean;
};

export default function Image({
	src, alt, attribution, lightbox = true,
}: Props){
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

	const ImageElement = isLightboxed
		? <LightBox onClose={() => setIsLightBoxed(false)}>
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
		</LightBox>
		: <div className="image-wrapper">
			{
				lightbox
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
