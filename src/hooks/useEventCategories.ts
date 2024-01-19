import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";
import { swrOptions } from "../const.ts";

export function useEventCategories() {
  const { data, error, isLoading } = useSWR(
    "properties-ms/property/parent-key/categories",
    fetcher,
    swrOptions
  );
  return {
    data,
    error,
    isLoading,
  };
}