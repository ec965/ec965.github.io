/*check the state of the toggle on click*/
function check_toggle(){
  var toggle_state = document.getElementById("dark_toggle").checked;
  if (toggle_state){
    localStorage.setItem('darkmode','ON');
  }
  else{
    localStorage.removeItem('darkmode','ON')
  }
  dark_mode_storage();
  // window.location.reload(false);
}

/*change body and navbar to dark mode*/
function dark_mode_storage() {
  var body_element = document.getElementsByTagName('body');
  var navbar = document.getElementById("navbar1");
  if(localStorage.getItem('darkmode') === 'ON'){
    body_element[0].classList.add('dark-body');
    navbar.classList.add('navbar-dark');
    navbar.classList.add('bg-primary');
    navbar.classList.remove('navbar-light');
    navbar.classList.remove('bg-light');
  }
  else if(localStorage.getItem('darkmode') === null){
    body_element[0].classList.remove('dark-body');
    navbar.classList.remove('navbar-dark');
    navbar.classList.remove('bg-primary');
    navbar.classList.add('navbar-light');
    navbar.classList.add('bg-light');
  }
}

/*darkmode for the toggle checkbox*/
function dm_toggle_storage(){
  var toggle_state = document.getElementById("dark_toggle");
  if(localStorage.getItem('darkmode') === 'ON'){
    toggle_state.checked = true;
  }
  else if(localStorage.getItem('darkmode') === null){
    toggle_state.checked = false;
  }
}

/*dark mode for specific page elemnet classes*/
function dm_element(element_class){
  var element = document.getElementsByClassName(element_class);
  if(localStorage.getItem('darkmode') === 'ON'){
    for(var i=0; i<element.length; i++){
      element[i].classList.add('dark');
    }
  }
  else if(localStorage.getItem('darkmode') === null){
    for(var i=0; i<element.length; i++){
      element[i].classList.remove('dark');
    }
  }
}
