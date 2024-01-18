import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";
import { swrOptions } from "../const.ts";
export function useFilterData() {
  const { data, error, isLoading } = useSWR(
    "/events-ms/api/v1/events/filter?",
    fetcher,
    swrOptions
  );

  return {
    data,
    error,
    isLoading,
  };
}
