import { useQuery } from "@tanstack/react-query";
import config from "../api/api.config";

const useTag = () => {
  const { data } = useQuery({
    queryKey: ["tags"],
    queryFn: () => {
      return config.get("/tags").then((res) => res);
    },
    gcTime: Infinity,
    refetchInterval: false,
  });
  return { data };
};

export default useTag;