import React from 'react';
import Reel from './reel';
const slides = [
  {caption: '2018', type: 'image', media: '/pics/art/face.JPG', alt:'face'},
  {caption: '2018', type: 'image', media: '/pics/art/pot.JPG', alt:'pot'},
  {caption: '2017', type: 'image', media: '/pics/art/averii.JPG', alt:'averii'},
  {caption: 'Cooking with Blake and Kelwin: Ep3', type: 'video', media:'https://www.youtube.com/embed/kT8Op8jmf_M'},
  {caption: 'Cooking with Blake and Kelwin: Ep4', type: 'video', media:'https://www.youtube.com/embed/8HvNjPW5TXY'},
  {caption: 'Cooking with Blake and Kelwin: Ep2', type: 'video', media:'https://www.youtube.com/embed/Ij89wI493EU'},
  {caption: 'Cooking with Blake and Kelwin: Ep1', type: 'video', media:'https://www.youtube.com/embed/JGY2peNQ_Q4'},
];


export default function Fun(props){
  return(
    <div className="container">
      <Reel slides={slides}/>

    </div>
  );
}