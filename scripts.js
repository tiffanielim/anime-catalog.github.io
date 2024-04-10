var loader = document.getElementById("loading-screen");

// Function to hide the loader after at least 3 seconds
function hideLoader() {
    loader.style.display = "none";
}

// Show the loader when the window starts loading
window.addEventListener("load", function(){
    // Set a minimum timeout of 3 seconds before hiding the loader
    setTimeout(hideLoader, 0);
    // setTimeout(hideLoader, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    const animes = [
        {
            title: "One Piece",
            imageURL: "images/one-piece-poster.webp",
            numberOfEpisodes: 1000,
            genre: "Shounen, Adventure",
            description: "Follow the adventures of Monkey D. Luffy and his crew of Straw Hat Pirates as they search for the ultimate treasure, the One Piece, in a world of pirates, mythical creatures, and political intrigue."
        },
        {
            title: "Naruto",
            imageURL: "images/naruto-poster.webp",
            numberOfEpisodes: 500,
            genre: "Shounen, Adventure",
            description: "Experience the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, as he battles powerful foes, discovers his true heritage, and forms lasting bonds with his friends."
        },
        {
            title: "Your Lie in April",
            imageURL: "images/your-lie-in-april-poster.webp",
            numberOfEpisodes: 22,
            genre: "Shojo, Romance",
            description: "Delve into the emotional tale of Kousei Arima, a former piano prodigy who rediscovers his love for music through the encouragement of a free-spirited violinist named Kaori Miyazono, all while navigating themes of loss, love, and redemption."
        },
        {
            title: "Fairy Tail",
            imageURL: "images/fairy-tail-poster.webp",
            numberOfEpisodes: 328,
            genre: "Adventure, Fantasy",
            description: "Join the members of the Fairy Tail guild, including Natsu Dragneel and Lucy Heartfilia, on their magical adventures filled with friendship, loyalty, and epic battles against dark forces threatening their world."
        },
        {
            title: "Haikyu!!",
            imageURL: "images/haikyu-poster.jpg",
            numberOfEpisodes: 85,
            genre: "Shounen",
            description: "Witness the exhilarating journey of Shoyo Hinata and his teammates as they strive to become champions in high school volleyball, overcoming their limitations and rivalries through sheer determination, teamwork, and passion for the sport."
        },
        {
            title: "Attack on Titan",
            imageURL: "images/attack-on-titan-poster.jpeg",
            numberOfEpisodes: 94,
            genre: "Shounen, Dark fantasy",
            description: "Explore a dystopian world where humanity resides within massive walled cities to protect themselves from giant humanoid creatures known as Titans, as Eren Yeager and his friends embark on a mission to uncover the truth behind these monstrous beings and reclaim their world."
        },
        {
            title: "Ouran High School Host Club",
            imageURL: "images/ouran-high-school-host-club-poster.jpg",
            numberOfEpisodes: 26,
            genre: "Comedy, Romance, Shojo",
            description: "Enter the extravagant world of the Ouran Academy, where scholarship student Haruhi Fujioka inadvertently joins the eccentric Host Club, catering to the whims of wealthy clients, leading to comedic mishaps and unexpected friendships."
        },
        {
            title: "Jujutsu Kaisen",
            imageURL: "images/jujutsu-kaisen-poster.webp",
            numberOfEpisodes: 47,
            genre: "Shounen, Dark fantasy",
            description: "Immerse yourself in the supernatural battles of Yuji Itadori, a high school student who becomes entangled in the world of curses and sorcery after ingesting a powerful cursed object, as he joins a secret organization to combat malevolent spirits threatening humanity."
        },
        {
            title: "The Disastrous Life of Saiki K.",
            imageURL: "images/the-disastrous-life-of-saiki-k-poster.jpeg",
            numberOfEpisodes: 120,
            genre: "Shounen, Comedy",
            description: "Follow the daily misadventures of Kusuo Saiki, a high school student with psychic powers, as he tries to lead a normal life while dealing with eccentric classmates, meddlesome parents, and the constant chaos his abilities attract."
        },
    ];

    // Show initial anime cards
    showCards();

    function showCards(animeList = animes) {
        const cardContainer = document.getElementById("card-container");
        cardContainer.innerHTML = "";
        const templateCard = document.querySelector(".card");
        
        animeList.forEach(anime => {
            const nextCard = templateCard.cloneNode(true);
            editCardContent(nextCard, anime.title, anime.imageURL, anime.numberOfEpisodes, anime.genre, anime.description);
            cardContainer.appendChild(nextCard);
        });
    }

    // Function to edit card content
    function editCardContent(card, newTitle, newImageURL, newNumberOfEpisodes, newGenre, newDescription) {
        card.style.display = "block";
    
        const cardHeader = card.querySelector("h2");
        cardHeader.textContent = newTitle;
    
        const cardImage = card.querySelector("img");
        cardImage.src = newImageURL;
        cardImage.alt = newTitle + " Poster";
    
        const cardGenre = card.querySelector(".genre");
        cardGenre.textContent = "Genre: " + newGenre;
    
        const cardEpisodes = card.querySelector(".episodes");
        cardEpisodes.textContent = "Episodes: " + newNumberOfEpisodes;
    
        // const cardDescription = card.querySelector(".description");
        // cardDescription.textContent = newDescription;
    
        console.log("new card:", newTitle, "- html: ", card);
    }

    // Function to sort anime by number of episodes
    function sortAnimeByEpisodes(ascending) {
        animes.sort((a, b) => {
            if (ascending) {
                return a.numberOfEpisodes - b.numberOfEpisodes;
            } else {
                return b.numberOfEpisodes - a.numberOfEpisodes;
            }
        });
        showCards();
    }

    // Function to sort anime alphabetically
    function sortAnimeAlphabetically() {
        animes.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        showCards();
    }

    //function to filter anime based on search query
    function searchAnime() {
        const searchText = searchBar.value.trim().toLowerCase();
        const filteredAnimes = animes.filter(anime => anime.title.toLowerCase().includes(searchText));
        showCards(filteredAnimes);
    }

    //attach event listeners to sort functions
    const sortButton = document.getElementById("sort-button");
    const lowestEpisodesOption = document.getElementById("lowest-episodes");
    const highestEpisodesOption = document.getElementById("highest-episodes");
    const alphabeticalOption = document.getElementById("alphabetical");
    const dropdownContent = document.getElementById("dropdown-content");

    //function to toggle dropdown menu visibility
    function toggleDropdown(dropdown) {
        dropdown.classList.toggle("show");
    }

    //event listener to search bar
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", searchAnime);

    //event listener for sort button click
    sortButton.addEventListener("click", toggleDropdown);

    //event listeners for dropdown options
    lowestEpisodesOption.addEventListener("click", () => {
        sortAnimeByEpisodes(true);
        toggleDropdown();
    });

    highestEpisodesOption.addEventListener("click", () => {
        sortAnimeByEpisodes(false);
        toggleDropdown();
    });

    alphabeticalOption.addEventListener("click", () => {
        sortAnimeAlphabetically();
        toggleDropdown();
    });

    //select the hamburger button element
    const mobileMenuToggle = document.getElementById("mobile-menu");

    //select the navbar menu element
    const navMenu = document.getElementById("nav-menu");

    //add click event listener to the hamburger button
    mobileMenuToggle.addEventListener("click", () => {
        // Toggle the 'active' class on the navbar menu
        navMenu.classList.toggle("active");
    });

    // Show initial anime cards
    showCards();
    
});