/** @format */

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useToast } from "../../context";

/** @format */
export const useAxios = ({
  method = "get",
  url,
  property = null,
  body = null,
  headers = null,
}) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState("");
  const { setLoading } = useToast();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios({ method, url, body, headers });
        setResponse(property ? data[property] : data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url, property, headers, body]);

  return [response, error];
};
