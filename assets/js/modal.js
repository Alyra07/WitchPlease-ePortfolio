var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeBtn = document.getElementsByClassName("close")[0];

// Add click event to all images with the clickable-image class
document.querySelectorAll(".clickable-image").forEach(function (img) {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Close modal when X is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Close modal when clicking outside the image
modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}