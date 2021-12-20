const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('responsivelist')[0];


window.onscroll = function () {myFunction()};

const navBar = document.getElementsByClassName('header');
const sticky = navBar.offsetTop;

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    console.log("I worked!")
    
})

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navBar.classList.add("sticky")
    } else {
      navBar.classList.remove("sticky");
    }
  }
