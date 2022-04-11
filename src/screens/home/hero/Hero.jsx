/** @format */
import "./hero.css";

import { LeftArrow } from "../../../assets";
export const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='hero-title'>
        <h1 className='hero-title-head'>
          Learn the best skills in web developement.
        </h1>
        <h2 className='hero-title-subhead'>
          With your pace you can master race.
        </h2>
      </div>
      <div className=' hero-action flex'>
        <button className='btn'>
          Explore Now <img src={LeftArrow} alt='explore_icon' />
        </button>
      </div>
    </section>
  );
};
