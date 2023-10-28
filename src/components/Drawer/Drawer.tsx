import classNames from "classnames";
import { ReactNode } from "react";
import Icon from "@/elements/Icon";
import "./Drawer.scss";

type Props = {
  children: ReactNode;
  close: () => void;
  modal?: boolean;
};

export default function Drawer({ children, close, modal = false }: Props) {
  const handleClick = () => {
    if (modal) {
      close();
    }
  };
  const handleKey = (event: unknown) => {
    if (event instanceof KeyboardEvent && event.code === "Escape") {
      close();
    }
  };
  return (
    <div
      role="dialog"
      aria-modal={modal}
      aria-describedby="drawer-content"
      aria-label={`${modal && "modal "}drawer`}
      className={classNames({
        Drawer: true,
        modal,
      })}
      onClick={handleClick}
      onKeyDown={handleKey}
    >
      <div className="content" id="drawer-content">
        <button
          className="close-button"
          type="button"
          autoFocus
          onClick={() => close()}
        >
          <Icon type="close" />
        </button>
        {children}
      </div>
    </div>
  );
}
