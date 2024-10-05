document.addEventListener("DOMContentLoaded", function () {
  // Add the loading class to the body to disable scrolling
  document.body.classList.add('loading');

  const loader = document.getElementById('loader');

  // Simulate a short delay to hide the loader (optional)
  setTimeout(() => {
    loader.style.display = 'none'; // Hide the loader
    document.body.classList.remove('loading'); // Enable scrolling again
  }, 1000); // 1 second delay

  const navToggle = document.getElementById("nav-toggle");
  const navUl = document.querySelector("nav ul");
  const overlay = document.getElementById("overlay");

  navToggle.addEventListener("click", function () {
    navUl.classList.toggle("show");
    this.classList.toggle("active");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", function () {
    navUl.classList.remove("show");
    navToggle.classList.remove("active");
    overlay.classList.remove("show");
  });

  document
    .querySelectorAll("nav ul li a:not(:only-child)")
    .forEach(function (el) {
      el.addEventListener("click", function (e) {
        const dropdown = this.nextElementSibling;

        if (dropdown) {
          dropdown.classList.toggle("show");
        }

        document
          .querySelectorAll(".nav-dropdown")
          .forEach(function (otherDropdown) {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove("show");
            }
          });

        e.stopPropagation();
      });
    });

  document.documentElement.addEventListener("click", function () {
    document.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {
      dropdown.classList.remove("show");
    });
  });
});
