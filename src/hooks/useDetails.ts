import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";

const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

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
