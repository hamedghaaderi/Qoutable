import { useQuery } from "@tanstack/react-query";
import config from "../api/api.config";
import { useSearchParams } from "react-router-dom";

const useListAuthors = () => {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get("page") ?? "1";
  const orderParam = searchParams.get("order") ?? "asc";

  const { data, isLoading } = useQuery({
    queryKey: ["authors", pageParam, orderParam],
    queryFn: () => {
      return config
        .get(`/authors?page=${pageParam}&order=${orderParam}&limit=40`)
        .then((res) => res);
    },
  });
  return { data, isLoading };
};

export default useListAuthors;
