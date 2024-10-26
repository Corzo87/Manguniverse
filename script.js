function scrollCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const scrollAmount = 220; // Définit la quantité de défilement pour chaque clic
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
    });
}

// Liste des mangas avec les noms des fichiers HTML correspondants
const mangas = [
    { title: "Naruto", link: "naruto.html" },
    { title: "One Piece", link: "one-piece.html" },
    { title: "Attack on Titan", link: "attack-on-titan.html" },
    { title: "My Hero Academia", link: "my-hero-academia.html" },
    { title: "Demon Slayer", link: "demon-slayer.html" },
    // Ajoute d'autres mangas ici avec leurs liens respectifs
];

// Fonction pour afficher les résultats de recherche
function showResults(query) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ""; // Réinitialise les résultats
    resultsContainer.style.display = query ? "block" : "none"; // Affiche ou masque la section des résultats

    if (query) {
        const filteredMangas = mangas.filter(manga => manga.title.toLowerCase().includes(query.toLowerCase()));

        filteredMangas.forEach(manga => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("search-result-item");
            resultItem.textContent = manga.title;
            resultItem.onclick = () => window.location.href = manga.link; // Redirige vers la page du manga

            resultsContainer.appendChild(resultItem);
        });

        // Si aucun résultat n'est trouvé
        if (filteredMangas.length === 0) {
            const noResult = document.createElement("div");
            noResult.classList.add("search-result-item");
            noResult.textContent = "Aucun résultat trouvé";
            resultsContainer.appendChild(noResult);
        }
    }
}



// Fonction pour afficher les résultats de recherche
function showResults(query) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ""; // Réinitialise les résultats
    resultsContainer.style.display = query ? "block" : "none"; // Affiche ou masque la section des résultats

    if (query) {
        const filteredMangas = mangas.filter(manga => manga.title.toLowerCase().includes(query.toLowerCase()));

        filteredMangas.forEach(manga => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("search-result-item");
            resultItem.textContent = manga.title;
            resultItem.onclick = () => window.location.href = manga.link; // Redirige vers la page du manga

            resultsContainer.appendChild(resultItem);
        });

        // Si aucun résultat n'est trouvé
        if (filteredMangas.length === 0) {
            const noResult = document.createElement("div");
            noResult.classList.add("search-result-item");
            noResult.textContent = "Aucun résultat trouvé";
            resultsContainer.appendChild(noResult);
        }
    }
}

let currentRating = 0;

// Fonction pour noter le manga avec demi-étoiles
function rateManga(stars) {
    currentRating = stars;
    document.getElementById("rating-value").innerText = `Note : ${currentRating} / 5`;

    const starsElements = document.querySelectorAll(".rating span");
    starsElements.forEach((star, index) => {
        const starValue = parseFloat(star.getAttribute("data-value"));
        star.style.color = starValue <= stars ? "#ffc107" : "#ccc";
    });
}

// Fonction pour soumettre un avis
function submitReview() {
    const reviewText = document.getElementById("review-text").value.trim();
    if (reviewText === "") {
        alert("Veuillez écrire un avis avant de soumettre.");
        return;
    }

    const reviewsList = document.getElementById("reviews");

    // Crée une carte d'avis
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    // En-tête de l'avis avec nom d'utilisateur et date
    const reviewHeader = document.createElement("div");
    reviewHeader.classList.add("review-header");
    const userName = document.createElement("span");
    userName.classList.add("review-user");
    userName.textContent = "Utilisateur Anonyme";
    const reviewDate = document.createElement("span");
    reviewDate.classList.add("review-date");
    reviewDate.textContent = new Date().toLocaleDateString();

    // Ajoute le nom d'utilisateur et la date dans l'en-tête
    reviewHeader.appendChild(userName);
    reviewHeader.appendChild(reviewDate);

    // Section de la note avec étoiles
    const reviewRating = document.createElement("div");
    reviewRating.classList.add("review-rating");
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.textContent = i <= currentRating ? "★" : "☆";
        star.style.color = i <= currentRating ? "#ffc107" : "#ccc";
        reviewRating.appendChild(star);
    }

    // Texte de l'avis
    const reviewContent = document.createElement("p");
    reviewContent.classList.add("review-text");
    reviewContent.textContent = reviewText;

    // Assemble tous les éléments
    reviewItem.appendChild(reviewHeader);
    reviewItem.appendChild(reviewRating);
    reviewItem.appendChild(reviewContent);
    reviewsList.appendChild(reviewItem);

    // Réinitialise les champs de saisie et la note
    document.getElementById("review-text").value = "";
    rateManga(0);
}
