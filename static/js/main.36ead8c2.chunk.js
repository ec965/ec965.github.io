(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(15),o=a.n(r),l=(a(22),a(23),function(e){return n.a.createElement("div",{className:"nav-bar "+e.className},e.children)}),c=function(e){return n.a.createElement("div",{className:"nav-group "+e.className},e.children)},s=function(e){return n.a.createElement("div",{className:"nav-logo "+e.className},e.children)},m=function(e){return n.a.createElement("div",{className:"nav-item "+e.className},e.children)},u=function(e){return n.a.createElement("footer",{className:e.className},e.children)},p=function(e){return n.a.createElement("div",{className:e.className+" footer-group"},e.children)},d=function(e){return n.a.createElement("div",{onClick:e.onClick,className:e.className+" col"},e.children)},h=function(e){return n.a.createElement("div",{onClick:e.onClick,className:e.className+" row"},e.children)},g=function(e){return n.a.createElement("div",{onClick:e.onClick,className:e.className+" page"},e.children)},b=a(6),f=function(e){return n.a.createElement("button",{type:"button",className:e.className,onClick:e.onClick||function(){window.open(e.link)}},e.children)},w=function(e){return n.a.createElement("video",{onClick:e.onClick,controls:!e.noControls,className:"".concat(e.className," video")},n.a.createElement("source",{src:e.src}))},E=function(e){return n.a.createElement("iframe",{onClick:e.onClick,className:"video ".concat(e.className),title:"youtube video",src:e.src,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},y=function(e){return n.a.createElement(n.a.Fragment,null,e.media.img&&n.a.createElement("img",{onClick:e.onClick,className:e.className,src:e.media.img,alt:"img "+e.media.text}),e.media.vid&&n.a.createElement(w,{onClick:e.onClick,className:e.className,src:e.media.vid,alt:"vid "+e.media.text}),e.media.yt&&n.a.createElement(E,{onClick:e.onClick,className:e.className,src:e.media.yt,alt:"yt "+e.media.text}))},k=function(e){var t=Object(i.useState)(e.media[0]),a=Object(b.a)(t,2),r=a[0],o=a[1],l=Object(i.useState)(!1),c=Object(b.a)(l,2),s=c[0],m=c[1],u=function(t){o(e.media[t.target.name]),m(!1)},p=e.media.map((function(e,t){return n.a.createElement(d,{key:t},e.img&&n.a.createElement("img",{onClick:u,className:"gallery-audience",src:e.img,alt:e.img,name:t}),e.thumbnail&&n.a.createElement("img",{onClick:u,className:"gallery-audience",src:e.thumbnail,alt:e.text,name:t}))}));return n.a.createElement(d,{className:"gallery"},n.a.createElement("div",{className:"stage-frame"},n.a.createElement(y,{media:r,className:s?"stage-zoom":"stage",onClick:function(e){m(!s)}})),n.a.createElement("p",{className:"caption"},r.text),n.a.createElement(h,null,e.media.length>1&&p))},C=function(e){return n.a.createElement(n.a.Fragment,null,e.buttons.map((function(e,t){return n.a.createElement(f,{className:e.className+" courier",key:t,link:e.link},e.text)})))},P=function(e){return n.a.createElement(h,{className:e.className+" project",onClick:e.onClick},e.media&&n.a.createElement(k,{media:e.media}),n.a.createElement(d,{className:"project-text"},n.a.createElement("h3",null,e.title),n.a.createElement("h6",{className:"courier"},e.subtitle),e.children,n.a.createElement(h,{className:"buttons"},e.buttons&&n.a.createElement(C,{buttons:e.buttons}),e.icons)))},x=function(e){return n.a.createElement(d,{className:"blog",onClick:e.onClick},e.children)},I=function(e){var t=Object(i.useState)(!1),a=Object(b.a)(t,2),r=a[0],o=a[1],l=function(e){o(!r)};return n.a.createElement(d,null,n.a.createElement(P,{title:e.title,subtitle:e.subtitle,media:e.media,icons:r?n.a.createElement("i",{class:"link footer-logo fas fa-arrow-circle-up",onClick:l}):n.a.createElement("i",{className:"link footer-logo fas fa-arrow-circle-down",onClick:l})},e.abstract),r&&n.a.createElement(x,null,e.children))},v=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"I found a ",n.a.createElement("a",{href:"https://deskthority.net/wiki/Focus_FK-2001"},"Focus FK-2001")," terminal keyboard in the garage. My dad first used it in the 90's when he started programming. It's honestly still pretty nice for being in storage for 10+ years."),n.a.createElement(k,{media:[{img:"/pics/fk2001/fk-0.JPG",text:"Focus FK-2001 (Asian 102 layout)"}]}),n.a.createElement("p",null,"To connect the 5 pin DIN cable to my modern computer, I used a 5 pin DIN to PS/2 adapter and a PS/2 to USB adapter. Looks kinda janky, but I'll fix that in a sec."),n.a.createElement(k,{media:[{img:"/pics/fk2001/fk-5.JPG",text:"The Chain of Adapters"}]}),n.a.createElement("p",null,"First things first, I took it apart and cleaned it throughly. I dusted out the innards with an air duster and wiped down all the keycaps. I found that some of the keys (space and left ctrl) seemed to be double pressing. I desoldered and swapped the troublesome switches with working switches."),n.a.createElement(k,{media:[{img:"/pics/fk2001/fk-1.JPG",text:"Out of the Case"},{img:"/pics/fk2001/fk-2.JPG",text:"Keycaps Off"}]}),n.a.createElement("p",null,"I really like the beige retro color of tech from this time period. The switches are Alps SKCM whites or a clone, I'm not entirely sure."),n.a.createElement(k,{media:[{img:"/pics/fk2001/fk-3.JPG",text:"Alps Keycaps"},{img:"/pics/fk2001/fk-4.JPG",text:"Alps Style Switch"}]}),n.a.createElement("p",null,"Since the adapter chain is bit unsightly, I decided to use a ",n.a.createElement("a",{href:"https://www.sparkfun.com/products/12640"},"Pro-Micro "),"to adapt the keyboard to use USB. The pins of the original cable connector are labelled C, D, G, and V for clock, data, ground, and voltage respectivley. I connected these pins to the Pro-Micro's PD0, PD1, RAW, and GND, then I flashed the Pro-Micro with",n.a.createElement("a",{href:"https://github.com/tmk/tmk_keyboard/tree/master/converter/ibmpc_usb"}," Hasu's terminal keyboard converter"),"."),n.a.createElement(k,{media:[{img:"/pics/fk2001/fk-6.JPG",text:"The Setup"},{img:"/pics/fk2001/fk-7.JPG",text:"C, D, G, V labels on the pcb"}]}),n.a.createElement("p",null,"Luckily, there was a hole in the back of the case that was just big enough for a USB mini port so I didn't have to do any drilling. I didn't have heat shrink at the time so I hotglued the wires for insulation and stability (don't worry, I soldered them first). I also used a stack of cardboard and electrical tape to support the Pro-Micro in the case. Not the prettiest solution, but no one's going to see it inside the case."),n.a.createElement(k,{media:[{img:"/pics/fk2001/fk-8.JPG",text:"Pro-Micro in Place"},{img:"/pics/fk2001/fk-9.JPG",text:"USB Mini-B Port"},{img:"/pics/fk2001/fk-10.JPG",text:"Restored FK-2001"}]}))},S="project",G=[{path:S+"/mcutie",img:"/pics/mcutie/dashboard.png",text:"2021",title:"MCutie",subtitle:"January 2021",buttons:[{text:"GitHub",link:"https://github.com/ec965/MCutie/"}],media:[{img:"/pics/mcutie/dashboard.png",text:"MQTT Dashboard"},{img:"/pics/mcutie/graph.png",text:"Live Websocket Graph"}],body:n.a.createElement("p",null,"MCutie is a web app that provides logging and real time data graphs for MQTT sensor data. Building off of Esp Temp, I'm planning to build more IoT sensor for home automation. I wanted a dashboard so that I could log data and monitor my sensors. My initial idea was to write a front-end client to interface with a MQTT broker websocket, but then I wouldn't be able to log messages. To both log messages and see real time data, I used a Raspberry Pi as a proxy. The Pi logs messages into a database and publish relevant messages over a websocket.",n.a.createElement("br",null),n.a.createElement("br",null),"I've wanting to learn backend web development for some time. This project helped me learn Node, Express, and SQLite3 with Sequelize so I'd call it fairly succesful. If you're interested in learning more about MCutie, there's a detailed write up on the GitHub repository.")},{path:S+"/espTemp",img:"/pics/iot_temp/perfboard_front.JPG",text:"2021",title:"Esp Temp",subtitle:"January 2021",buttons:[{text:"GitHub",link:"https://github.com/ec965/esp-temp"}],media:[{img:"/pics/iot_temp/perfboard_front.JPG",text:"Esp Temp"},{img:"/pics/iot_temp/perfboard_back.JPG",text:"Hand wiring is fun, right..."},{img:"/pics/iot_temp/breadboard.JPG",text:"Breadboarding"}],body:n.a.createElement("p",null,"Recently, I made an IoT temperature probe. It shows data physically over a seven segment display but it can also stream data over WiFi using MQTT. At first I didn't really know what I could use it for, but it's come in handy for MQTT testing. The probe gives me an easy way to start an MQTT publisher. I mean, I could just write a script to do that, but that's not cool. Besides, hand wiring is fun... right?")},{path:S+"/macropad",img:"/pics/macropad/pcb-pretty.JPG",text:"2020",title:"Macro Pad",subtitle:"November 2020",buttons:[{text:"GitHub",link:"https://github.com/ec965/dropout-numpad"}],media:[{img:"/pics/macropad/rev0.5.jpg",text:"Rev 0.5"},{img:"/pics/macropad/pcb-pretty.JPG",text:"Rev 0.1 PCB with ProMicro and switches"},{img:"/pics/macropad/populated.JPG",text:"Rev 0.1 Populated PCB"},{img:"/pics/macropad/pcb-top-down.JPG",text:"Rev 0.1 PCB"},{img:"/pics/macropad/pcb_schem.png",text:"Rev 0 CAD design"}],body:n.a.createElement("p",null,"I can't quite remember how I got into mechanical keyboards... but they sure are pretty. With my background in electrical engineering, I figured it'd be fun to make my own keyboard. I'm currently using a 60% keyboard and I was feeling the need for a numpad. My design uses a ",n.a.createElement("a",{href:"https://www.sparkfun.com/products/12640"},"ProMicro")," as the controller because I wanted the whole thing to be relatively easy to hand solder. The ProMicro is also compatible with ",n.a.createElement("a",{href:"https://github.com/qmk/qmk_firmware"},"QMK"),", an open source keyboard firmware. Right now, I'm waiting for switches to arrive.")},{path:S+"/fk2001",img:"/pics/fk2001/fk-1.JPG",title:"FK-2001",subtitle:"October 2020",text:"2020",custom:n.a.createElement(I,{title:"FK-2001",subtitle:"October 2020",media:[{img:"/pics/fk2001/fk-1.JPG",text:"FK-2001"}],abstract:n.a.createElement("p",null,"Updating an ancient keyboard for the modern era. Click the arrow to read more.")},n.a.createElement(v,null))},{path:S+"/boulderField",img:"/pics/boulderField/dataTable.png",text:"2020",title:"Boulder Field",subtitle:"August 2020",buttons:[{text:"GitHub",link:"https://github.com/ec965/MP-Recs"},{text:"Demo",link:"https://ec965.github.io/MP-Recs/index.html"}],media:[{img:"/pics/boulderField/dataTable.png",text:"Bouldering Suggestions"},{img:"/pics/boulderField/boulderField.png",text:"Form"}],body:n.a.createElement("p",null,"Find some bouldering projects near you. (Requires a Mountain Project account.) This idea came about as an exercise to learn React.")},{path:S+"/coffeeGrams",img:"/pics/coffee_grams/3d_rev2.jpg",text:"2020",title:"Coffee Grams",subtitle:"March 2020 - June 2020, December 2020",buttons:[{text:"GitHub",link:"https://github.com/ec965/coffee_grams"}],media:[{img:"/pics/coffee_grams/pcb_rev2.jpg",text:"PCB"},{img:"/pics/coffee_grams/3d_rev2.jpg",text:"3-D Render of PCB"},{img:"/pics/coffee_grams/breadboard.JPG",text:"Raspberry Pi Prototype"}],body:n.a.createElement("p",null,"IoT Coffee Scale PCB design and LAMP stack webapp. ",n.a.createElement("a",{href:"./cg_example/Coffee Grams.html"},"Click here")," for a static example of the webapp.")},{path:S+"/GPSSS",img:"/pics/GPSSS/GPSSS_1.jpg",text:"Senior Design 2020",title:"GPS Sound Sensor",subtitle:"September 2019 - March 2020",buttons:[{text:"GitHub",link:"https://github.com/ec965/coffee_grams"}],media:[{vid:"/pics/GPSSS/gpsss_vid.mp4",text:"Infomercial",thumbnail:"/pics/GPSSS/video_thumbnail.png"},{img:"/pics/GPSSS/GPSSS_1.jpg",text:"GPSSS"},{text:"Sensor Internals",img:"/pics/GPSSS/GPSSS_2.jpg"}],body:n.a.createElement("p",null,"The GPSSS is a WiFi connected directional sensor based on the time delay of arrival algorthim for sound. My contributions include configuring WiFi connectivity between the sensor and android application. Special thanks to my teammates Minh Tam Chau, Sam Longo, and Kelwin Li.")},{path:S+"/waterCoolerBuddy",img:"/pics/WCB/wcb_pcb.jpg",title:"Water Cooler Buddy",text:"Calplug 2019",subtitle:"California Plug Load Center: September 2019 - June 2020",buttons:[{link:"http://calplug.org/",text:"CalPlug"},{link:"https://www.calit2.uci.edu/",text:"CalIT2"}],media:[{text:"Main and Interface PCB",img:"/pics/WCB/wcb_pcb.jpg"},{text:"Watercooler",img:"/pics/WCB/WCB_outside.JPG"},{text:"Demo User Interface",img:"/pics/WCB/WCB_fake_front.JPG"}],body:n.a.createElement("p",null,"Water Cooler Buddy is an energy management system for a water cooler. Water Cooler Buddy controls it's sensors, relays, and user interface using an ESP32 microcontroller.",n.a.createElement("br",null),n.a.createElement("br",null),"My primary contribution was firmware development. I updated firmware for ESP32 implementation and created an RTOS scheduling system. I also assisted with PCB population and water cooler wiring.")},{path:S+"/scaleUp",img:"/pics/scale_up/hardware_all_view.JPG",title:"Scale Up",text:"SD Hacks 2019",subtitle:"SD Hacks 2019",buttons:[{text:"GitHub",link:"https://github.com/ec965/smart_scale"},{text:"DevPost",link:"https://devpost.com/software/scale-up"}],media:[{yt:"https://www.youtube.com/embed/G3OunuLPnXA",text:"Demo",thumbnail:"https://i.ytimg.com/vi/G3OunuLPnXA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCMlsjDf9e4NW0HvUQB-UBF4JSjQ"},{img:"/pics/scale_up/hardware_all_view_labeled.JPG",text:"Scale Up"}],body:n.a.createElement("p",null,"Scale Up can calculate caloric data based on weight of foods. Google Vision was used to find food types while the USDA Nutrition API to find cloric information. Checkout the DevPost for more infromation.")},{path:S+"/hc2",img:"/pics/hc2.JPG",title:"HC2: IoT Sensor",text:"2019",subtitle:"August 2019 - Novermber 2019",buttons:[{text:"GitHub",url:"https://github.com/ec965/HC2_arduino_python"}],media:[{img:"/pics/hc2.JPG",text:"HC2, Moteino (LoRa), & Raspberry Pi"}],body:n.a.createElement("p",null,"I created fimrware libraries in Python (for Raspberry Pi) and Arduino to interface with the industry standard Rotronics HC2 temperature and humidity sensor. I also designed a prototype IoT network for the HC2 sensor (currently a private repository). Connections include WiFi, Email, and LoRa.")},{path:S+"/projectorBuddy",img:"/pics/projector_buddy/image.png",title:"Projector Buddy",text:"Calplug 2019",subtitle:"California Plug Load Center: March 2019 - June 2020",buttons:[{link:"http://calplug.org/",text:"CalPlug"},{link:"https://www.calit2.uci.edu/",text:"CalIT2"}],media:[{img:"/pics/projector_buddy/topdown.jpg",text:"Topdown View"},{text:"Side View",img:"/pics/projector_buddy/PIR_pic.jpg"}],body:n.a.createElement("p",null,"Projector Buddy is an advanced energy system that controls a projectors electricity usage based on human precense in the room. Human activity is determined through light, sound, and motion. In order to preserve the projectors internal electronics and bulb, a soft shutdown is initiated using an IR blaster.",n.a.createElement("br",null),n.a.createElement("br",null),"My primary contribution was firmware development. I implemented freeRTOS firmware, updated the control algorithm, and created IR Reciever and IR Emitter functionality.")},{path:S+"/polyPhase",img:"/pics/3phase/3phase_watt_demo.jpg",title:"3-phase Wattmeter",text:"Calplug 2019",subtitle:"California Plug Load Center: March 2019 - June 2019",buttons:[{link:"https://github.com/CalPlug/ADE9078-3PhaseWattmeter",text:"GitHub"},{link:"http://calplug.org/",text:"CalPlug"},{link:"https://www.calit2.uci.edu/",text:"CalIT2"}],media:[{text:"Demo Setup",img:"/pics/3phase/3phase_watt_demo.jpg"},{vid:"/pics/3phase/3phasewatt_sin.mov",text:"Power Graph",thumbnail:"/pics/3phase/video_thumbnail.png"},{text:"FFT Processing Graph",img:"/pics/3phase/3phase_watt_processing.png"}],body:n.a.createElement("p",null,"Using the ADE9078, our group created a PCB and wrote firmware to create a small portable three phase wattmeter. Our demo setup was designed to detect faults in a three phase motor. By performing a Fast Fourier Transform (FFT) on the power data and looking for irregularites, we were able to determine if the motor was faulty.",n.a.createElement("br",null),n.a.createElement("br",null),"My primary contribution was configuring the waveform buffer firmware and creating a graphical interface for FFT.")},{path:S+"/cingHat",img:"/pics/cing_hat/Cing_hat_2019.jpg",title:"The C-ing Hat",text:"Hack UCI 2019",subtitle:"Hack UCI 2019",buttons:[{text:"GitHub",link:"https://github.com/ec965/the_all_C-ing_eye"},{text:"DevPost",link:"https://devpost.com/software/the-c-ing-hat"}],media:[{yt:"https://www.youtube.com/embed/SFQxsU8La4k",text:"Demo",thumbnail:"https://i.ytimg.com/vi/SFQxsU8La4k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNNePoW3PnWJ_bCpQLEPnvltOt8A"},{img:"/pics/cing_hat/Cing_hat_2019.jpg",text:"Side View"},{img:"/pics/cing_hat/Cing_hat_2019 (2).jpg",text:"Topdown"}],body:n.a.createElement("p",null,"A prototype hat for object detection. Checkout the DevPost for more information.")},{path:S+"/micromouse",img:"/pics/micromouse/micromosue_2019.JPG",title:"MicroMouse",text:"2019",subtitle:"January 2019 - March 2019",buttons:[{text:"GitHub",link:"https://github.com/ec965/micromouse_2019"}],media:[{img:"/pics/micromouse/micromosue_2019.JPG",text:"Micromouse"},{img:"/pics/micromouse/labeled_top_down_micromouse_2019.png",text:"Micromouse"}],body:n.a.createElement("p",null,'MicroMouse is a world wide competition in the promotion of autonomous vehicles. Using IR transcievers to detect distance from walls, the mouse can navigate through a maze using it\'s microcontroller "brain".')}],_=function(e){var t=G.map((function(e,t){return n.a.createElement(h,null,e.custom?e.custom:n.a.createElement(P,{title:e.title,subtitle:e.subtitle,media:e.media,buttons:e.buttons},e.body),t!==G.length-1&&n.a.createElement("div",{className:"bottom-border"}))}));return n.a.createElement(d,null,t)},N=function(e){return n.a.createElement(g,null,n.a.createElement(_,null))},A=function(e){return n.a.createElement(h,null,n.a.createElement("a",{href:"https://github.com/ec965"},n.a.createElement("i",{className:"footer-logo fab fa-github"})),n.a.createElement("a",{href:"https://linkedin.com/in/enoch-chau-a2a522126"},n.a.createElement("i",{className:"footer-logo fab fa-linkedin-in"})),n.a.createElement("a",{href:"https://www.mountainproject.com/user/200380484/enoch-chau"},n.a.createElement("img",{className:"footer-logo",src:"/pics/logos/mountainproject.png",alt:"mountain_project"})),n.a.createElement("a",{href:"mailto:"+e.email,className:"courier"},"enoch965@gmail.com"))},B=function(e){return n.a.createElement(g,null,n.a.createElement(P,{title:"Hello!",subtitle:"I'm Enoch",media:[{img:"pics/IMG_2745.JPG",text:"Red Rock, Las Vegas, NV 2019"}],icons:n.a.createElement(A,null),buttons:[{text:"Resume",link:"./public_resume.pdf"}]},n.a.createElement("p",null,"I'm interested in electronics, firmware, web dev, and IoT. I finished my bachelor's in Electrical Engineering at UC Irvine in June 2020. When I'm not in front of the computer, I like to cook, climb rocks, and mess with keyboards.")))},j=[{text:"Face 2018",img:"/pics/art/face.JPG"},{text:"Pot 2018",img:"/pics/art/pot.JPG"},{text:"Averii 2017",img:"/pics/art/averii.JPG"},{text:"Cooking with Blake and Kelwin: Ep3",yt:"https://www.youtube.com/embed/8HvNjPW5TXY",thumbnail:"https://i.ytimg.com/vi/kT8Op8jmf_M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHub3iTAxS7qrWt9361lGH2mKpbg"},{text:"Cooking with Blake and Kelwin: Ep4",yt:"https://www.youtube.com/embed/kT8Op8jmf_M",thumbnail:"https://i.ytimg.com/vi/8HvNjPW5TXY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBJN_dPsbIejhnARd8ZlddR8Yb9A"},{text:"Cooking with Blake and Kelwin: Ep2",yt:"https://www.youtube.com/embed/Ij89wI493EU",thumbnail:"https://i.ytimg.com/vi/JGY2peNQ_Q4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgYz3BAIIwxmOhc5jVvz6TbQe0bg"},{text:"Cooking with Blake and Kelwin: Ep1",yt:"https://www.youtube.com/embed/JGY2peNQ_Q4",thumbnail:"https://i.ytimg.com/vi/Ij89wI493EU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2UEGM0gk8JApMQPxb7PkprP3OHA"}],T=function(e){var t=Object(i.useState)(j[0]),a=Object(b.a)(t,2),r=a[0],o=a[1],l=function(e){o(j[e.target.name])},c=j.map((function(e,t){return n.a.createElement(d,{key:t},e.img&&n.a.createElement("img",{onClick:l,className:"gallery-audience",src:e.img,alt:e.img,name:t}),e.thumbnail&&n.a.createElement("img",{onClick:l,className:"gallery-audience",src:e.thumbnail,alt:e.text,name:t}))}));return n.a.createElement(g,{className:"art-gallery"},n.a.createElement(d,null,n.a.createElement(y,{className:"art-stage",media:r}),n.a.createElement("p",{className:"caption"},r.text),n.a.createElement(h,null,j.length>1&&c)))},M=a(9),F=a(1),J=function(e){return n.a.createElement(l,null,n.a.createElement(s,null,n.a.createElement(M.b,{to:"/"},n.a.createElement("h3",{className:"link"},"Enoch Chau"))),n.a.createElement(c,null,n.a.createElement(m,null,n.a.createElement(M.b,{to:"/about"},n.a.createElement("h4",{className:"link"},"About"))),n.a.createElement(m,null,n.a.createElement(M.b,{to:"/gallery"},n.a.createElement("h4",{className:"link"},"Gallery")))))},R=function(e){return n.a.createElement(F.c,null,n.a.createElement(F.a,{path:"/about"},n.a.createElement(B,null)),n.a.createElement(F.a,{path:"/gallery"},n.a.createElement(T,null)),n.a.createElement(F.a,{path:"/"},n.a.createElement(N,null)))},H=function(e){return n.a.createElement(u,null,n.a.createElement(p,{className:"right"},n.a.createElement("a",{className:"footer-text",href:"https://github.com/ec965/ec965.github.io"},"View this site's source code.")),n.a.createElement(p,null,n.a.createElement("p",{className:"footer-text"},"\xa9 Enoch Chau 2021")),n.a.createElement(p,{className:"left"},n.a.createElement("a",{href:"https://github.com/ec965"},n.a.createElement("i",{className:"footer-logo fab fa-github"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/enoch-chau-a2a522126/"},n.a.createElement("i",{className:"footer-logo fab fa-linkedin-in"}))))},q=function(e){return n.a.createElement(M.a,null,n.a.createElement(J,null),n.a.createElement(R,null),n.a.createElement(H,null))};o.a.render(n.a.createElement(q,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.36ead8c2.chunk.js.map