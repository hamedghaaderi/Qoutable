import { useQuery } from "@tanstack/react-query";
import config from "../api/api.config";

const useDocumentCount = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["document-count"],
    queryFn: () => {
      return config.get("/info/count").then((res) => res);
    },
    gcTime: Infinity,
    refetchInterval: false,
  });
  return { data, isLoading, isError };
};

export default useDocumentCount;
