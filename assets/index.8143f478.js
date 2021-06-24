import{$ as e,A as t,q as o,r,G as a,S as i,a as s,L as n,b as l,H as c,c as p,R as m,d}from"./vendor.46cdeebe.js";const h={lrSpacing:"10vw",colors:{main:"#000",secondary:"#FFF",highlight:"#cf4868"},fontSize:{h1:"32px",h2:"26px",h3:"22px",p:"18px"},fontFamily:{monospace:'"Lucida Console", "Courier New", monospace',sansSerif:"Arial, Verdana, Helvetica"},screenSize:{mobile:"(max-width: 600px)",tablet:"(max-width: 1100px)"},hover:{opacity:"60%",time:"0.3s"}},u=(e,t)=>parseInt(e)-t+"px",g=e`
  body {
    color: ${e=>e.theme.colors.main};
    background-color: ${e=>e.theme.colors.secondary};
    font-family: ${e=>e.theme.fontFamily.sansSerif};
    letter-spacing: 0.5px;
    line-height: 1.2;
    padding-left: ${e=>e.theme.lrSpacing};
    padding-right: ${e=>e.theme.lrSpacing};
  }
  p, a {
    font-size: ${e=>e.theme.fontSize.p};
  }
  a {  
    color: ${e=>e.theme.colors.highlight};
    text-decoration: none;
    transition: ${e=>e.theme.hover.time};

    &:hover {
      transition: ${e=>e.theme.hover.time};
      opacity: ${e=>e.theme.hover.opacity};
    }
  }
  h1, h2, h3 {
    font-weight: 600;
  }
  h1 {
    font-size: ${e=>e.theme.fontSize.h1};
  }
  h2 {
    font-size: ${e=>e.theme.fontSize.h2};
  }
  h3 {
    font-size: ${e=>e.theme.fontSize.h3};
  }

  @media ${e=>e.theme.screenSize.tablet} {
    h1{
      font-size: ${e=>u(e.theme.fontSize.h1,4)};
    }
    h2 {
      font-size: ${e=>u(e.theme.fontSize.h2,4)};
    }
    h3 {
      font-size: ${e=>u(e.theme.fontSize.h3,4)};
    }
  }

  @media ${e=>e.theme.screenSize.mobile} {
    body {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`,f=t`
  display: flex;
  justify-content: center;
  align-items: center;
`,b=t`
  overflow: auto;
  &::before,
  &::after {
    content: "";
    flex: 1;
  }
`,x=t`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,y=o.a`
  ${f}
  flex-direction: row;
`,w=({href:e})=>r.exports.createElement(y,{href:e},r.exports.createElement(a,null),r.exports.createElement("p",null,"Source Code")),E=o.footer`
  ${x}
  padding-top: 9px;
  padding-bottom: 9px;

  @media ${e=>e.theme.screenSize.mobile} {
    justify-content: center;
  }
`,k=o.div`
  display: flex;
  align-items: flex-end;
  width: 200px;
  justify-content: ${e=>e.left?"flex-start":e.right?"flex-end":"center"};
  & svg {
    margin-left: ${e=>e.right?"12px":"0px"};
    margin-right: ${e=>e.left?"6px":"0px"};
    width: 24px;
    height: 24px;
  }
  @media ${e=>e.theme.screenSize.mobile} {
    display: ${e=>e.mobileHide?"none":"flex"};
  }
`,P=()=>r.exports.createElement(E,null,r.exports.createElement(k,{left:!0,mobileHide:!0},r.exports.createElement("span",{title:"Source Code"},r.exports.createElement(w,{href:"https://github.com/ec965/ec965.github.io"}))),r.exports.createElement(k,null,r.exports.createElement("p",null,"Enoch Chau © 2021")),r.exports.createElement(k,{right:!0,mobileHide:!0},r.exports.createElement("a",{href:"https://github.com/ec965",title:"Github"},r.exports.createElement(i,null)),r.exports.createElement("a",{href:"https://www.linkedin.com/in/enoch-chau-a2a522126/",title:"Linkedin"},r.exports.createElement(s,null)))),S=o.header`
  ${x}
  z-index: 1;
  position: sticky;
  top: 0;
  height: 3em;
  background-color: ${e=>e.theme.colors.secondary};

  @media ${e=>e.theme.screenSize.mobile} {
    position: static;
  }
`,v=o.nav`
  display: flex;
  font-family: ${e=>e.monospace?e.theme.fontFamily.monospace:e.theme.fontFamily.sansSerif};

  & a {
    margin-left: 12px;
  }
`,I=()=>r.exports.createElement(S,{id:"header"},r.exports.createElement(v,null,r.exports.createElement("h1",null,"Enoch Chau")),r.exports.createElement(v,{monospace:!0},r.exports.createElement(n,{to:"/"},r.exports.createElement("h2",null,"Projects")),r.exports.createElement(n,{to:"/about"},r.exports.createElement("h2",null,"About")))),C=t`
  width: calc(40vw - 150px);

  @media ${e=>e.theme.screenSize.tablet} {
    width: ${"500px"};
  }

  @media ${e=>e.theme.screenSize.mobile} {
    width: ${"300px"};
  }
`,G=o.div`
  display: flex;
  flex-direction: row;
  padding-right: 0px;
  padding-top: 6px;
  align-items: center;
  & img {
    margin-bottom: 0px;
    margin-right: 6px;
  }
  ${C}
  ${b}
`,_=o.img`
  width: 90px;
  height: 60px;
  border-radius: 5px;
  object-fit: cover;
  opacity: ${e=>e.theme.hover.opacity};
  transition: ${e=>e.theme.hover.time};
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: ${e=>e.theme.hover.time};
  }
`,F=o.article`
  ${f}
  flex-direction: column;
`,M=o.img`
  padding-left: 3px;
  padding-right: 3px;
  ${C}
`,T=t`
  ${C}
  object-fit: cover;
  transition: 0.2s;
  display: block;
  height: 100%;
`,$=o.video`
  ${T}
`,j=o.div`
  ${T}
  padding-bottom: 56.25%;
  position: relative;

  & iframe {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`,B=o.div`
  flex-direction: column;
  ${f}
  & p {
    font-family: ${e=>e.theme.fontFamily.monospace};
    padding-top: 9px;
  }
`,A=({media:e})=>{const[t,o]=r.exports.useState(e.length>0?e[0]:{src:"",alt:"N/A"});return r.exports.createElement(F,null,r.exports.createElement(B,null,"alt"in t?r.exports.createElement(M,{src:t.src,alt:t.alt}):t.src.includes("youtube.com")?r.exports.createElement(j,null,r.exports.createElement("iframe",{title:t.title,src:t.src,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):r.exports.createElement($,{controls:!0},r.exports.createElement("source",{src:t.src})),r.exports.createElement("p",null,"alt"in t?t.alt:t.title)),e.length>1&&r.exports.createElement(G,null,e.map((e=>{const t="thumbnail"in e?e.thumbnail:e;return r.exports.createElement(_,{key:t.src,src:t.src,alt:t.alt,onClick:()=>o(e)})}))))},J=o.img`
  width: ${e=>e.width||""};
  height: ${e=>e.height||""};
  filter: hue-rotate(123deg);
`,R=({width:e,height:t})=>r.exports.createElement(J,{width:e||"",height:t||"",src:"./pics/logos/mountainproject.png",alt:"mountain project"}),z=o.article`
  & header {
    padding-bottom: 5px;
    & h2 {
      padding-bottom: 5px;
    }
  }
  & p {
    text-align: justify;
  }
`,H=o.div`
  display: flex;
  flex-direction: row;
  & a {
    margin-right: 12px;
  }
  & svg {
    padding-bottom: 3px;
    width: 24px;
    height: 24px;
  }
`,D=({links:e,title:t,subtitle:o,body:a})=>r.exports.createElement(z,null,r.exports.createElement("header",null,r.exports.createElement("h1",null,t),r.exports.createElement("h2",null,o),r.exports.createElement(H,null,e.map((e=>r.exports.createElement("a",{key:e.href,href:e.href,title:e.text},"github"===e.text.toLowerCase()?r.exports.createElement(i,null):"linkedin"===e.text.toLowerCase()?r.exports.createElement(s,null):"mountainproject"===e.text.toLowerCase()?r.exports.createElement(R,{width:"24px"}):r.exports.createElement("h3",null,e.text)))))),r.exports.createElement("section",null,"string"==typeof a?a.split("\n").map(((e,t,o)=>t!==o.length-1?r.exports.createElement(r.exports.Fragment,{key:t},r.exports.createElement("p",null,e),r.exports.createElement("br",null)):r.exports.createElement("p",{key:t},e))):r.exports.createElement("p",null,a))),L=o.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & ${z} {
    padding-left: 10px;
    width: 40vw;
  }

  & ${F} {
    padding-right: 10px;
  }

  @media ${e=>e.theme.screenSize.tablet} {
    flex-direction: column;
    justify-content: center;
    & ${z} {
      padding-left: 0px;
      width: 100%;
    }

    & ${F} {
      padding-right: 0px;
      padding-bottom: 10px;
    }
  }
`,W=({data:e})=>r.exports.createElement(L,null,r.exports.createElement(A,{media:e.media}),r.exports.createElement(D,{title:e.title,body:e.body,subtitle:e.subtitle,links:e.links})),U=[{title:"Mosaic",subtitle:"January 2021 - February 2021",links:[{text:"GitHub",href:"https://github.com/ec965/mosaic"},{text:"Demo",href:"https://mosaiorama.herokuapp.com/"}],media:[{src:"/pics/mosaic/image_editor.png",alt:"Image Editor"},{src:"/pics/mosaic/feed.png",alt:"Content Feed"},{src:"/pics/mosaic/login.png",alt:"Login Form"},{src:"/pics/mosaic/post.png",alt:"Post with Comments"},{src:"/pics/mosaic/profile.png",alt:"User Profile"},{src:"/pics/mosaic/random_editor.png",alt:"Random Editor"}],body:"Mosaic is a user based full stack web app made using MongoDB, Express.js, Node.js and React.js. On Mosaic, you can create mosaic style images from a base image or from randomly generated rgb pixel values.\nMy inspiration was to make something artistic using only CSS and HTML elements. I considered using the HTML canvas element but instead went with using div elements because of it's customizability with CSS.\nIn the database, the mosaics are represented as a 2D array of RGB pixel objects with other customization data. I originally chose to use PostgreSQL but that was restrictive on adding more customization options for the mosaics. Using MongoDB allows me to continue to expand options and tools for the mosaics without having to overhaul the databse.\nTo implement users, I used JSON web tokens (JWT) to protect client side routes and API end points from unauthorized users. Local storage and session storage hold the JWT on the client side. Using local storage allows me to parse the JWT to personalize content according to the current users information. I considered using cookies to store the JWT but then I wouldn't be able to safely access the JWT on the client side. Also I don't want to get sued by the EU."},{title:"MCutie",subtitle:"January 2021 - February 2021",links:[{text:"GitHub",href:"https://github.com/ec965/MCutie/"},{text:"Demo",href:"https://m-cutie.herokuapp.com/"}],media:[{src:"/pics/mcutie/dashboard.png",alt:"MQTT Dashboard"},{src:"/pics/mcutie/graph.png",alt:"Live Websocket Graph"}],body:"MCutie is a web app that provides logging and real time data graphs for MQTT sensor data. Building off of Esp Temp, I'm planning to build more IoT sensor for home automation. I wanted a dashboard so that I could log data and monitor my sensors. My initial idea was to write a front-end client to interface with a MQTT broker websocket, but then I wouldn't be able to log messages. To both log messages and see real time data, I used a Raspberry Pi as a proxy server. The Pi logs messages into a database and publish relevant messages over a websocket. The client can also use the websocket to publish MQTT messages to the sensors. In addition to the websocket, I also made a REST API for non-live data analysis.\nI've wanted to learn backend web development for some time. This project allowed me to pick up Node, Express, and SQLite3 with Sequelize so I'd call it fairly succesful. If you're interested in learning more about MCutie, there's a detailed write up on the GitHub repository.\nI've also ported the project over to PostgreSQL for a cloud deployment on Heroku. Check out the demo!"},{title:"Esp Temp",subtitle:"January 2021",links:[{text:"GitHub",href:"https://github.com/ec965/esp-temp"}],media:[{src:"/pics/iot_temp/perfboard_front.JPG",alt:"Esp Temp"},{src:"/pics/iot_temp/perfboard_back.JPG",alt:"Hand wiring is fun, right..."},{src:"/pics/iot_temp/breadboard.JPG",alt:"Breadboarding"}],body:"Recently, I made an IoT temperature probe. It shows data physically over a seven segment display but it can also stream data over WiFi using MQTT. At first I didn't really know what I could use it for, but it's come in handy for MQTT testing. The probe gives me an easy way to start an MQTT publisher. I mean, I could just write a script to do that, but that's not cool. Besides, hand wiring is fun... right?"},{title:"Macro Pad",subtitle:"November 2020",links:[{text:"GitHub",href:"https://github.com/ec965/dropout-numpad"}],media:[{src:"/pics/macropad/completed_dropout.jpg",alt:"macropad"},{src:"/pics/macropad/rev0.5.jpg",alt:"Rev 0.5"},{src:"/pics/macropad/pcb-pretty.JPG",alt:"Rev 0.1 PCB with ProMicro and switches"},{src:"/pics/macropad/populated.JPG",alt:"Rev 0.1 Populated PCB"},{src:"/pics/macropad/pcb-top-down.JPG",alt:"Rev 0.1 PCB"},{src:"/pics/macropad/pcb_schem.png",alt:"Rev 0 CAD design"}],body:r.exports.createElement(r.exports.Fragment,null,"I can't quite remember how I got into mechanical keyboards... but they sure are pretty. I have to find ways to use my Electrical Engineering degree somehow, so I figured it'd be fun to make my own keyboard. I'm currently using a 60% keyboard and I was feeling the need for a numpad. My design uses a"," ",r.exports.createElement("a",{href:"https://www.sparkfun.com/products/12640"},"ProMicro")," as the controller because I wanted the whole thing to be relatively easy to hand solder. The ProMicro is also compatible with"," ",r.exports.createElement("a",{href:"https://github.com/qmk/qmk_firmware"},"QMK"),", an open source keyboard firmware.")},{title:"FK-2001",subtitle:"October 2020",links:[],media:[{src:"/pics/fk2001/fk-0.JPG",alt:"Focus FK-2001 (Asian 102 layout)"},{src:"/pics/fk2001/fk-5.JPG",alt:"The Chain of Adapters"},{src:"/pics/fk2001/fk-1.JPG",alt:"Out of the Case"},{src:"/pics/fk2001/fk-2.JPG",alt:"Keycaps Off"},{src:"/pics/fk2001/fk-3.JPG",alt:"Alps Keycaps"},{src:"/pics/fk2001/fk-4.JPG",alt:"Alps Style Switch"},{src:"/pics/fk2001/fk-7.JPG",alt:"C, D, G, V labels on the pcb"},{src:"/pics/fk2001/fk-6.JPG",alt:"The Setup"},{src:"/pics/fk2001/fk-8.JPG",alt:"Pro-Micro in Place"},{src:"/pics/fk2001/fk-9.JPG",alt:"USB Mini-B Port"},{src:"/pics/fk2001/fk-10.JPG",alt:"Restored FK-2001"}],body:r.exports.createElement(r.exports.Fragment,null,"I found a"," ",r.exports.createElement("a",{href:"https://deskthority.net/wiki/Focus_FK-2001"},"Focus FK-2001")," ","terminal keyboard in the garage. My dad first used it in the 90's when he started programming. It's honestly still pretty nice for being in storage for 10+ years.",r.exports.createElement("br",null),r.exports.createElement("br",null),"Initially, to connect the 5 pin DIN cable to my modern computer, I used a 5 pin DIN to PS/2 adapter and a PS/2 to USB adapter.",r.exports.createElement("br",null),r.exports.createElement("br",null),"First things first, I took it apart and cleaned it throughly. I dusted out the innards with an air duster and wiped down all the keycaps. I found that some of the keys (space and left ctrl) seemed to be double pressing. I desoldered and swapped the troublesome switches with working switches.",r.exports.createElement("br",null),r.exports.createElement("br",null),"I really like the beige retro color of tech from this time period. The switches are Alps SKCM whites or a clone, I'm not entirely sure.",r.exports.createElement("br",null),r.exports.createElement("br",null),"Since the adapter chain is bit unsightly, I decided to use a"," ",r.exports.createElement("a",{href:"https://www.sparkfun.com/products/12640"},"Pro-Micro "),"to adapt the keyboard to use USB. The pins of the original cable connector are labelled C, D, G, and V for clock, data, ground, and voltage respectivley. I connected these pins to the Pro-Micro's PD0, PD1, RAW, and GND, then I flashed the Pro-Micro with",r.exports.createElement("a",{href:"https://github.com/tmk/tmk_keyboard/tree/master/converter/ibmpc_usb"}," ","Hasu's terminal keyboard converter"),".",r.exports.createElement("br",null),r.exports.createElement("br",null),"Luckily, there was a hole in the back of the case that was just big enough for a USB mini port so I didn't have to do any drilling. I didn't have heat shrink at the time so I hotglued the wires for insulation and stability (don't worry, I soldered them first). I also used a stack of cardboard and electrical tape to support the Pro-Micro in the case. Not the prettiest solution, but no one's going to see it inside the case.")},{title:"Boulder Field",subtitle:"August 2020",links:[{text:"GitHub",href:"https://github.com/ec965/MP-Recs"},{text:"Demo",href:"https://ec965.github.io/MP-Recs/index.html"}],media:[{src:"/pics/boulderField/dataTable.png",alt:"Bouldering Suggestions"},{src:"/pics/boulderField/boulderField.png",alt:"Form"}],body:r.exports.createElement(r.exports.Fragment,null,"Find some bouldering projects near you. (Requires a Mountain Project account.) This idea came about as an exercise to learn React.")},{title:"Coffee Grams",subtitle:"March 2020 - June 2020, December 2020",links:[{text:"GitHub",href:"https://github.com/ec965/coffee_grams"}],media:[{src:"/pics/coffee_grams/pcb_rev2.jpg",alt:"PCB"},{src:"/pics/coffee_grams/3d_rev2.jpg",alt:"3-D Render of PCB"},{src:"/pics/coffee_grams/breadboard.JPG",alt:"Raspberry Pi Prototype"}],body:"IoT Coffee Scale PCB design and LAMP stack webapp."},{title:"GPS Sound Sensor",subtitle:"September 2019 - March 2020",links:[{text:"Project Site",href:"http://projects.eng.uci.edu/projects/2019-2020/gps-sound-sensor-rescue-assistance"}],media:[{src:"/pics/GPSSS/gpsss_vid.mp4",title:"Infomercial",thumbnail:{src:"/pics/GPSSS/video_thumbnail.png",alt:"gpsss demo video"}},{src:"/pics/GPSSS/GPSSS_1.jpg",alt:"GPSSS"},{alt:"Sensor Internals",src:"/pics/GPSSS/GPSSS_2.jpg"}],body:r.exports.createElement(r.exports.Fragment,null,"The GPSSS is a WiFi connected directional sensor based on the time delay of arrival algorthim for sound. My contributions include configuring WiFi connectivity between the sensor and android application. Special thanks to my teammates Minh Tam Chau, Sam Longo, and Kelwin Li.")},{title:"Water Cooler Buddy",subtitle:"California Plug Load Center: September 2019 - June 2020",links:[{href:"http://calplug.org/",text:"CalPlug"},{href:"https://www.calit2.uci.edu/",text:"CalIT2"}],media:[{alt:"Main and Interface PCB",src:"/pics/WCB/wcb_pcb.jpg"},{alt:"Watercooler",src:"/pics/WCB/WCB_outside.JPG"},{alt:"Demo User Interface",src:"/pics/WCB/WCB_fake_front.JPG"}],body:r.exports.createElement(r.exports.Fragment,null,"Water Cooler Buddy is an energy management system for a water cooler. Water Cooler Buddy controls it's sensors, relays, and user interface using an ESP32 microcontroller.",r.exports.createElement("br",null),r.exports.createElement("br",null),"My primary contribution was firmware development. I updated firmware for ESP32 implementation and created an RTOS scheduling system. I also assisted with PCB population and water cooler wiring.")},{title:"Scale Up",subtitle:"SD Hacks 2019",links:[{text:"GitHub",href:"https://github.com/ec965/smart_scale"},{text:"DevPost",href:"https://devpost.com/software/scale-up"}],media:[{src:"https://www.youtube.com/embed/G3OunuLPnXA",title:"Demo",thumbnail:{alt:"Scale Up Demo",src:"https://i.ytimg.com/vi/G3OunuLPnXA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCMlsjDf9e4NW0HvUQB-UBF4JSjQ"}},{src:"/pics/scale_up/hardware_all_view_labeled.JPG",alt:"Scale Up"}],body:r.exports.createElement(r.exports.Fragment,null,"Scale Up can calculate caloric data based on weight of foods. Google Vision was used to find food types while the USDA Nutrition API to find caloric information. Checkout the DevPost for more infromation.")},{title:"HC2: IoT Sensor",subtitle:"August 2019 - Novermber 2019",links:[{text:"GitHub",href:"https://github.com/ec965/HC2_arduino_python"}],media:[{src:"/pics/hc2.JPG",alt:"HC2, Moteino (LoRa), & Raspberry Pi"}],body:r.exports.createElement(r.exports.Fragment,null,"I created fimrware libraries in Python (for Raspberry Pi) and Arduino to interface with the industry standard Rotronics HC2 temperature and humidity sensor. I also designed a prototype IoT network for the HC2 sensor (currently a private repository). Connections include WiFi, Email, and LoRa.")},{title:"Projector Buddy",subtitle:"California Plug Load Center: March 2019 - June 2020",links:[{href:"http://calplug.org/",text:"CalPlug"},{href:"https://www.calit2.uci.edu/",text:"CalIT2"}],media:[{src:"/pics/projector_buddy/topdown.jpg",alt:"Topdown View"},{alt:"Side View",src:"/pics/projector_buddy/PIR_pic.jpg"}],body:r.exports.createElement(r.exports.Fragment,null,"Projector Buddy is an advanced energy system that controls a projectors electricity usage based on human precense in the room. Human activity is determined through light, sound, and motion. In order to preserve the projectors internal electronics and bulb, a soft shutdown is initiated using an IR blaster.",r.exports.createElement("br",null),r.exports.createElement("br",null),"My primary contribution was firmware development. I implemented freeRTOS firmware, updated the control algorithm, and created IR Reciever and IR Emitter functionality.")},{title:"3-phase Wattmeter",subtitle:"California Plug Load Center: March 2019 - June 2019",links:[{href:"https://github.com/CalPlug/ADE9078-3PhaseWattmeter",text:"GitHub"},{href:"http://calplug.org/",text:"CalPlug"},{href:"https://www.calit2.uci.edu/",text:"CalIT2"}],media:[{alt:"Demo Setup",src:"/pics/3phase/3phase_watt_demo.jpg"},{src:"/pics/3phase/3phasewatt_sin.mov",title:"Power Graph",thumbnail:{src:"/pics/3phase/video_thumbnail.png",alt:"power graph"}},{alt:"FFT Processing Graph",src:"/pics/3phase/3phase_watt_processing.png"}],body:r.exports.createElement(r.exports.Fragment,null,"Using the ADE9078, our group created a PCB and wrote firmware to create a small portable three phase wattmeter. Our demo setup was designed to detect faults in a three phase motor. By performing a Fast Fourier Transform (FFT) on the power data and looking for irregularites, we were able to determine if the motor was faulty.",r.exports.createElement("br",null),r.exports.createElement("br",null),"My primary contribution was configuring the waveform buffer firmware and creating a graphical interface for FFT.")},{title:"The C-ing Hat",subtitle:"Hack UCI 2019",links:[{text:"GitHub",href:"https://github.com/ec965/the_all_C-ing_eye"},{text:"DevPost",href:"https://devpost.com/software/the-c-ing-hat"}],media:[{src:"https://www.youtube.com/embed/SFQxsU8La4k",title:"Demo",thumbnail:{alt:"c-ing hat demo",src:"https://i.ytimg.com/vi/SFQxsU8La4k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNNePoW3PnWJ_bCpQLEPnvltOt8A"}},{src:"/pics/cing_hat/Cing_hat_2019.jpg",alt:"Side View"},{src:"/pics/cing_hat/Cing_hat_2019 (2).jpg",alt:"Topdown"}],body:r.exports.createElement(r.exports.Fragment,null,"A prototype hat for object detection. Checkout the DevPost for more information.")},{title:"MicroMouse",subtitle:"January 2019 - March 2019",links:[{text:"GitHub",href:"https://github.com/ec965/micromouse_2019"}],media:[{src:"/pics/micromouse/micromosue_2019.JPG",alt:"Micromouse"},{src:"/pics/micromouse/labeled_top_down_micromouse_2019.png",alt:"Micromouse"}],body:r.exports.createElement(r.exports.Fragment,null,'MicroMouse is a world wide competition in the promotion of autonomous vehicles. Using IR transcievers to detect distance from walls, the mouse can navigate through a maze using it\'s microcontroller "brain".')}],N=o.div`
  padding-top: 20px;
  padding-bottom: 20px;
  @media ${e=>e.theme.screenSize.tablet} {
    border-bottom: 1px solid ${e=>e.theme.colors.highlight};
  }
`,Q=()=>r.exports.createElement(r.exports.Fragment,null,U.map((e=>r.exports.createElement(N,{key:e.title,id:e.title.split(" ").join("")||void 0},r.exports.createElement(W,{data:e}))))),q=()=>r.exports.createElement(W,{data:{title:"Hello!",subtitle:"I'm Enoch.",links:[{href:"https://github.com/ec965",text:"Github"},{href:"https://linkedin.com/in/enoch-chau-a2a522126",text:"Linkedin"},{href:"https://www.mountainproject.com/user/200380484/enoch-chau",text:"MountainProject"},{text:"Resume",href:"./public_resume.pdf"}],media:[{src:"pics/IMG_2745.JPG",alt:"Red Rock, Las Vegas, NV 2019"}],body:"I'm interested in electronics and web development. Right now, I work at GoSite building software to help small buisnesses. When I'm not in front of the computer, I like to cook, climb rocks, and mess with keyboards."}}),O=()=>r.exports.createElement(l,{theme:h},r.exports.createElement(g,null),r.exports.createElement(c,null,r.exports.createElement(I,null),r.exports.createElement(p,null,r.exports.createElement(m,{path:"/about"},r.exports.createElement(q,null)),r.exports.createElement(m,{path:"/"},r.exports.createElement(Q,null))),r.exports.createElement(P,null)));d.render(r.exports.createElement(O,null),document.getElementById("root"));
