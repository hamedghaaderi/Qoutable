import { useQuery } from "@tanstack/react-query";
import config from "../api/api.config";
import { useSearchParams } from "react-router-dom";

const useSearch = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("author") ?? "";
  const pageParam = searchParams.get("page") ?? "1";

  const { data, isLoading , isError } = useQuery({
    queryKey: [queryParam,pageParam],
    queryFn: () => {
      return config
        .get(`/search/authors?query=${queryParam}&page=${pageParam}`)
        .then((res) => res);
    },
  });
  return { data, isLoading , isError , queryParam };
};

export default useSearch;
