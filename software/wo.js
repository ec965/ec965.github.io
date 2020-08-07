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

//start button
function start(){
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
    document.getElementById("sets").innerHTML="0";
    document.getElementById("reps").innerHTML="0";
    document.getElementById("action").innerHTML="Chill.";
    document.getElementById("timer").innerHTML="0";
  }
}

//workout sets/reps/time counter
function count(sets, reps, active_time, rest_time, countdown){
  var sets_id = document.getElementById("set_count");
  var reps_id = document.getElementById("rep_count");
  var action_id = document.getElementById("action");
  var timer_id = document.getElementById("timer");

  if (in_progress==0){
    data.sets = sets;
    data.reps = reps;
    data.active_time = active_time;
    data.rest_time = rest_time;
    data.countdown = countdown;
    return;
  }
  sets_id.innerHTML=sets;
  reps_id.innerHTML=reps;

  //countdown
  if (countdown > 0){
    timer_id.innerHTML=countdown;
    if (countdown == 2){
      action_id.innerHTML="Ready!";
    }
    if (countdown == 1){
      action_id.innerHTML="Set!";
    }
    document.getElementById("beep0").play();
    setTimeout(count,1000,sets,reps,active_time,rest_time,countdown-1);
  }

  else if (sets>0){
    if (reps>0){
      if (active_time>0){
        if (active_time == document.getElementById("active_time").value){
          document.getElementById("beep1").play();
        }
        action_id.innerHTML="Move!";
        timer_id.innerHTML=active_time;
        setTimeout(count,1000,sets,reps,active_time-1,rest_time,0);
      }

      else if(rest_time>0){
        if (rest_time == document.getElementById("rest_time").value){
          document.getElementById("beep2").play();
        }
        action_id.innerHTML="Rest.";
        timer_id.innerHTML=rest_time;
        setTimeout(count,1000,sets,reps,active_time,rest_time-1,0);
      }
      else {
        count(sets,reps-1,document.getElementById("active_time").value,document.getElementById("rest_time").value,0);
      }
    }
    else{
      count(sets-1,document.getElementById("reps").value,document.getElementById("active_time").value,document.getElementById("rest_time").value,0);
    }
  }
  else {
    sets_id.innerHTML="0";
    reps_id.innerHTML="0";
    timer_id.innerHTML="0";
    action_id.innerHTML="Finished!";
    document.getElementById("finish_sound").play();
    stop();
  }
}
