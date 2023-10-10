import "./MarkdownPreviewer.scss";
import Markdown from "../Markdown";
import TextArea from "../../elements/TextArea";
import Button from "../../elements/Button";
import Icon from "../../elements/Icon";
import { useState } from "react";
import LightBox from "../LightBox";

type Props = {
  id: string;
  label: string;
  content: string;
  updateContent: (content: string) => void;
};

export default function MarkdownPreviewer({
  id,
  label,
  content,
  updateContent,
}: Props) {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isLightBoxing, setIsLightBoxing] = useState(false);

  return (
    <div className="MarkdownPreviewer">
      <header>
        <ul className="actions-bar">
          {content ? (
            <>
              <li>
                <Button type="ghost" action={() => setIsLightBoxing(true)}>
                  <Icon type="expand" />
                </Button>
              </li>
              <li>
                {isPreviewing ? (
                  <Button type="ghost" action={() => setIsPreviewing(false)}>
                    <Icon type="no-view" />
                  </Button>
                ) : (
                  <Button type="ghost" action={() => setIsPreviewing(true)}>
                    <Icon type="view" />
                  </Button>
                )}
              </li>
            </>
          ) : <li className="placeholder" aria-role="presentation">&nbsp;</li>}
        </ul>
      </header>
      <TextArea
        id={id}
        updateValue={updateContent}
        label={label}
        value={content}
      />

      <div className="preview-actions">
        {content && (
          <>
            <p className="preview-subheading">
              {isPreviewing ? "Preview:" : <>&nbsp;</>}
            </p>
          </>
        )}
      </div>
      {isLightBoxing && (
        <LightBox onClose={() => setIsLightBoxing(false)}>
          <div id="markdown-lightbox-wrapper">
            <Markdown content={content} />
          </div>
        </LightBox>
      )}
      {isPreviewing
        ? <Markdown content={content} />
        : <div>&nbsp;</div> /* Reduce UI thrash */
      }
    </div>
  );
}
