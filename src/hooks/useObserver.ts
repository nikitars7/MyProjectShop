import { useEffect, useRef } from "react";
import { Status } from "../store/slices/productSlice";

export const useObserver = (
  ref,
  isLoading: Status,
  canLoad: boolean,
  callback: () => void
) => {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (isLoading === "loading") {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    const elemIsVisible = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(elemIsVisible);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
