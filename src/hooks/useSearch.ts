import React, { useMemo, useState } from "react";
import useFilter from "./useFilter";
import { useSearchParams } from "next/navigation";

const useSearch = () => {
  const searchParams = useSearchParams();
  const prevKeyword = searchParams.get("keyword");
  const [keyword, setKeyword] = useState<string>(prevKeyword || "");
  const { setKeywordFilter } = useFilter();

  const debounce = <T extends any[]>(func: (...args: T) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: T) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        setKeywordFilter(term);
      }, 300),
    []
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setKeyword(value);
    debouncedSearch(value);
  };

  return { keyword, handleSearchChange };
};

export default useSearch;
