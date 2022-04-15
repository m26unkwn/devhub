/** @format */

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

/** @format */
export const useAxios = ({
  method = "get",
  url,
  property = null,
  body = null,
  headers = null,
}) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return [response, loading, error];
};
