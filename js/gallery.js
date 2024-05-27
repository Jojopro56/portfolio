document.addEventListener("DOMContentLoaded", function() {
    const expandableImages = document.querySelectorAll(".expandable-image");
    const expandedImageViewer = document.getElementById("expanded-image-viewer");
    const expandedImage = document.getElementById("expanded-image");
    const closeBtn = document.querySelector(".close-btn");
  
    expandableImages.forEach(function(image) {
      image.addEventListener("click", function() {
        const src = this.getAttribute("src");
        expandedImage.setAttribute("src", src);
        expandedImageViewer.style.display = "block";
      });
    });
  
    expandedImageViewer.addEventListener("click", function(event) {
      if (event.target === expandedImageViewer || event.target === closeBtn) {
        expandedImageViewer.style.display = "none";
      }
    });
  
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        expandedImageViewer.style.display = "none";
      }
    });
  });
  