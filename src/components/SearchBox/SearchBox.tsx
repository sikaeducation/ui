import "./SearchBox.scss";
import Icon from "@/Icon";
import Button from "@/Button";
import { FormEventHandler, KeyboardEventHandler, useState } from "react";
import { useFocus } from "@/hooks/use-focus";
import classNames from "classnames";

type Props = {
  className?: string;
  id: string;
  updateSearchTerm: (newValue: string) => void;
  searchTerm: string;
  size: "small" | "medium" | "large";
  action: (searchTerm: string) => void;
};

export default function SearchBox({
  id,
  searchTerm,
  updateSearchTerm,
  className = "",
  size,
  action,
}: Props) {
  const [focused, setFocused] = useState(false);
  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === "Space") {
      setFocused(true);
    }
  };
  {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      action(searchTerm);
    };
    const [inputRef, setInputFocus] = useFocus();
    return (
      <form
        className={classNames({
          SearchBox: true,
          focused,
          large: size === "large",
          medium: size === "medium",
          small: size === "small",
        })}
        onSubmit={handleSubmit}
      >
        <input
          id={id}
          name={id}
          type="search"
          value={searchTerm}
          onChange={(event) => updateSearchTerm(event.target.value)}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          className={className}
          ref={inputRef}
        />
        {searchTerm ? (
          <Button type="primary">
            <Icon type="search" />
          </Button>
        ) : (
          <div
            className="search-wrapper"
            id={`${id}-search-icon`}
            aria-label="search"
            onClick={() => {
              setInputFocus();
            }}
            onKeyDown={handleKeyDown}
            role="search"
          >
            <Icon type="search" />
          </div>
        )}
      </form>
    );
  }
}
