import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";

const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

export function useUpcoming(selectValue) {
  const { data, error, isLoading } = useSWR(
    `/recommended-ms/${selectValue}`,
    fetcher,
    swrOptions
  );
  return {
    data,
    error,
    isLoading,
  };
}