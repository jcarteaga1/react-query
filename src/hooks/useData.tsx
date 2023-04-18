import { api } from "../requests/api";
import { Data } from "../interfaces/data.interface";
import { useQuery } from "@tanstack/react-query";

import { sleep } from "../utils/sleep";

const useDataApi = async (): Promise<Data[]> => {
  await sleep(1);
  const { data } = await api.get<Data[]>("/todos");
  return data;
};

export const useData = () => {
  const dataQuery = useQuery({
    queryKey: ["data"],
    queryFn: useDataApi,
    // tiempo que la data sera valida (fresh) antes de caer en cache y hacer la request cuando la pagina haga foco
    staleTime: 1000 * 60 * 60,

    // data inicial, initial data puede perdurar con el staleTime, placeholderData no
    /* initialData: [],
    placeholderData: [
      { userId: 1, id: 1, title: "delectus aut autem", completed: false },
      { userId: 1, id: 1, title: "delectus aut autem", completed: false },
    ] */
  });

  return {
    dataQuery,
  };
};
