function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

function login(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  fetch('users.json')
    .then(response => response.json())
    .then(data => {
      var users = data.users;
      var foundUser = users.find(user => user.username === username && user.password === password);
      if (foundUser) {
        document.getElementById('loginMessage').innerHTML = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';
      } else {
        document.getElementById('loginMessage').innerHTML = 'Incorrect username or password. Please try again.';
        document.getElementById('loginMessage').style.color = 'red';
      }
    })
    .catch(error => console.error('Error loading JSON file:', error));
}
