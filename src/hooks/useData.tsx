import { api } from "../requests/api";
import { Data } from "../interfaces/data.interface";
import { useQuery } from "react-query";
import { sleep } from "../utils/sleep";

const useDataApi = async (): Promise<Data[]> => {
  await sleep(2);
  const { data } = await api.get<Data[]>("/todos");
  return data;
};

export const useData = () => {
  const dataQuery = useQuery({
    queryKey: ["data"],
    queryFn: useDataApi,
  });

  return {
    dataQuery,
  };
};
