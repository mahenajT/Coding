const testimonials = [
  {
    name: "Emily Johnson",
    photoUrl: "images/img1.jpg",
    text: "Apple's mobile products are simply outstanding. From sleek design to cutting-edge technology, each device offers a seamless experience.",
  },

  {
    name: "Michael Brown",
    photoUrl: "images/img4.jpg",
    text: "I couldn't put down 'The Midnight Library' by Matt Haig! The unique premise and emotional depth resonated with me, making it one of my favorite reads of the year.",
  },
  {
    name: "Emma Davis",
    photoUrl: "images/img5.jpg",
    text: "Dining at Bella Italia was an exquisite experience! The pasta was homemade, and the ambiance made for a perfect evening out. Highly recommend!",
  },

  {
    name: "Laura Martinez",
    photoUrl: "images/img7.jpg",
    text: "The Digital Marketing Masterclass exceeded my expectations! The content was engaging and actionable, and I feel confident applying what I learned to my career.",
  },
  {
    name: "David Clark",
    photoUrl: "images/img8.jpg",
    text: "I absolutely love my new living room decor from Home Haven! The quality is fantastic, and it has truly transformed my space into a cozy retreat.",
  },
  {
    name: "Alice Thompson",
    photoUrl: "images/img9.jpg",
    text: "The EcoGarden tools are a must-have for any gardener! They are durable and ergonomically designed, making my gardening tasks much easier and enjoyable.",
  },
  {
    name: "Daniel Garcia",
    photoUrl: "images/img-10.jpg",
    text: "Taylor Swift's latest album is a masterpiece! Each song tells a story, and her lyrical genius shines through. I've had it on repeat since it came out!",
  },
  {
    name: "Sophia White",
    photoUrl: "images/img11.jpg",
    text: "Adopting Bella from the local shelter was one of the best decisions of my life! She's brought so much joy into my home and truly completes our family.",
  },
  {
    name: "Robert Wilson",
    photoUrl: "images/img6.jpg",
    text: "The new Galaxy smartphone is a game changer! Its camera capabilities are impressive, and the battery life lasts all day, making it perfect for on-the-go use.",
  },
  {
    name: "James Smith",
    photoUrl: "images/img2.jpg",
    text: "Traveling with Wanderlust Tours was a dream come true! The itinerary was well-planned, and every destination offered breathtaking views and unforgettable experiences.",
  },
  {
    name: "Sarah Lee",
    photoUrl: "images/img3.jpg",
    text: "Joining the FitLife program transformed my health! The trainers are knowledgeable and supportive, and I've seen incredible results in just a few months.",
  },
];

const image = document.querySelector("img");
const paragraph = document.querySelector(".text");
const userName = document.querySelector(".user-name");

let index = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[index];
  image.src = photoUrl;
  paragraph.innerHTML = text;
  userName.innerText = name;
  index++;
  if (index === testimonials.length) {
    index = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 4000);
}

