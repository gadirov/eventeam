import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";

const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

export function useDetails() {
  const { data, error, isLoading } = useSWR(
    "/recommended-ms/recently-viewed",
    fetcher,
    swrOptions
  );

  return {
    data,
    error,
    isLoading,
  };
}
