/** @format */
import { useRef, useEffect, useState, useCallback } from "react";
import { videoFilter } from "../../utils";
import { useSelector } from "react-redux";

export const useObserver = () => {
  const { videos, filters } = useSelector((store) => store.videos);

  const loader = useRef(null);
  const [infiniteVideos, setInfiniteVideos] = useState(videos.slice(0, 6));

  const filteredVideos = videoFilter(infiniteVideos, filters);

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting) {
        if (infiniteVideos.length !== videos.length) {
          setTimeout(() => {
            setInfiniteVideos((prev) => [
              ...prev,
              ...videos.slice(infiniteVideos.length, infiniteVideos.length + 6),
            ]);
          }, 0);
        }
      }
    },
    [infiniteVideos, videos],
  );

  useEffect(() => {
    const { current } = loader;
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 1,
    });

    observer.observe(current);

    return () => observer.unobserve(current);
  }, [handleObserver]);

  return [loader, filteredVideos];
};
