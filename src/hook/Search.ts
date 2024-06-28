import { useQuery } from "@tanstack/react-query";
import config from "../api/api.config";
import { useSearchParams } from "react-router-dom";

const useSearch = () => {
  const [searchParams] = useSearchParams();
  const queryParam: string = searchParams.get("author") ?? "";

  const { data, isLoading , isError } = useQuery({
    queryKey: [queryParam],
    queryFn: () => {
      return config
        .get(`/search/authors?query=${queryParam}`)
        .then((res) => res);
    },
  });
  return { data, isLoading , isError };
};

export default useSearch;
