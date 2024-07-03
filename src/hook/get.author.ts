import { useQuery } from "@tanstack/react-query";
import config from "../api/api.config";
import { useLocation } from "react-router-dom";

const useGetAuthor = () => {
  const location = useLocation();
  const slug = location.pathname.split("/").pop();

  const { data, isLoading, isError } = useQuery({
    queryKey: [slug],
    queryFn: () => {
      return config.get(`/authors/slug/${slug}`).then((res) => res);
    },
  });
  return { data, isLoading, isError };
};

export default useGetAuthor;
