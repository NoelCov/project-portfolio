import img1 from "../src/images/project-phones-online-store.jpg"
import img2 from "../src/images/marcus-project.jpg"
import img3 from "../src/images/hashnode-hackaton.png"

const projectsData = [
  {
    title: "Compare Prices - Hashnode's Hackathon",
    text:
      "I made this website for a hackathon I recently participated in. I used React JS, Node/Express and a few APIs",
    projectWebsite: "https://compare-prices.vercel.app/",
    projectRepo: "https://github.com/NoelCov/Compare-prices",
    img: img3,
  },
  {
    title: "No3l's Cellphone Store",
    text:
      "A website that mimics an online cellphones store. I used React, Redux, Sass and Firebase for it.",
    img: img1,
    projectWebsite: "https://online-cellphone-store.vercel.app/",
    projectRepo: "https://github.com/NoelCov/No3l-Phones-Online-Store",
  },
  {
    title: "Website for freelance client",
    text: `A freelance website I made for a client. It is a landing page for him and his business which is a barbershop.
      Building this project I learned that communication is really important when working with a client.`,
    img: img2,
    projectWebsite: "https://marcus-barbershop-website.vercel.app/",
    projectRepo: "https://github.com/NoelCov/Marcus-barbershop-website",
  },
]

export default projectsData
