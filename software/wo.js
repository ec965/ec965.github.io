var start0_sound;
var start1_sound;
var move_sound;
var rest_sound;

var data = {
  sets:0,
  reps:0,
  active_time:0,
  rest_time:0,
  countdown:0
}

var started = 0;
var stopped = 0;
var in_progress = 0;
var reset = 1;

//from W3 school example sound code
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

//start button
function start(){
  //load sounds
  start0_sound = new sound("ready.mp3");
  start1_sound = new sound("set.mp3");
  move_sound = new sound("move.mp3");
  rest_sound = new sound("stop.mp3");

  if (started==0){
    if (reset==1){
      //load workout variables
      data.active_time = document.getElementById("active_time").value;
      data.rest_time = document.getElementById("rest_time").value;
      data.sets = document.getElementById("sets").value;
      data.reps = document.getElementById("reps").value;
      data.countdown = 3;
      reset=0;
    }
  }
  started=1;
  stopped=0;
  document.getElementById("stop").innerHTML="Stop";
  document.getElementById("stop").classList.remove("btn-primary");
  document.getElementById("stop").classList.add("btn-danger");
  in_progress=1;
  //start the workout
  count(data.sets,data.reps,data.active_time,data.rest_time,data.countdown);
}

//stop button
function stop(){
  if (stopped==0){
    if(started==1){
      rest_sound.play();
      document.getElementById("stop").innerHTML="Reset";
      document.getElementById("stop").classList.remove("btn-danger");
      document.getElementById("stop").classList.add("btn-primary");
      in_progress=0;
      started=0;
      stopped=1;
    }
  }
  else{
    document.getElementById("stop").innerHTML="Stop";
    document.getElementById("stop").classList.remove("btn-primary");
    document.getElementById("stop").classList.add("btn-danger");
    reset=1;
    document.getElementById("sets").innerHTML="Sets: ";
    document.getElementById("reps").innerHTML="Reps: ";
    document.getElementById("action").innerHTML="Chill.";
    document.getElementById("timer").innerHTML="0";
  }
}

//workout sets/reps/time counter
function count(sets, reps, active_time, rest_time, countdown){
  if (in_progress==0){
    data.sets = sets;
    data.reps = reps;
    data.active_time = active_time;
    data.rest_time = rest_time;
    data.countdown = countdown;
    return;
  }

  document.getElementById("set_count").innerHTML="Sets: "+String(sets);
  document.getElementById("rep_count").innerHTML="Reps: "+String(reps);

  //countdown
  if (countdown > 0){
    document.getElementById("timer").innerHTML=countdown;
    if (countdown == 2){
      start0_sound.play();
      document.getElementById("action").innerHTML="Ready!";
    }
    if (countdown == 1){
      start1_sound.play();
      document.getElementById("action").innerHTML="Set!";
    }
    setTimeout(count,1000,sets,reps,active_time,rest_time,countdown-1);
  }

  else if (sets>0){
    if (reps>0){

      if (active_time>0){
        if (active_time == document.getElementById("active_time").value){
          move_sound.play();
        }
        document.getElementById("action").innerHTML="Move!";
        document.getElementById("timer").innerHTML=active_time;
        setTimeout(count,1000,sets,reps,active_time-1,rest_time,0);
      }

      else if(rest_time>0){
        if (rest_time == document.getElementById("rest_time").value){
          rest_sound.play();
        }
        document.getElementById("action").innerHTML="Rest.";
        document.getElementById("timer").innerHTML=rest_time;
        setTimeout(count,1000,sets,reps,active_time,rest_time-1,0);
      }
      else {
        setTimeout(count,1000,sets,reps-1,document.getElementById("active_time").value,document.getElementById("rest_time").value,0);
      }
    }
    else{
      setTimeout(count,1000,sets-1,document.getElementById("reps").value,document.getElementById("active_time").value,document.getElementById("rest_time").value,0);
    }
  }
  else {
    document.getElementById("action").innerHTML="Finished!";
  }
}
