import { useQuery } from "@tanstack/react-query";
import config from "../api/api.config";
import useFilter from "../store/filters";

const useRandomQoute = () => {
  const { qoute, tag, author } = useFilter((state: any) => state);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["random"],
    queryFn: () => {
      return config.get(`/random?tags=${tag}&author=${author}&query=${qoute}`).then((res) => res);
    },
    gcTime: 0,
    refetchInterval: false,
  });
  return { data, isLoading, isError };
};

export default useRandomQoute;
