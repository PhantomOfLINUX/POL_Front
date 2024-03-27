import { RefObject, useEffect } from "react";

function useOutsideClick<T extends HTMLElement>(
    ref: RefObject<T>, 
    openToggle: React.Dispatch<React.SetStateAction<boolean>>,
    openCheck:boolean
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)&&openCheck) {
        openToggle(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, openToggle,openCheck]);
}

export default useOutsideClick;
