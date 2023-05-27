import deathNote from "./images/death-note.png";
import memeGenerator from "./images/meme-generator.png";
import oldWebsite from "./images/old-website.png";
import photoshare from "./images/photoshare.png";
import yearbook from "./images/yearbook.jpg";

const projects = [
    {
        url: "https://thienantranwebsite.netlify.app/",
        img_src: oldWebsite,
        alt: "Screenshot of my old website",
        title: "Personal Website 3.0",
        year: 2023,
        desc: "Third time I tried making a personal website. Used React. Don't judge please 🙏."
    },
    {
        url: "https://bwq15w.csb.app/",
        img_src: deathNote,
        alt: "Screenshot of my death note website",
        title: "Death Note",
        year: 2023,
        desc: "Inspired by the anime. Used React. Unfinished. Glorified to-do list."
    },
    {
        url: null,
        img_src: photoshare,
        alt: "Screenshot of the photoshare website",
        title: "Photoshare",
        year: 2023,
        desc: "Image-sharing website. Users can like, comment, add friends, etc. Used Flask and MySQL."
    },
    {
        url: null,
        img_src: memeGenerator,
        alt: "Screenshot of the meme generator website",
        title: "Meme Generator",
        year: 2023,
        desc: "Meme-sharing website. Uses 3 APIs to make a meme. Has Google Sign-In. Used Flask and SQLite."
    },
    {
        url: null,
        img_src: yearbook,
        alt: "Picture of me as a senior in my high school yearbook",
        title: "Yearbook",
        year: 2022,
        desc: "Users can upload and view profiles. Used Node, Express, and MongoDB."
    }
];

export default projects;