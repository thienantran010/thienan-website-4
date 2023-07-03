import mafia from './media/mafia.mp4';
import photoshare from "./media/photoshare.png";
import lettersai from './media/lettersai.png';

const projects = [
    {
        url: null,
        src: mafia,
        srcType: "video",
        alt: "Short demo of mafia web app",
        title: "Mafia Web App",
        year: 2023,
        desc: `Web game based on mobile game Mafia Mystery. Implements JWT authorization and authentication.
        Features realtime data via socket.io. Used MongoDB, Express, React, Node.js, and Typescript.`
    },
    {
        url: null,
        src: photoshare,
        srcType: "img",
        alt: "Screenshot of the photoshare website",
        title: "Photoshare",
        year: 2023,
        desc: "Image-sharing website. Users can like, comment, add friends, etc. Used Flask and MySQL."
    },
    {
        url: null,
        src: lettersai,
        srcType: "img",
        alt: "Screenshot of a handwritten letter",
        title: "Letters AI",
        year: 2023,
        desc: `Collected handwritten letters. Trained several models, using convolutional neural 
        networks and transfer learning, to produce a model with at least 95% accuracy.`
    },

];

export default projects;