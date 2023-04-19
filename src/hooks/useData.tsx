import { api } from "../requests/api";
import { Data, DataRequest } from "../interfaces/data.interface";
import { useQuery } from "@tanstack/react-query";

import { sleep } from "../utils/sleep";
import { useState } from "react";

const useDataApi = async ({ page }: any): Promise<Data[]> => {
  await sleep(1);

  const params = new URLSearchParams();
  params.append("offset", page.toString());
  params.append("limit", "5");

  const { data } = await api.get<DataRequest>("/pokemon", { params });
  return data.results;
};

export const useData = () => {
  const [page, setPage] = useState<number>(1);

  const dataQuery = useQuery({
    queryKey: ["data", page],
    queryFn: () => useDataApi({ page }),
    // tiempo que la data sera valida (fresh) antes de caer en cache y hacer la request cuando la pagina haga foco
    staleTime: 1000 * 60 * 60,

    // data inicial, initial data puede perdurar con el staleTime, placeholderData no
    /* initialData: [],
    placeholderData: [
      { userId: 1, id: 1, title: "delectus aut autem", completed: false },
      { userId: 1, id: 1, title: "delectus aut autem", completed: false },
    ] */
  });

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  const prevPage = () => {
    setPage((page) => page - 1);
  };

  return {
    // Properties
    dataQuery,

    //Getters
    page,

    //Methods
    prevPage,
    nextPage,
  };
};
