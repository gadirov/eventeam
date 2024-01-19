import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";
import { swrOptions } from "../const.ts";

export function useDetails() {
  const { data, error, isLoading } = useSWR(
    "/events-ms/api/v1/events/premium",
    fetcher,
    swrOptions
  );
  return {
    data,
    error,
    isLoading,
  };
}
