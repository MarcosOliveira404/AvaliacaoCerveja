



document.addEventListener("DOMContentLoaded", function() {
    console.log("Site carregado com sucesso!");
});






// Função para tocar o áudio
const audio = document.getElementById("audio");
const images = document.querySelectorAll(".content-image");

function playAudio() {
    audio.currentTime = 0; 
    audio.play();
}

images.forEach(image => {
    image.addEventListener("click", playAudio);
});









document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const starFilter = document.getElementById("starFilter");
    const sections = document.querySelectorAll(".content");

    function filterContent() {
        const searchText = searchBar.value.toLowerCase();
        const selectedStars = starFilter.value;

        sections.forEach(section => {
            const beerName = section.getAttribute("data-name").toLowerCase();
            const beerStars = section.getAttribute("data-stars");
            
            const matchesSearch = beerName.includes(searchText);
            const matchesStars = selectedStars === "" || beerStars === selectedStars;

            if (matchesSearch && matchesStars) {
                section.style.display = "flex";
            } else {
                section.style.display = "none";
            }
        });
    }

    searchBar.addEventListener("input", filterContent);
    starFilter.addEventListener("change", filterContent);
});


