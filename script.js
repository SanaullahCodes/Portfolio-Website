"use stricts";
var typed = new Typed("#element", {
  strings: ["Web Developer."],
  typeSpeed: 50,
});

document.getElementById("resumebtn").addEventListener("click", function () {
  // Add path of your resume here.
  var resumeURL = "Resume.pdf";

  var newWindow = window.open(resumeURL);
  if (!newWindow) {
    alert("Please allow pop-ups for this site to download the resume.");
  }
});

function toggleContainer(containerId) {
  let container = document.getElementById(containerId);
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}

document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
