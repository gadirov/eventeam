import useSWR from "swr";
import { fetcher } from "../config/axiosConfig.ts";

const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

export function useUserDetails(id) {
    const { data, error, isLoading } = useSWR(
      `/profile-ms/profile/full/user/${id}`,
      fetcher,
      swrOptions
    );

    return{
        data,
        error,
        isLoading
    }
}  