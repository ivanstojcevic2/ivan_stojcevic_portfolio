document.addEventListener("DOMContentLoaded", function () {
  showPage("pocetna-page");

  // Attach event listeners to navigation links
  var links = document.querySelectorAll("nav a");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      var pageId = link.getAttribute("href").substring(1); // Extract the pageId from the href
      showPage(pageId);
      setActive(link);
    });
  });
});

function showPage(pageId) {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    page.style.display = "none";
  });

  var selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = "block";
  }
}

function setActive(clickedLink) {
  var links = document.querySelectorAll("nav a");
  links.forEach(function (link) {
    link.classList.remove("active");

    window.scrollBy({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  });

  // Check if the clickedLink has classList property before adding the class
  if (clickedLink && clickedLink.classList) {
    clickedLink.classList.add("active");
  }
}
