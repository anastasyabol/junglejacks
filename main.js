// main.js

// Script for navbar functionality and smooth scrolling
const navbar = document.getElementById("navbar");
const logo = document.querySelector(".logo");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
      logo.classList.add("hidden"); // Add hidden class to the logo
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
    logo.classList.remove("hidden"); // Remove hidden class from the logo
  }
};

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Script for panels
const panels = document.querySelectorAll(".panel");
let intervalId;

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    resetInterval();
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function resetInterval() {
  // Clear the existing interval if any
  clearInterval(intervalId);

  // Set a new interval to change the active panel every 3 seconds
  intervalId = setInterval(() => {
    // Get the currently active panel
    const currentActivePanel = document.querySelector(".panel.active");

    // If there is an active panel, find its index
    const currentIndex = currentActivePanel
      ? Array.from(panels).indexOf(currentActivePanel)
      : -1;

    // Calculate the index of the next panel
    const nextIndex = (currentIndex + 1) % panels.length;

    // Remove active classes from all panels
    removeActiveClasses();

    // Add 'active' class to the next panel
    panels[nextIndex].classList.add("active");
  }, 3000);
}

// Call resetInterval to start the automatic change
resetInterval();

// Script for rule icons
document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class 'rule-icon'
  var ruleIcons = document.querySelectorAll(".rule-icon");

  // Add event listeners for mouseover and mouseout events
  ruleIcons.forEach(function (icon) {
    // Get the data-text attribute value
    var iconText = icon.getAttribute("data-text");
    var iconElement = icon.querySelector("i"); // Get the <i> element

    icon.addEventListener("mouseover", function () {
      // Add 'active' class to the <i> element on mouseover
      iconElement.classList.add("active");

      // Get the corresponding h2 text and update it
      var textRule = this.closest(".parents").querySelector(".text-rule h2");
      textRule.innerText = iconText;
    });

    icon.addEventListener("mouseout", function () {
      // Remove 'active' class from the <i> element on mouseout
      iconElement.classList.remove("active");

      // Reset the text to the original value
      var textRule = this.closest(".parents").querySelector(".text-rule h2");
      textRule.innerText = "Safety and facility rules";
    });

    // Additional handling for fa-stack elements with fa-slash class
    var faStackElement = icon.querySelector(".fa-stack i.fa-slash");
    if (faStackElement) {
      faStackElement.addEventListener("mouseover", function () {
        // Add 'active' class to the fa-slash element on mouseover
        this.classList.add("active");
      });

      faStackElement.addEventListener("mouseout", function () {
        // Remove 'active' class from the fa-slash element on mouseout
        this.classList.remove("active");
      });
    }
  });
});

// Script for FAQ toggle
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
