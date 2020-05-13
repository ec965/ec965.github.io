/*check the state of the toggle on click*/
//nav_bar.html contains the onclick javascript
function check_toggle() {
  var toggle_state = document.getElementById("dark_toggle").checked;
  if (toggle_state) {
    localStorage.setItem('darkmode', 'ON');
  } else {
    localStorage.removeItem('darkmode', 'ON')
  }
  // dark_mode_storage();
  window.location.reload(false);
}

function dark_mode_storage() {
  //get the document element
  var body_element = document.getElementsByTagName('body');
  var navbar = document.getElementById("navbar1");
  var toggle_state = document.getElementById("dark_toggle");
  var card = document.getElementsByClassName('card');
  var jumbotron = document.getElementsByClassName('card');

  //check localStorage to see if darkmode is enabled
  if (localStorage.getItem('darkmode') === 'ON') {
    if (body_element[0] != null) {
      body_element[0].classList.add('dark-body');
    }
    if (navbar != null) { //check if the element exists on the page
      navbar.classList.add('navbar-dark'); //change color
      navbar.classList.add('bg-primary');
      navbar.classList.remove('navbar-light');
      navbar.classList.remove('bg-light');
    }
    if (toggle_state != null) {
      toggle_state.checked = true;
    }
    if (card[0] != null) {
      for (var i = 0; i < card.length; i++) {
        card[i].classList.add('dark');
        card[i].classList.add('card-shadow-dark');
      }
    }
    if (jumbotron[0] != null) {
      for (var i = 0; i < jumbotron.length; i++) {
        jumbotron[i].classList.add('dark');
      }
    }
  }
}
