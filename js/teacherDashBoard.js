// const toggleButton = document.getElementById('toggle-button');
// const sideNav = document.getElementById('side-nav');

// toggleButton.addEventListener('click', () => {
// 	sideNav.classList.toggle('show');
// });



const showCardButton = document.getElementById('show-card-button');
const profileCard = document.getElementById('profile-card');

// showCardButton.addEventListener('click', () => {
//   profileCard.style.display = 'block';
// });


// const myButton = document.getElementById("myButton");
// const myElement = document.getElementById("myElement");
let visible = false;

showCardButton.addEventListener("click", () => {
  visible = !visible;
  if (visible) {
    profileCard.style.display = "block";
  } else {
    profileCard.style.display = "none";
  }
});



const logoutButton = document.querySelector('.logout-button');

logoutButton.addEventListener('click', () => {
  // Perform logout action here
  
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})