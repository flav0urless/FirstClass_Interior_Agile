// Function to hide the preloader 
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000); //load dell
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  let width = 0;

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      hidePreloader(); 
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }, 15);
}

//nav
$(document).ready(function() {
  var currentUrl = window.location.href;

  $(".navbar-nav .nav-link").each(function() {
    var linkUrl = $(this).attr("href");

    if (currentUrl.indexOf(linkUrl) !== -1) {
      $(this).addClass("active");
    }
  });

  if (currentUrl.endsWith("index.html") || currentUrl.endsWith("/")) {
    $(".navbar-nav .nav-link[href='index.html']").addClass("active");
  }
});

updateProgressBar();
