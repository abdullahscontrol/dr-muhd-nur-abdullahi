import React from 'react';
import { Link } from 'react-router-dom';
const audioData = [
  {
    logo: "musicc.PNG",
    title: "Fatawowin Ramadan",
    content: "001-aud.mp3",
  },
  {
    logo: "musicc.PNG",
    title: "Fatawowin Ramadan",
    content: "001-aud.mp3",
  }, {
    logo: "musicc.PNG",
    title: "Fatawowin Ramadan",
    content: "001-aud.mp3",
  }, {
    logo: "musicc.PNG",
    title: "Fatawowin Ramadan",
    content: "001-aud.mp3",
  },

]

const imgLink = "karatu-1.mp4";

export default function Darrusa() {
  return (
    <div className="darrusa">
      <Home />
      <div className="central-audio">
        <Audio />
      </div>
    </div>
  );
}
// import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="karat">
      <h1 className="title title2"><h1>Darrusan Dr. Muhammad Nur Abdullahi <br /> Da Karattutukah1</h1>
        <br />
        <div className="navs">
          <Link to='/darrusa' className="signlink">Videos</Link>
          <Link to='/audios' className="signlink">Audios</Link>
        </div>
      </h1>
      <div className="links">
        <Link to='/' className="signlink">Home</Link>
        <Link to='/about' className="signlink">Taseer</Link>8
        <Link to='/darrusa' className="signlink">Lectures</Link>
        <Link to='/contact' className="signlink">Audios</Link>
      </div>
    </div>
  );
}

// function Topic(props) {
//   const handleDownloadClick = () => {
//     // Programmatically trigger click on the second link
//     document.getElementById('secondLink').click();
//   }

//   const yourSecondLink = "https://zeekaihu.net/4/7245179"; // Replace with your second link

//   return (
//     <div className="topic">
//       <div className="topic-content">
//         <video controls><source src={props.topicObj.link} type="video/mp4" width="100%" /></video>
//       </div>
//       <div className="topic-links">
//         <div className="topic-name">{props.topicObj.name}</div>
//         <div className="topic-link">
//           <a href={props.topicObj.link} id="button" download onClick={handleDownloadClick}>Download</a>
//           {/* <a href={yourSecondLink} id="secondLink" style={{ display: 'none' }}></a> */}
//         </div>
//       </div>
//     </div>
//   );
// }
function Audio() {
  return (
    <div className="audio">
      {audioData.map(music => <Music
        logo={music.logo}
        title={music.title}
        content={music.content}
      />)}
      {/* <Music logo="aud-logo.jpg" title="Hamisu Breaker Jaruma" content="001-aud.mp3" /> */}
    </div>
  )
}
function Music(Props) {
  return (
    <div className="music">
      <div className="logo">
        <img src={Props.logo} alt="" id="music-logo" />
      </div>
      <div className="title">{Props.title}</div>
      <div className="content">
        <div>
          <audio controls id="music">
            <source src={Props.content} type="audio/mpeg" id="music" />
          </audio>
        </div>
        <div>
          <a href={Props.content} download>
            <img src="download-icon.png" id="download-icon" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}