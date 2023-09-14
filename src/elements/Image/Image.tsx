import "./Image.scss";

type Props = {
	src: string;
	alt: string;
};

export default function Image({ src, alt }: Props){
	return <img className="Image" alt={alt} src={src} />;
}
