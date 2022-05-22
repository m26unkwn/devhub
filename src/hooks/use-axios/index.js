/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "../../context";
import { useSelector } from "react-redux";

/** @format */
export const useAxios = ({
  method = "get",
  url,
  property = null,
  headers = null,
  body = null,
}) => {
  const [response, setResponse] = useState();
  const { setLoading } = useToast();
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios({ method, url, body, headers });
        setResponse(property ? data[property] : data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [response, error];
};

export const usePlaylistAxios = ({
  method = "get",
  url,
  property = null,
  headers = null,
  body = null,
}) => {
  const [response, setResponse] = useState();
  const { setLoading } = useToast();
  const [error, setError] = useState("");
  const playlists = useSelector((store) => store.playlist);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios({ method, url, body, headers });
        setResponse(property ? data[property] : data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlists]);

  return [response, error];
};
