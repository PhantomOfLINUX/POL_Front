import { RefObject, useEffect } from "react";

function useOutsideClick<T extends HTMLElement>(
    ref: RefObject<T>, 
    callback: (
        name:"solution" | "practice" | "level", 
        checked:boolean
    ) => void,name:"solution" | "practice" | "level",
    openCheck:boolean
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)&&openCheck) {
        callback(name,false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback,name,openCheck]);
}

export default useOutsideClick;
