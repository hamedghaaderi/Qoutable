import { useQuery } from "@tanstack/react-query";
import config from "../api/api.config";

const useRandomQoute = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["random"],
    queryFn: () => {
      return config.get("/random").then((res) => res);
    },
    gcTime: 0,
    refetchInterval: false,
  });
  return { data, isLoading, isError };
};

export default useRandomQoute;
