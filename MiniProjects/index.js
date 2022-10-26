
let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "The Falcon and the Winter Soldier, set after 2019's Avengers: Endgame, is about two Marvel superheroes",
    image: "images/slider 2.png"
  },
  {
    name: "loki",
    des:
      "The series takes place after the events of the film Avengers: Endgame (2019), in which an alternate version of Loki created a new timeline.",
    image: "images/slider 1.PNG"
  },
  {
    name: "Wanda Vision",
    des:
      "WandaVision is about Wanda and Vision living an idyllic suburban life after the events of Avengers: Endgame",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "The fierce and courageous warrior princess of Heart who has been training to become a Guardian of the Dragon Gem.",
    image: "images/slider 4.png"
  },
  {
    name: "luca",
    des:
      " Set in the fictional seaside town of Portorosso, Luca is a story of adventure, escape, difference and found family.",
    image: "images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
