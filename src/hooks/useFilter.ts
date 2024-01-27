import { useSearchParams } from "next/navigation";

const useFilter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const isSelected = ({ label, sortName }: { label: string; sortName: string }) => {
    return params.getAll(label).includes(sortName);
  };

  const updateFilter = ({ label, sortName }: { label: string; sortName: string }) => {
    if (isSelected({ label, sortName })) {
      params.delete(label, sortName);
      window.history.replaceState(null, "", `?${params.toString()}`);
      return;
    }

    params.append(label, sortName);
    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  const setKeywordFilter = (keyword: string) => {
    params.set("keyword", keyword);
    window.history.replaceState(null, "", `?${params.toString()}`);
  }

  return { isSelected, updateFilter, setKeywordFilter };
};

export default useFilter;
