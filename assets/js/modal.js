var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeBtn = document.getElementsByClassName("close")[0];

// Add click event to all images inside the #main div
document.querySelectorAll("#main img").forEach(function (img) {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Close the modal when the X is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when anywhere outside the image is clicked
modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}