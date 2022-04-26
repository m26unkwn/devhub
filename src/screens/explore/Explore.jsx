/** @format */

import React,{useEffect,useState,useRef,useCallback} from "react";
import "./explore.css";

import { VideoCard, Button, Loader } from "../../components";
import { useVideos } from "../../context";
import { videoFilter } from "../../utils";

const buttonTitle = [
  {
    title: "All Videos",
    param: "allvideos",
  },
  {
    title: "Javascript",
    param: "javascript",
  },
  {
    title: "React",
    param: "react",
  },
  {
    title: "Html",
    param: "html",
  },
  {
    title: "Css",
    param: "css",
  },
];

export const Explore = () => {
  const {
    videoState: { videos, filters },
    videoDispatch,
  } = useVideos();

  const loader = useRef(null)
  const[infiniteVideos,setInfiniteVideos] = useState(videos.slice(0,6))
  const [loading,setLoading]=useState(false)


  const filteredVideos = videoFilter(infiniteVideos, filters);


  const handleObserver = useCallback((entries)=>{
    const [target] = entries
    if(target.isIntersecting){

      if(infiniteVideos.length!==videos.length){

      setLoading(true)

      setTimeout(()=>{
        setInfiniteVideos(prev=>[...prev,...videos.slice(infiniteVideos.length,infiniteVideos.length+6)])
        setLoading(false)
      },0)

    }}
  },[infiniteVideos,videos])

  useEffect(()=>{
    const {current} = loader;
    const observer = new IntersectionObserver(handleObserver,{
      root:null,
      threshold:1
    })

    observer.observe(current)

    return ()=> observer.unobserve(current)
    
  },[handleObserver])


  const filterDispatch = (e, title) => {
    e.preventDefault();
    videoDispatch({ type: "ADD_FILTER", filter: title });
  };

  

  return (
    <div className='main-container'>
      <div className='explore-wrapper'>
        <div className='explore-category flex flex-gap'>
          {buttonTitle.map(({ title, param }) => (
            <Button
              key={title}
              title={title}
              filterDispatch={filterDispatch}
              filter={filters}
              param={param}
            />
          ))}
        </div>
        <div className='explore-card-wrapper'>
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <VideoCard key={video.id} props={video} />
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div ref={loader}>{loading &&  <Loader loaderPosition="loader-position" />}</div>
      </div>
    </div>
  );
};
