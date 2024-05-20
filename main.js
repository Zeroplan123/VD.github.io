function tombol(){
    alert("developernya belum belajar database");
}

function refresh(){
    location.reload();
}

const slider = document.querySelector('.slider-container');
const cardWidth = slider.querySelector('.profile-card').offsetWidth;
let currentPosition = 0;

function slide(direction) {
    currentPosition += direction * cardWidth;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (currentPosition < 0) {
        currentPosition = 0;
    } else if (currentPosition > maxScroll) {
        currentPosition = maxScroll;
    }
    slider.scrollTo({
        left: currentPosition,
        behavior: 'smooth'
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('..awal');
    textElement.classList.add('.awal');
  });
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('..awal');
    textElement.classList.add('.awal');
  });


  function ShowSidebar(){
    console.log("mamamia")
    let sidebar = document.querySelector('#sidebar')
    sidebar.style.display = "flex"
   

  }

  function HideSidebar(){
    let sidebar = document.querySelector('#sidebar')
    sidebar.style.display = "none"

  }


