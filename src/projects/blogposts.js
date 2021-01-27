import React from 'react';
import {MediaStage} from '../components/framework.js'

export const FK2001 = (props) => {
  return(
    <>
      <p>
        I found a <a href="https://deskthority.net/wiki/Focus_FK-2001">Focus FK-2001</a> terminal keyboard in the garage. 
        My dad first used it in the 90's when he started programming. 
        It's honestly still pretty nice for being in storage for 10+ years.
      </p>
      <MediaStage
        media={[{
          img: "/pics/fk2001/fk-0.JPG", 
          text:"Focus FK-2001 (Asian 102 layout)"
        }]}
      />
      <p>
        To connect the 5 pin DIN cable to my modern computer, 
        I used a 5 pin DIN to PS/2 adapter and a PS/2 to USB adapter. 
        Looks kinda janky, but I'll fix that in a sec.
      </p>
      <MediaStage
        media={[{
          img:"/pics/fk2001/fk-5.JPG",
          text:"The Chain of Adapters"
        }]}
      />
      <p>
        First things first, I took it apart and cleaned it throughly. 
        I dusted out the innards with an air duster and wiped down all the keycaps.
        I found that some of the keys (space and left ctrl) seemed to be double pressing. 
        I desoldered and swapped the troublesome switches with working switches.
      </p>
      <MediaStage
        media={[
          {img:"/pics/fk2001/fk-1.JPG", text: "Out of the Case"},
          {img:"/pics/fk2001/fk-2.JPG", text: 'Keycaps Off'}
        ]}
      />
      <p>
        I really like the beige retro color of tech from this time period.
        The switches are Alps SKCM whites or a clone, I'm not entirely sure.
      </p>
      <MediaStage
        media={[
          {img:"/pics/fk2001/fk-3.JPG", text:"Alps Keycaps"},
          {img:"/pics/fk2001/fk-4.JPG", text:"Alps Style Switch"},
        ]}
      />
      <p>
        Since the adapter chain is bit unsightly, I decided to use a <a href="https://www.sparkfun.com/products/12640">Pro-Micro </a>
        to adapt the keyboard to use USB.
        The pins of the original cable connector are labelled C, D, G, and V for clock, data, ground, and voltage respectivley.
        I connected these pins to the Pro-Micro's PD0, PD1, RAW, and GND, 
        then I flashed the Pro-Micro with  
        <a href="https://github.com/tmk/tmk_keyboard/tree/master/converter/ibmpc_usb"> Hasu's terminal keyboard converter</a>. 
      </p>
      <MediaStage
        media={[
          {img:"/pics/fk2001/fk-7.JPG", text:"C, D, G, V labels on the pcb"},
          {img:"/pics/fk2001/fk-6.JPG", text:"The Setup"},
        ]}
      />
      <p>
        Luckily, there was a hole in the back of the case that was just big enough for a USB mini port so I didn't have to do any drilling.
        I didn't have heat shrink at the time so I hotglued the wires for insulation and stability (don't worry, I soldered them first).
        I also used a stack of cardboard and electrical tape to support the Pro-Micro in the case.
        Not the prettiest solution, but no one's going to see it inside the case.
      </p>
      <MediaStage
        media={[
          {img:"/pics/fk2001/fk-8.JPG", text:"Pro-Micro in Place"},
          {img:"/pics/fk2001/fk-9.JPG", text:"USB Mini-B Port"},
          {img:"/pics/fk2001/fk-10.JPG", text:"Restored FK-2001"},
        ]}
      />
    </>
  );
}