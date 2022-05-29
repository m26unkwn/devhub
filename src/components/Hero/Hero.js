/** @format */
import { useSelector } from "react-redux";
import "./hero.css";

export const Hero = (props) => {
  const { userDetails: { firstName },} = useSelector(store=>store.auth)
 

  return (
    <section className={`hero-wrapper ${props.className}`}>
      <div className='hero-title'>
        <h2 className='hero-title-subhead'>Hi {firstName}</h2>
        <h1 className='hero-title-head'>{props.title}</h1>
      </div>
    </section>
  );
};
