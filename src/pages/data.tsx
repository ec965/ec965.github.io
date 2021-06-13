import * as React from "react";
import { PostData } from "../types";

export const postData: PostData[] = [
  {
    title: "Mosaic",
    subtitle: "January 2021 - February 2021",
    links: [
      { text: "GitHub", href: "https://github.com/ec965/mosaic" },
      { text: "Demo", href: "https://mosaiorama.herokuapp.com/" },
    ],
    images: [
      { src: "/pics/mosaic/image_editor.png", alt: "Image Editor" },
      { src: "/pics/mosaic/feed.png", alt: "Content Feed" },
      { src: "/pics/mosaic/login.png", alt: "Login Form" },
      { src: "/pics/mosaic/post.png", alt: "Post with Comments" },
      { src: "/pics/mosaic/profile.png", alt: "User Profile" },
      { src: "/pics/mosaic/random_editor.png", alt: "Random Editor" },
    ],
    body:
      "Mosaic is a user based full stack web app made using MongoDB, Express.js, Node.js and React.js. " +
      "On Mosaic, you can create mosaic style images from a base image or from randomly generated rgb pixel values." +
      "\nMy inspiration was to make something artistic using only CSS and HTML elements. " +
      "I considered using the HTML canvas element but instead went with using div elements because of it's customizability with CSS." +
      "\nIn the database, the mosaics are represented as a 2D array of RGB pixel objects with other customization data. " +
      "I originally chose to use PostgreSQL but that was restrictive on adding more customization options for the mosaics. " +
      "Using MongoDB allows me to continue to expand options and tools for the mosaics without having to overhaul the databse." +
      "\nTo implement users, I used JSON web tokens (JWT) to protect client side routes and API end points from unauthorized users. " +
      "Local storage and session storage hold the JWT on the client side. " +
      "Using local storage allows me to parse the JWT to personalize content according to the current users information. " +
      "I considered using cookies to store the JWT but then I wouldn't be able to safely access the JWT on the client side. " +
      "Also I don't want to get sued by the EU.",
  },
  {
    title: "MCutie",
    subtitle: "January 2021 - February 2021",
    links: [
      { text: "GitHub", href: "https://github.com/ec965/MCutie/" },
      { text: "Demo", href: "https://m-cutie.herokuapp.com/" },
    ],
    images: [
      { src: "/pics/mcutie/dashboard.png", alt: "MQTT Dashboard" },
      { src: "/pics/mcutie/graph.png", alt: "Live Websocket Graph" },
    ],
    body:
      "MCutie is a web app that provides logging and real time data graphs for MQTT sensor data. " +
      "Building off of Esp Temp, I'm planning to build more IoT sensor for home automation. " +
      "I wanted a dashboard so that I could log data and monitor my sensors. " +
      "My initial idea was to write a front-end client to interface with a MQTT broker websocket, but then I wouldn't be able to log messages. " +
      "To both log messages and see real time data, I used a Raspberry Pi as a proxy server. " +
      "The Pi logs messages into a database and publish relevant messages over a websocket. " +
      "The client can also use the websocket to publish MQTT messages to the sensors. In addition to the websocket, I also made a REST API for non-live data analysis." +
      "\nI've wanted to learn backend web development for some time. This project allowed me to pick up Node, Express, and SQLite3 with Sequelize so I'd call it fairly succesful. " +
      "If you're interested in learning more about MCutie, there's a detailed write up on the GitHub repository." +
      "\nI've also ported the project over to PostgreSQL for a cloud deployment on Heroku. Check out the demo!",
  },
  {
    title: "Esp Temp",
    subtitle: "January 2021",
    links: [{ text: "GitHub", href: "https://github.com/ec965/esp-temp" }],
    images: [
      { src: "/pics/iot_temp/perfboard_front.JPG", alt: "Esp Temp" },
      {
        src: "/pics/iot_temp/perfboard_back.JPG",
        alt: "Hand wiring is fun, right...",
      },
      { src: "/pics/iot_temp/breadboard.JPG", alt: "Breadboarding" },
    ],
    body:
      "Recently, I made an IoT temperature probe. " +
      "It shows data physically over a seven segment display but it can also stream data over WiFi using MQTT. " +
      "At first I didn't really know what I could use it for, but it's come in handy for MQTT testing. " +
      "The probe gives me an easy way to start an MQTT publisher. " +
      "I mean, I could just write a script to do that, but that's not cool. Besides, hand wiring is fun... right?",
  },
  {
    title: "Macro Pad",
    subtitle: "November 2020",
    links: [
      { text: "GitHub", href: "https://github.com/ec965/dropout-numpad" },
    ],
    images: [
      { src: "/pics/macropad/completed_dropout.jpg", alt: "macropad" },
      { src: "/pics/macropad/rev0.5.jpg", alt: "Rev 0.5" },
      {
        src: "/pics/macropad/pcb-pretty.JPG",
        alt: "Rev 0.1 PCB with ProMicro and switches",
      },
      { src: "/pics/macropad/populated.JPG", alt: "Rev 0.1 Populated PCB" },
      { src: "/pics/macropad/pcb-top-down.JPG", alt: "Rev 0.1 PCB" },
      { src: "/pics/macropad/pcb_schem.png", alt: "Rev 0 CAD design" },
    ],
    body: (
      <React.Fragment>
        I can&apos;t quite remember how I got into mechanical keyboards... but
        they sure are pretty. I have to find ways to use my Electrical
        Engineering degree somehow, so I figured it&apos;d be fun to make my own
        keyboard. I&apos;m currently using a 60% keyboard and I was feeling the
        need for a numpad. My design uses a{" "}
        <a href="https://www.sparkfun.com/products/12640">ProMicro</a> as the
        controller because I wanted the whole thing to be relatively easy to
        hand solder. The ProMicro is also compatible with{" "}
        <a href="https://github.com/qmk/qmk_firmware">QMK</a>, an open source
        keyboard firmware.
      </React.Fragment>
    ),
  },
  {
    title: "FK-2001",
    subtitle: "October 2020",
    links: [],
    images: [
      { src: "/pics/fk2001/fk-0.JPG", alt: "Focus FK-2001 (Asian 102 layout)" },
      { src: "/pics/fk2001/fk-5.JPG", alt: "The Chain of Adapters" },
      { src: "/pics/fk2001/fk-1.JPG", alt: "Out of the Case" },
      { src: "/pics/fk2001/fk-2.JPG", alt: "Keycaps Off" },
      { src: "/pics/fk2001/fk-3.JPG", alt: "Alps Keycaps" },
      { src: "/pics/fk2001/fk-4.JPG", alt: "Alps Style Switch" },
      { src: "/pics/fk2001/fk-7.JPG", alt: "C, D, G, V labels on the pcb" },
      { src: "/pics/fk2001/fk-6.JPG", alt: "The Setup" },
      { src: "/pics/fk2001/fk-8.JPG", alt: "Pro-Micro in Place" },
      { src: "/pics/fk2001/fk-9.JPG", alt: "USB Mini-B Port" },
      { src: "/pics/fk2001/fk-10.JPG", alt: "Restored FK-2001" },
    ],
    body: (
      <React.Fragment>
        I found a{" "}
        <a href="https://deskthority.net/wiki/Focus_FK-2001">Focus FK-2001</a>{" "}
        terminal keyboard in the garage. My dad first used it in the 90&apos;s
        when he started programming. It&apos;s honestly still pretty nice for
        being in storage for 10+ years.
        <br />
        <br />
        Initially, to connect the 5 pin DIN cable to my modern computer, I used
        a 5 pin DIN to PS/2 adapter and a PS/2 to USB adapter.
        <br />
        <br />
        First things first, I took it apart and cleaned it throughly. I dusted
        out the innards with an air duster and wiped down all the keycaps. I
        found that some of the keys (space and left ctrl) seemed to be double
        pressing. I desoldered and swapped the troublesome switches with working
        switches.
        <br />
        <br />
        I really like the beige retro color of tech from this time period. The
        switches are Alps SKCM whites or a clone, I&apos;m not entirely sure.
        <br />
        <br />
        Since the adapter chain is bit unsightly, I decided to use a{" "}
        <a href="https://www.sparkfun.com/products/12640">Pro-Micro </a>
        to adapt the keyboard to use USB. The pins of the original cable
        connector are labelled C, D, G, and V for clock, data, ground, and
        voltage respectivley. I connected these pins to the Pro-Micro&apos;s
        PD0, PD1, RAW, and GND, then I flashed the Pro-Micro with
        <a href="https://github.com/tmk/tmk_keyboard/tree/master/converter/ibmpc_usb">
          {" "}
          Hasu&apos;s terminal keyboard converter
        </a>
        .
        <br />
        <br />
        Luckily, there was a hole in the back of the case that was just big
        enough for a USB mini port so I didn&apos;t have to do any drilling. I
        didn&apos;t have heat shrink at the time so I hotglued the wires for
        insulation and stability (don&apos;t worry, I soldered them first). I
        also used a stack of cardboard and electrical tape to support the
        Pro-Micro in the case. Not the prettiest solution, but no one&apos;s
        going to see it inside the case.
      </React.Fragment>
    ),
  },
  {
    title: "Boulder Field",
    subtitle: "August 2020",
    links: [
      { text: "GitHub", href: "https://github.com/ec965/MP-Recs" },
      { text: "Demo", href: "https://ec965.github.io/MP-Recs/index.html" },
    ],
    images: [
      {
        src: "/pics/boulderField/dataTable.png",
        alt: "Bouldering Suggestions",
      },
      { src: "/pics/boulderField/boulderField.png", alt: "Form" },
    ],
    body: (
      <React.Fragment>
        Find some bouldering projects near you. (Requires a Mountain Project
        account.) This idea came about as an exercise to learn React.
      </React.Fragment>
    ),
  },
  {
    title: "Coffee Grams",
    subtitle: "March 2020 - June 2020, December 2020",
    links: [{ text: "GitHub", href: "https://github.com/ec965/coffee_grams" }],
    images: [
      { src: "/pics/coffee_grams/pcb_rev2.jpg", alt: "PCB" },
      { src: "/pics/coffee_grams/3d_rev2.jpg", alt: "3-D Render of PCB" },
      {
        src: "/pics/coffee_grams/breadboard.JPG",
        alt: "Raspberry Pi Prototype",
      },
    ],
    body: "IoT Coffee Scale PCB design and LAMP stack webapp.",
  },
  {
    title: "GPS Sound Sensor",
    subtitle: "September 2019 - March 2020",
    links: [
      {
        text: "Project Site",
        href: "http://projects.eng.uci.edu/projects/2019-2020/gps-sound-sensor-rescue-assistance",
      },
    ],
    images: [
      // {
      //   vid: "/pics/GPSSS/gpsss_vid.mp4",
      //   text: "Infomercial",
      //   thumbnail: "/pics/GPSSS/video_thumbnail.png",
      // },
      { src: "/pics/GPSSS/GPSSS_1.jpg", alt: "GPSSS" },
      { alt: "Sensor Internals", src: "/pics/GPSSS/GPSSS_2.jpg" },
    ],
    body: (
      <React.Fragment>
        The GPSSS is a WiFi connected directional sensor based on the time delay
        of arrival algorthim for sound. My contributions include configuring
        WiFi connectivity between the sensor and android application. Special
        thanks to my teammates Minh Tam Chau, Sam Longo, and Kelwin Li.
      </React.Fragment>
    ),
  },
  {
    title: "Water Cooler Buddy",
    subtitle: "California Plug Load Center: September 2019 - June 2020",
    links: [
      { href: "http://calplug.org/", text: "CalPlug" },
      { href: "https://www.calit2.uci.edu/", text: "CalIT2" },
    ],
    images: [
      { alt: "Main and Interface PCB", src: "/pics/WCB/wcb_pcb.jpg" },
      { alt: "Watercooler", src: "/pics/WCB/WCB_outside.JPG" },
      { alt: "Demo User Interface", src: "/pics/WCB/WCB_fake_front.JPG" },
    ],
    body: (
      <React.Fragment>
        Water Cooler Buddy is an energy management system for a water cooler.
        Water Cooler Buddy controls it&apos;s sensors, relays, and user
        interface using an ESP32 microcontroller.
        <br />
        <br />
        My primary contribution was firmware development. I updated firmware for
        ESP32 implementation and created an RTOS scheduling system. I also
        assisted with PCB population and water cooler wiring.
      </React.Fragment>
    ),
  },
  {
    title: "Scale Up",
    subtitle: "SD Hacks 2019",
    links: [
      { text: "GitHub", href: "https://github.com/ec965/smart_scale" },
      { text: "DevPost", href: "https://devpost.com/software/scale-up" },
    ],
    images: [
      // {
      //   yt: "https://www.youtube.com/embed/G3OunuLPnXA",
      //   text: "Demo",
      //   thumbnail:
      //     "https://i.ytimg.com/vi/G3OunuLPnXA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCMlsjDf9e4NW0HvUQB-UBF4JSjQ",
      // },
      { src: "/pics/scale_up/hardware_all_view_labeled.JPG", alt: "Scale Up" },
    ],
    body: (
      <React.Fragment>
        Scale Up can calculate caloric data based on weight of foods. Google
        Vision was used to find food types while the USDA Nutrition API to find
        caloric information. Checkout the DevPost for more infromation.
      </React.Fragment>
    ),
  },
  {
    title: "HC2: IoT Sensor",
    subtitle: "August 2019 - Novermber 2019",
    links: [
      { text: "GitHub", href: "https://github.com/ec965/HC2_arduino_python" },
    ],
    images: [
      { src: "/pics/hc2.JPG", alt: "HC2, Moteino (LoRa), & Raspberry Pi" },
    ],
    body: (
      <React.Fragment>
        I created fimrware libraries in Python (for Raspberry Pi) and Arduino to
        interface with the industry standard Rotronics HC2 temperature and
        humidity sensor. I also designed a prototype IoT network for the HC2
        sensor (currently a private repository). Connections include WiFi,
        Email, and LoRa.
      </React.Fragment>
    ),
  },
  {
    title: "Projector Buddy",
    subtitle: "California Plug Load Center: March 2019 - June 2020",
    links: [
      { href: "http://calplug.org/", text: "CalPlug" },
      { href: "https://www.calit2.uci.edu/", text: "CalIT2" },
    ],
    images: [
      { src: "/pics/projector_buddy/topdown.jpg", alt: "Topdown View" },
      { alt: "Side View", src: "/pics/projector_buddy/PIR_pic.jpg" },
    ],
    body: (
      <React.Fragment>
        Projector Buddy is an advanced energy system that controls a projectors
        electricity usage based on human precense in the room. Human activity is
        determined through light, sound, and motion. In order to preserve the
        projectors internal electronics and bulb, a soft shutdown is initiated
        using an IR blaster.
        <br />
        <br />
        My primary contribution was firmware development. I implemented freeRTOS
        firmware, updated the control algorithm, and created IR Reciever and IR
        Emitter functionality.
      </React.Fragment>
    ),
  },
  {
    title: "3-phase Wattmeter",
    subtitle: "California Plug Load Center: March 2019 - June 2019",
    links: [
      {
        href: "https://github.com/CalPlug/ADE9078-3PhaseWattmeter",
        text: "GitHub",
      },
      { href: "http://calplug.org/", text: "CalPlug" },
      { href: "https://www.calit2.uci.edu/", text: "CalIT2" },
    ],
    images: [
      { alt: "Demo Setup", src: "/pics/3phase/3phase_watt_demo.jpg" },
      // {
      //   vid: "/pics/3phase/3phasewatt_sin.mov",
      //   text: "Power Graph",
      //   thumbnail: "/pics/3phase/video_thumbnail.png",
      // },
      {
        alt: "FFT Processing Graph",
        src: "/pics/3phase/3phase_watt_processing.png",
      },
    ],
    body: (
      <React.Fragment>
        Using the ADE9078, our group created a PCB and wrote firmware to create
        a small portable three phase wattmeter. Our demo setup was designed to
        detect faults in a three phase motor. By performing a Fast Fourier
        Transform (FFT) on the power data and looking for irregularites, we were
        able to determine if the motor was faulty.
        <br />
        <br />
        My primary contribution was configuring the waveform buffer firmware and
        creating a graphical interface for FFT.
      </React.Fragment>
    ),
  },
  {
    title: "The C-ing Hat",
    subtitle: "Hack UCI 2019",
    links: [
      { text: "GitHub", href: "https://github.com/ec965/the_all_C-ing_eye" },
      { text: "DevPost", href: "https://devpost.com/software/the-c-ing-hat" },
    ],
    images: [
      // {
      //   yt: "https://www.youtube.com/embed/SFQxsU8La4k",
      //   text: "Demo",
      //   thumbnail:
      //     "https://i.ytimg.com/vi/SFQxsU8La4k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNNePoW3PnWJ_bCpQLEPnvltOt8A",
      // },
      { src: "/pics/cing_hat/Cing_hat_2019.jpg", alt: "Side View" },
      { src: "/pics/cing_hat/Cing_hat_2019 (2).jpg", alt: "Topdown" },
    ],
    body: (
      <React.Fragment>
        A prototype hat for object detection. Checkout the DevPost for more
        information.
      </React.Fragment>
    ),
  },
  {
    title: "MicroMouse",
    subtitle: "January 2019 - March 2019",
    links: [
      { text: "GitHub", href: "https://github.com/ec965/micromouse_2019" },
    ],
    images: [
      { src: "/pics/micromouse/micromosue_2019.JPG", alt: "Micromouse" },
      {
        src: "/pics/micromouse/labeled_top_down_micromouse_2019.png",
        alt: "Micromouse",
      },
    ],
    body: (
      <React.Fragment>
        MicroMouse is a world wide competition in the promotion of autonomous
        vehicles. Using IR transcievers to detect distance from walls, the mouse
        can navigate through a maze using it&apos;s microcontroller
        &quot;brain&quot;.
      </React.Fragment>
    ),
  },
];
