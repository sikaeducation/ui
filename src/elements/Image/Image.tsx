import "./Image.scss";

type Props = {
	src: string;
	alt: string;
	attribution?: string;
};

export default function Image({ src, alt, attribution }: Props) {
	return (
		<div className="Image">
			<div className="image-wrapper">
				<img alt={alt} src={src} />
				{
					attribution && <p className="attribution">Photo by Kyle Coberly</p>
				}
			</div>
		</div>
	);
}
