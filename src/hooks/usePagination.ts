import { useMemo } from "react";

export const usePagination = (totalPages: number) => {
  const pageCountArray = useMemo(() => {
    const pagesArray: number[] = [];
    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
  }, [totalPages]);
  return pageCountArray;
};
