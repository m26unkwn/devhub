/** @format */
import { useVideos } from "../../context";
import { useRef, useEffect, useState, useCallback } from "react";
import { videoFilter } from "../../utils";

export const useObserver = () => {
  const {
    videoState: { videos, filters },
  } = useVideos();

  const loader = useRef(null);
  const [infiniteVideos, setInfiniteVideos] = useState(videos.slice(0, 6));

  const filteredVideos = videoFilter(infiniteVideos, filters);

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting) {
        if (infiniteVideos.length !== videos.length) {
          setTimeout(() => {
            console.log("hello world");
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
  console.log(infiniteVideos);

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
