import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config/axiosConfig.ts";

const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

const DetailView = () => {
  const params = useParams();
  const { data, error, isLoading } = useSWR(
    `/events-ms/api/v1/events/${params.detailviewid}`,
    fetcher,
    swrOptions
  );

  useEffect(() => {
    console.log(data)
  }, [data, error, isLoading]);

  return <Heading pt="100px">{params.detailviewid}</Heading>;
};

export default DetailView;
