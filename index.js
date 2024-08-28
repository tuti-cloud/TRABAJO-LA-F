const cambiodetemafooter = document.getElementById("cambiodetema");
const footer = document.getElementById("footer");


cambiodetemafooter.addEventListener("change", function() {
    if (this.checked) {
        footer.classList.add("temaclaro");
        
    } else {
        footer.classList.remove("temaclaro");
        }
});
