import { useRef } from "react";

export const useFocus = () => {
  const inputElement = document.createElement("input");
  const elementRef = useRef<HTMLInputElement>(inputElement);
  const setFocus = () => {
    if (elementRef.current) {
      elementRef.current.focus();
    }
  };

  return [elementRef, setFocus] as const;
};
