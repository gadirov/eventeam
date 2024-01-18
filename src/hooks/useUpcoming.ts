import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";
import { swrOptions } from "../const.ts";

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