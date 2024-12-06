import "./WordmarkList.scss";
import Wordmark from "@/elements/Wordmark/Wordmark";
import wordmarks from "@/elements/Wordmark/logos/index";

type Wordmark = keyof typeof wordmarks;

type Props = {
  wordmarks: Wordmark[];
};

export default function WordmarkList({ wordmarks }: Props) {
  const Wordmarks = wordmarks.map((wordmark) => (
    <Wordmark subject={wordmark} size="small" style="monochrome" />
  ));

  return (
    <div className="WordmarkList">
      {Wordmarks}
    </div>
  );
}
