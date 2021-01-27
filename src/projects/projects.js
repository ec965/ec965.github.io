import React from 'react';
import ExpandingBlogFramework from '../components/blog.js';
import {FK2001} from './blogposts.js';


const subpath = 'project';

const Projects = [
  {
    path: subpath + '/espTemp',
    img: '/pics/iot_temp/perfboard_front.JPG',
    text: '2021',
    title: 'Esp Temp',
    subtitle: 'January 2021',
    buttons:[
      {text: 'GitHub', link: 'https://github.com/ec965/esp-temp'}
    ],
    media: [
      {img: "/pics/iot_temp/perfboard_front.JPG", text: 'Esp Temp'},
      {img: "/pics/iot_temp/perfboard_back.JPG", text: 'Hand wiring is fun, right...'},
      {img: "/pics/iot_temp/breadboard.JPG", text: 'Breadboarding'},
    ],
    body: 
      <p>
        Recently, I made an IoT temperature probe.
        It shows data physically over a seven segment display but it can also stream data over WiFi using MQTT.
        At first I didn't really know what I could use it for, but it's come in handy for MQTT testing.
        The probe gives me an easy way to start an MQTT publisher.
        I mean, I could just write a script to do that, but that's not cool.
        Besides, hand wiring is fun... right?
      </p>,
  },{
    path: subpath + '/macropad',
    img: '/pics/macropad/pcb-pretty.JPG',
    text: '2020',
    title: 'Macro Pad',
    subtitle: 'November 2020',
    buttons:[
      {text: 'GitHub', link: 'https://github.com/ec965/dropout-numpad'}
    ],
    media:[
      {img: "/pics/macropad/rev0.5.jpg", text:"Rev 0.5"},
      {img: "/pics/macropad/pcb-pretty.JPG", text:"Rev 0.1 PCB with ProMicro and switches"},
      {img:"/pics/macropad/populated.JPG", text: "Rev 0.1 Populated PCB"},
      {img:"/pics/macropad/pcb-top-down.JPG", text: "Rev 0.1 PCB"},
      {img: "/pics/macropad/pcb_schem.png", text: "Rev 0 CAD design"},
    ],
    body:
    <p>
      I can't quite remember how I got into mechanical keyboards...
      but they sure are pretty.
      With my background in electrical engineering, I figured it'd be fun to make my own keyboard.
      I'm currently using a 60% keyboard and I was feeling the need for a numpad.
      My design uses a <a href="https://www.sparkfun.com/products/12640">ProMicro</a> as the controller because I wanted the whole thing to be relatively easy to hand solder. 
      The ProMicro is also compatible with <a href="https://github.com/qmk/qmk_firmware">QMK</a>, an open source keyboard firmware.
      Right now, I'm waiting for switches to arrive.
    </p>
  },
  {
    path: subpath + '/fk2001',
    img: '/pics/fk2001/fk-1.JPG',
    title: 'FK-2001',
    subtitle: 'October 2020',
    text: '2020',
    custom: 
      <ExpandingBlogFramework
        title="FK-2001"
        subtitle='October 2020'
        media={[{img: '/pics/fk2001/fk-1.JPG', text: 'FK-2001'}]}
        abstract={
          <p>
            Updating an ancient keyboard for the modern era.
            Click the arrow to read more.
          </p>
        }
      >
        <FK2001/>
      </ExpandingBlogFramework>
  },
  {
    path: subpath + '/boulderField',
    img: '/pics/boulderField/dataTable.png',
    text: '2020',
    title: 'Boulder Field',
    subtitle: 'August 2020',
    buttons: [
        {text: 'GitHub', link: 'https://github.com/ec965/MP-Recs'},
        {text: 'Demo', link: 'https://ec965.github.io/MP-Recs/index.html'}
    ],
    media: [
      {img:"/pics/boulderField/dataTable.png", text: "Bouldering Suggestions"},
      {img:"/pics/boulderField/boulderField.png", text:"Form"},
    ],
    body:
    <p>
      Find some bouldering projects near you. (Requires a Mountain Project account.)
      This idea came about as an exercise to learn React.
    </p>
  },
  {
    path: subpath + '/coffeeGrams',
    img: '/pics/coffee_grams/3d_rev2.jpg',
    text: '2020',
    title: 'Coffee Grams',
    subtitle: 'March 2020 - June 2020, December 2020',
    buttons:[
      {text: 'GitHub',link: 'https://github.com/ec965/coffee_grams'}
    ],
    media: [
      {img:"/pics/coffee_grams/pcb_rev2.jpg", text:"PCB"},
      {img:"/pics/coffee_grams/3d_rev2.jpg", text:"3-D Render of PCB"},
      {img:"/pics/coffee_grams/breadboard.JPG", text: "Raspberry Pi Prototype"},
    ],
    body:
    <p>
      IoT Coffee Scale PCB design and LAMP stack webapp. <a href="./cg_example/Coffee Grams.html">Click here</a> for a static example of the webapp.
    </p>

  },
  // {
  //   path: subpath + '/workoutTimer',
  //   img: '/pics/wo1.png',
  //   title: 'Workout Timer',
  //   text: '2020',
  //   custom: <h1>placeholder</h1>
  // },
  {
    path: subpath + '/GPSSS',
    img: '/pics/GPSSS/GPSSS_1.jpg',
    text: 'Senior Design 2020',
    title: 'GPS Sound Sensor',
    subtitle: 'September 2019 - March 2020',
    buttons:[
      {text: 'GitHub',link: 'https://github.com/ec965/coffee_grams'}
    ],
    media:[
      {vid: "/pics/GPSSS/gpsss_vid.mp4", text: "Infomercial", thumbnail: '/pics/GPSSS/video_thumbnail.png'},
      {img: '/pics/GPSSS/GPSSS_1.jpg', text: "GPSSS"},
      {text: "Sensor Internals", img: "/pics/GPSSS/GPSSS_2.jpg"},
    ],
    body:
    <p>
      The GPSSS is a WiFi connected directional sensor based on the time delay of arrival algorthim for sound. 
      My contributions include configuring WiFi connectivity between the sensor and android application.
      Special thanks to my teammates Minh Tam Chau, Sam Longo, and Kelwin Li.
    </p>
  },
  {
    path: subpath + '/waterCoolerBuddy',
    img: '/pics/WCB/wcb_pcb.jpg',
    title: 'Water Cooler Buddy',
    text: 'Calplug 2019',
    subtitle:"California Plug Load Center: September 2019 - June 2020",
    buttons:[
      {link: 'http://calplug.org/', text:'CalPlug'},
      {link: 'https://www.calit2.uci.edu/', text: 'CalIT2'},
    ],
    media:[
      {text:"Main and Interface PCB", img:"/pics/WCB/wcb_pcb.jpg"},
      {text:"Watercooler", img:"/pics/WCB/WCB_outside.JPG"},
      {text:"Demo User Interface", img:"/pics/WCB/WCB_fake_front.JPG"},
    ],
    body:
    <p>
      Water Cooler Buddy is an energy management system for a water cooler. Water Cooler Buddy controls it's sensors, relays, and user interface using an ESP32 microcontroller.
      <br/><br/>
      My primary contribution was firmware development. I updated firmware for ESP32 implementation and created an RTOS scheduling system. I also assisted with PCB population and water cooler wiring.
    </p>
  },
  {
    path: subpath + '/scaleUp',
    img: '/pics/scale_up/hardware_all_view.JPG',
    title: 'Scale Up',
    text: 'SD Hacks 2019',
    subtitle:'SD Hacks 2019',
    buttons:[
      {text: 'GitHub', link:'https://github.com/ec965/smart_scale'},
      {text: 'DevPost', link: 'https://devpost.com/software/scale-up'},
    ],
    media:[
      {yt: 'https://www.youtube.com/embed/G3OunuLPnXA', text: 'Demo', thumbnail:"https://i.ytimg.com/vi/G3OunuLPnXA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCMlsjDf9e4NW0HvUQB-UBF4JSjQ"},
      {img: "/pics/scale_up/hardware_all_view_labeled.JPG", text: 'Scale Up'},
    ],
    body:
    <p>
      Scale Up can calculate caloric data based on weight of foods. Google Vision was used to find food types while the USDA Nutrition API to find cloric information. Checkout the DevPost for more infromation.
    </p>
  },
  {
    path: subpath + '/hc2',
    img: '/pics/hc2.JPG',
    title: 'HC2: IoT Sensor',
    text: '2019',
    subtitle: "August 2019 - Novermber 2019",
    buttons:[
      {text: 'GitHub', url: 'https://github.com/ec965/HC2_arduino_python'}
    ],
    media:[{img: '/pics/hc2.JPG', text: 'HC2, Moteino (LoRa), & Raspberry Pi'}],
    body:
    <p>
      I created fimrware libraries in Python (for Raspberry Pi) and Arduino to interface with the industry standard Rotronics HC2 temperature and humidity sensor. 
      I also designed a prototype IoT network for the HC2 sensor (currently a private repository). Connections include WiFi, Email, and LoRa.
    </p>
  },
  {
    path: subpath + '/projectorBuddy',
    img: "/pics/projector_buddy/image.png",
    title: 'Projector Buddy',
    text: 'Calplug 2019',
    subtitle: "California Plug Load Center: March 2019 - June 2020",
    buttons:[
      {link: 'http://calplug.org/', text:'CalPlug'},
      {link: 'https://www.calit2.uci.edu/', text: 'CalIT2'},
    ],
    media:[
      {img:"/pics/projector_buddy/topdown.jpg",text:"Topdown View"},
      {text:"Side View", img:"/pics/projector_buddy/PIR_pic.jpg"},
    ],
    body:
    <p>
      Projector Buddy is an advanced energy system that controls a projectors electricity usage based on human precense in the room. 
      Human activity is determined through light, sound, and motion. 
      In order to preserve the projectors internal electronics and bulb, a soft shutdown is initiated using an IR blaster. 
      <br/><br/>
      My primary contribution was firmware development. 
      I implemented freeRTOS firmware, updated the control algorithm, and created IR Reciever and IR Emitter functionality.
    </p>
  },
  {
    path: subpath + '/polyPhase',
    img: '/pics/3phase/3phase_watt_demo.jpg',
    title: "3-phase Wattmeter",
    text: 'Calplug 2019',
    subtitle: "California Plug Load Center: March 2019 - June 2019",
    buttons:[
      {link: "https://github.com/CalPlug/ADE9078-3PhaseWattmeter", text: 'GitHub'},
      {link: 'http://calplug.org/', text:'CalPlug'},
      {link: 'https://www.calit2.uci.edu/', text: 'CalIT2'},
    ],
    media:[
      {text:"Demo Setup", img:"/pics/3phase/3phase_watt_demo.jpg"},
      {vid:"/pics/3phase/3phasewatt_sin.mov", text:"Power Graph", thumbnail: '/pics/3phase/video_thumbnail.png'},
      {text:"FFT Processing Graph", img:"/pics/3phase/3phase_watt_processing.png"},
    ],
    body:
    <p>
      Using the ADE9078, our group created a PCB and wrote firmware to create a small portable three phase wattmeter. 
      Our demo setup was designed to detect faults in a three phase motor. 
      By performing a Fast Fourier Transform (FFT) on the power data and looking for irregularites, we were able to determine if the motor was faulty.
      <br/><br/>
      My primary contribution was configuring the waveform buffer firmware and creating a graphical interface for FFT.
    </p>
  },
  {
    path: subpath + '/cingHat',
    img: '/pics/cing_hat/Cing_hat_2019.jpg',
    title: 'The C-ing Hat',
    text: 'Hack UCI 2019',
    subtitle: 'Hack UCI 2019',
    buttons:[
      {text: 'GitHub', link: "https://github.com/ec965/the_all_C-ing_eye"},
      {text: 'DevPost', link: "https://devpost.com/software/the-c-ing-hat"},
    ],
    media:[
      {yt:"https://www.youtube.com/embed/SFQxsU8La4k", text: "Demo", thumbnail:"https://i.ytimg.com/vi/SFQxsU8La4k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNNePoW3PnWJ_bCpQLEPnvltOt8A"},
      {img:"/pics/cing_hat/Cing_hat_2019.jpg", text: "Side View"},
      {img:'/pics/cing_hat/Cing_hat_2019 (2).jpg', text:"Topdown"},
    ],
    body:
    <p>
      A prototype hat for object detection. Checkout the DevPost for more information.
    </p>
  },
  {
    path: subpath + '/micromouse',
    img: '/pics/micromouse/micromosue_2019.JPG',
    title: 'MicroMouse',
    text: '2019',
    subtitle: 'January 2019 - March 2019',
    buttons: [
      {text: 'GitHub', link: "https://github.com/ec965/micromouse_2019"}
    ],
    media:[
      {img:"/pics/micromouse/micromosue_2019.JPG", text: "Micromouse"},
      {img:"/pics/micromouse/labeled_top_down_micromouse_2019.png", text: "Micromouse"}
    ],
    body:
    <p>
      MicroMouse is a world wide competition in the promotion of autonomous vehicles. Using IR transcievers to detect distance from walls, the mouse can navigate through a maze using it's microcontroller "brain".
    </p>
  }
];


export default Projects;