import React from 'react';
import { ProjectPage, MediaFormat, VidFormat } from './page';
import WorkoutApp from './workoutTimer';

const calplugLogos = [
  {src: "/pics/logos/calpluglogo.png", url: 'http://calplug.org/', alt: 'calplugLogo'},
  {src: "/pics/logos/Calit2.png", url: 'http://calit2.uci.edu/', alt: 'calit2Logo'}
];

export function FKRestoration(){
  return(
    <ProjectPage
      title="FK-2001 Restoration"
      dates="October 2020"
      description={
        <>
          I found a <a href="https://deskthority.net/wiki/Focus_FK-2001">Focus FK-2001</a>terminal keyboard in the garage. 
          My dad first used it in the 90's when he started programming.
          <MediaFormat
            img1src="/pics/fk2001/fk-0.JPG"
            img1head="Focus FK-2001 (Asian 102 layout)"
          />
          To connect the 5 pin DIN cable to my modern computer, 
          I used a 5 pin DIN to PS/2 adapter and a PS/2 to USB adapter. 
          Looks kinda janky, but I'll fix that in a sec.
          <MediaFormat
            img1src="/pics/fk2001/fk-5.JPG"
          />
          First things first, I took it apart and cleaned it throughly. 
          I dusted out the innards with an air duster and wiped down all the keycaps.
          I found that some of the keys (space and left ctrl) seemed to be double pressing. 
          I desoldered and swapped the troublesome switches with less used but working switches.
          <MediaFormat
            img1src="/pics/fk2001/fk-1.JPG"
            img2src="/pics/fk2001/fk-2.JPG"
          />
          I really like the beige retro color of tech from this time period.
          The switches are Alps SKCM whites or a clone, I'm not entirely sure.
          <MediaFormat
            img1src="/pics/fk2001/fk-3.JPG"
            img2src="/pics/fk2001/fk-4.JPG"
          />
          Since the adapter chain is bit unsightly, I decided to use a <a href="https://www.sparkfun.com/products/12640">Pro-Micro </a>
          to adapter the keyboard to use USB.
          The pins of the original cable connector are labelled C, D, G, and V for clock, data, ground, and voltage respectivley.
          I connected these pins to the Pro-Micro's PD0, PD1, RAW, and GND, 
          then I flashed the Pro-Micro with  
          <a href="https://github.com/tmk/tmk_keyboard/tree/master/converter/ibmpc_usb"> Hasu's terminal keyboard converter</a>. 
          <MediaFormat
            img1src="/pics/fk2001/fk-6.JPG"
            img2src="/pics/fk2001/fk-7.JPG"
          />
          Luckily, there was a hole in the back of the case that was just big enough for a USB mini port so I didn't have to do any drilling.
          And yes, I did hot glue the wires for insulation (don't worry, I soldered them first).
          I didn't have heat shrink at the time so I went for the next best option.
          I also used a stack of cardboard and electrical tape to support the Pro-Micro in the case.
          Not the prettiest solution, but no one's going to see it anyways.
          <MediaFormat
            img1src="/pics/fk2001/fk-8.JPG"
            img2src="/pics/fk2001/fk-9.JPG"
          />
          <MediaFormat
            img1src="/pics/fk2001/fk-10.JPG"
            img1head="Restored FK-2001"
          />
        </>
      }
    />
  )
}

export function MacroPad(){
  return(
    <ProjectPage
      title="Macro Pad"
      dates="November 2020"
      buttons={[{title: 'GitHub', url: 'https://github.com/ec965/dropout-numpad', color:"purple"}]}
      description={
        <>
          I've been getting into mechanical keyboards recently. 
          This mechanical macro pad (or num pad) takes mx-style switches and includes a rotary encoder. 
          It uses a <a href="https://www.sparkfun.com/products/12640">ProMicro</a> as the controller because I wanted the whole thing to be relatively easy to hand solder. 
          The ProMicro is also compatible with <a href="https://github.com/qmk/qmk_firmware">QMK</a>, an open source keyboard firmware, which I will use in the completed build.
        </>
      }
      media={
        <MediaFormat 
          img1src="/pics/macropad/pcb_schem.png"
          img1head="PCB"
        />
      }
    />

  );
}
export function BoulderField(){
  return(
    <ProjectPage
      title="Boulder Field"
      dates="August 2020"
      buttons={[
        {title: 'GitHub', url: 'https://github.com/ec965/MP-Recs', color:"purple"},
        {title: 'Project Site', url: 'https://ec965.github.io/MP-Recs/index.html', color:"yellow"
      }]}
      description={
        <>
          Find some bouldering projects near you. (Requires a Mountain Project account.)
          This idea came about as an exercise to learn React.
        </>        
      }
      media={
        <MediaFormat
          img2src="/pics/boulderField/boulderField.png"
          img2head="Form"
          img3src="/pics/boulderField/dataTable.png"
          img3head="Boulder Table"
        />
      }
    />
  );
}
export function CoffeeGrams(){
  return(
    <ProjectPage
      title="Coffee Grams"
      dates="March 2020 - June 2020, December 2020"
      buttons={[{title: 'GitHub',url: 'https://github.com/ec965/coffee_grams', color:'purple' }]}
      description={<>IoT Coffee Scale PCB design and LAMP stack webapp. <a href="./cg_example/Coffee Grams.html">Click here</a> for a static example of the webapp.</>}
      media={ 
        <MediaFormat
          img1src="/pics/coffee_grams/pcb_rev2.jpg"
          img1head="PCB"
          img2src="/pics/coffee_grams/3d_rev2.jpg"
          img2head="3-D Render of PCB"
          img3src="/pics/coffee_grams/breadboard.JPG"
          img3head="Raspberry Pi Prototype"
        />
      }
    />
  );
}

export function WorkoutTimer(){

  return(
    <ProjectPage
      title="Workout Timer"
      dates="April 2020"
      buttons={[{title: 'GitHub',url: 'https://github.com/ec965/workout_timer', color: 'purple' }]}
      media={
        <div className="lr-padding">
          <WorkoutApp/>
        </div>
      }
    />
  );
}

export function GPSSS(){
  return(
   <ProjectPage
     title="GPS Sound Sensor"
     dates="September 2019 - March 2020"
     buttons={[{title: 'Project Site', url: 'http://projects.eng.uci.edu/projects/2019-2020/gps-sound-sensor-rescue-assistance', color: 'yellow'}]}
     description={<>The GPSSS is a WiFi connected directional sensor based on the time delay of arrival algorthim for sound. 
       My contributions include configuring WiFi connectivity between the sensor and android application.
       Special thanks to my teammates Minh Tam Chau, Sam Longo, and Kelwin Li.</>}
    media={
      <MediaFormat
        img1head="Sensor Internals"
        img1src="\pics\GPSSS\GPSSS_2.jpg"
        vidsrc="\pics\GPSSS\gpsss_vid.mp4"
      />
     }
    />
  );
}


export function WCBuddy(){
  return(
    <ProjectPage
      title="Water Cooler Buddy"
      dates="September 2019 - June 2020"
      logos={calplugLogos}
      description={
        <>
          Water Cooler Buddy is an energy management system for a water cooler. Water Cooler Buddy controls it's sensors, relays, and user interface using an ESP32 microcontroller.
          <br/><br/>
          My primary contribution was firmware development. I updated firmware for ESP32 implementation and created an RTOS scheduling system. I also assisted with PCB population and water cooler wiring.
        </>
      }
      media={
        <MediaFormat img1head="Main and Interface PCB" img1src="\pics\WCB\wcb_pcb.jpg"
          img2head="Watercooler" img2src="\pics\WCB\WCB_outside.JPG"
          img3head="Demo User Interface" img3src="\pics\WCB\WCB_fake_front.JPG"
        />
      }
    />
  );
}

export function ScaleUp(){
  return(
    <ProjectPage
      title="Scale UP"
      dates="SD Hacks 2019"
      buttons={[
        {title: 'GitHub', url:'https://github.com/ec965/smart_scale', color: 'purple' },
        {title: 'DevPost', url: 'https://devpost.com/software/scale-up', color: 'blue'},
      ]}
      description={
        <>
          Scale Up can calculate caloric data based on weight of foods. Google Vision was used to find food types while the USDA Nutrition API to find cloric information. Checkout the DevPost for more infromation.
        </>
      }
      media={
        <MediaFormat 
          youtube vidsrc='https://www.youtube.com/embed/G3OunuLPnXA' 
          img1src="\pics\scale_up\hardware_all_view_labeled.JPG" img1head="Demo"/>
      }
    />
  );
}

export function HC2(){
  return(
    <ProjectPage
      title="HC2"
      dates="August 2019 - Novermber 2019"
      buttons={[
        {title: 'GitHub', url: 'https://github.com/ec965/HC2_arduino_python', color:'purple'}
      ]}
      description={<>I created fimrware libraries in Python (for Raspberry Pi) and Arduino to interface with the industry standard Rotronics HC2 temperature and humidity sensor. 
                      I also designed a prototype IoT network for the HC2 sensor (currently a private repository). Connections include WiFi, Email, and LoRa.</>}
      media={
        <MediaFormat img1head="" img1src='\pics\hc2.JPG'/>
      }
    />
  );
}

export function ProjectorBuddy(){
  return(
    <ProjectPage
      title="Projector Buddy"
      dates="March 2019 - June 2020"
      logos={calplugLogos}
      description={
        <>
          Projector Buddy is an advanced energy system that controls a projectors electricity usage based on human precense in the room. 
          Human activity is determined through light, sound, and motion. 
          In order to preserve the projectors internal electronics and bulb, a soft shutdown is initiated using an IR blaster. 
          <br/><br/>
          My primary contribution was firmware development. 
          I implemented freeRTOS firmware, updated the control algorithm, and created IR Reciever and IR Emitter functionality.
        </>
      }
      media={
        <MediaFormat 
          img3src="/pics/projector_buddy/topdown.jpg"
          img3head="Topdown View"
          img2head="Side View"
          img2src="/pics/projector_buddy/PIR_pic.jpg"
        />
      }
    />
  );
}

export function PolyPhase(){
  return(
    <ProjectPage
      title="Poly-Phase Wattmeter"
      dates="March 2019 - June 2019"
      logos={calplugLogos}
      buttons={[
        {title: 'GitHub', url: "https://github.com/CalPlug/ADE9078-3PhaseWattmeter", color:"purple"}
      ]}
      description={
        <>
          Using the ADE9078, our group created a PCB and wrote firmware to create a small portable three phase wattmeter. 
          Our demo setup was designed to detect faults in a three phase motor. 
          By performing a Fast Fourier Transform (FFT) on the power data and looking for irregularites, we were able to determine if the motor was faulty.
          <br/><br/>
          My primary contribution was configuring the waveform buffer firmware and creating a graphical interface for FFT.
        </>
      }
      media={
        <MediaFormat vidsrc="/pics/3phase/3phasewatt_sin.mov" vidhead="Power Graph"
          img3head="Demo Setup" img3src="/pics/3phase/3phase_watt_demo.jpg"
          img2head="FFT Processing Graph" img2src="/pics/3phase/3phase_watt_processing.png"/>
      }
    />
  );
}


export function CingHat(){
  return(
    <ProjectPage
      title="The C-ing Hat"
      dates="Hack UCI 2019"
      buttons={[
        {title: 'GitHub', url: "https://github.com/ec965/the_all_C-ing_eye", color:'purple'},
        {title: 'DevPost', url: "https://devpost.com/software/the-c-ing-hat", color:"blue"},
      ]}
      description={<>A prototype hat for object detection. Checkout the DevPost for more information.</>}
      media={
        <MediaFormat 
          img1src="\pics\cing_hat\Cing_hat_2019.jpg" 
          img1head="Side View"
          img2src='\pics\cing_hat\Cing_hat_2019 (2).jpg'
          img2head="Topdown View"
          vidsrc="https://www.youtube.com/embed/SFQxsU8La4k" youtube/>
      }
    />
  );
}

export function MicroMouse(){
  return(
    <ProjectPage
      title="MicroMouse"
      dates="January 2019 - March 2019"
      buttons={[
        {title: 'GitHub', url: "https://github.com/ec965/micromouse_2019", color:'purple'}
      ]}
      description={<>MicroMouse is a world wide competition in the promotion of autonomous vehicles. Using IR transcievers to detect distance from walls, the mouse can navigate through a maze using it's microcontroller "brain".</>}
      media={
        <MediaFormat img1src="\pics\micromouse\micromosue_2019.JPG" img2src="\pics\micromouse\labeled_top_down_micromouse_2019.png"/>
      }
    />
  );
}
