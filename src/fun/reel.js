import React, {useState, useEffect} from 'react';
import {Figure, Video} from '../projects/page';

export default function Reel(props){
  const [slideIndex, setSlideIndex] = useState(0);
  const [lastSlide, setLastSlide] = useState(false);
  const [firstSlide, setFirstSlide] = useState(true);
  const {slides} = props;
  

  useEffect(()=> {
    if(slideIndex === 0 ){
      setFirstSlide(true);
    }
    else{
      setFirstSlide(false);
    }
    if(slideIndex === slides.length-1){
      setLastSlide(true);
    }
    else{
      setLastSlide(false);
    }
  }, [slideIndex, slides.length]);

  function handlePrev(){
    if (slideIndex > 0){
      setSlideIndex(slideIndex-1);
    }
  }
  function handleNext(){
    if (slideIndex < slides.length-1){
      setSlideIndex(slideIndex+1);
    }
  }
  return(
    <div className="slide-player">
      <div className="slide-control">
        {!firstSlide && (
          <i onClick={handlePrev} className="slide-button fas fa-caret-left"></i>
        )}
      </div>
      <div >
        {slides.map((slide, index) => 
          (slideIndex === index) && (
            <Figure caption={slide.caption} className={slideIndex===index && 'slide-node'}>
              {slide.type === 'image' && (
                <img src={slide.media} alt={slide.alt} className="slide-image"/>
              )}
              {slide.type === 'video' && (
                <Video className="slide-video" youtube vidsrc={slide.media}/>
              )}
            </Figure>
          )
        )}
      </div>
      <div className="slide-control">
        {!lastSlide && (
          <i onClick={handleNext} className="slide-button fas fa-caret-right"></i>
        )}
      </div>
    </div>
  );
}