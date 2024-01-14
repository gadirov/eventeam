import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";

const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

export function useCategory() {
  const { data, error, isLoading } = useSWR(
    "eventcategory/eventcategory/getEventCount",
    fetcher,
    swrOptions
  );
  return {
    data,
    error,
    isLoading,
  };
}
