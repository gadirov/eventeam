import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";
import { swrOptions } from "../const.ts";

export function useCategory() {
  const { data, error, isLoading } = useSWR(
    "categories/api/v1/categories/getAll",
    fetcher,
    swrOptions
  );
  return {
    data,
    error,
    isLoading,
  };
}
