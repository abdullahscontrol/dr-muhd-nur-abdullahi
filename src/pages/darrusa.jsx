// const topicData=[
//     {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },
//     {
//         name:"2some",
//         link:"karatu-1.mp4",
//     },    {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },
//     {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },  {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },  {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },  {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },  {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },  {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },  {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },  {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },      {
//         name:"Karatun Azumisdis jhzsdb",
//         link:"karatu-1.mp4",
//     },

// ]

// const imgLink="karatu-1.mp4"

// export default function Darrusa(){
//     return ( 
//         <div className="darrusa">
//         <Home/>
//     <div className="central">
// {topicData.map(topic =><Topic topicObj={topic} key = {topic.name}/>)}
//     </div>
//         </div>
//     )
// }
// import { Link } from "react-router-dom"
// export  function Home(){
//     return ( 
//         <div className="karat">
//         <h1 className="title">Darrusa</h1>
//         <div className="links">
//                 <Link to='/' className="signlink">Home</Link>
//                 <Link to='/about' className="signlink">Taseer</Link>
//                 <Link to='/darrusa' className="signlink">Lectures</Link>
//                 {/* <Link to='/publication' className="signlink">Research & Publication</Link>
//                 <Link to='/contact' className="signlink">Acivments</Link> 
//                 <Link to='/contact' className="signlink">Contact</Link> 
//                 <Link to='/contact' className="signlink">Religious Activity</Link> 
//     */}
//                 <Link to='/contact' className="signlink">Audios</Link>  
//         </div>
//         </div>
//     )
// }

// function Topic(Props){
//     return(
//             <div className="topic">
//                 <div className="topic">
//                     <div className="topic-content">
//                     <video controls ><source src={Props.topicObj.link} type="video/mp4" width="100%" /></video>
//                     </div>
//                     <div className="topic-links">
//                         <div className="topic-name">{Props.topicObj.name}</div>
//                         <div className="topic-link">
//                       <a href={Props.topicObj.link} id="button" download> <a href="https://zeekaihu.net/4/7245179"></a>Download

//                       </a>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         // <div className="all-container">
//         // <div className="karatus">
//         //     <div className="karatu">
//         //         <div className="karatu-content">
//         //         <video controls >
//         //                 <source src={Props.link} type="video/mp4" width="100%" />
//         //             </video>
//         //         </div>
//         //         <div className="karatu-links">
//         //             <div className="karatu-name">{Props.name}</div>
//         //             <div className="karatu-link">
//         //             <a href={Props.link}  id="button" download>Download</a>
//         //             </div>
//         //         </div>
//         //     </div>
//         //     </div>
//         // </div>

//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';

const topicData = [
    {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    },
    {
        name: "2some",
        link: "karatu-1.mp4",
    },
    {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    }, {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    }, {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    }, {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    }, {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    }, {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    }, {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    }, {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    }, {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    }, {
        name: "Karatun Azumisdis jhzsdb",
        link: "karatu-1.mp4",
    },
    // Add more topic data as needed...
];

const imgLink = "karatu-1.mp4";

export default function Darrusa() {
    return (
        <div className="darrusa">
            <Home />
            <div className="central">
                {topicData.map(topic => <Topic topicObj={topic} key={topic.name} />)}
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
                <Link to='/about' className="signlink">Taseer</Link>
                <Link to='/darrusa' className="signlink">Lectures</Link>
                <Link to='/contact' className="signlink">Audios</Link>
            </div>
        </div>
    );
}

function Topic(props) {
    const handleDownloadClick = () => {
        // Programmatically trigger click on the second link
        document.getElementById('secondLink').click();
    }

    const yourSecondLink = "https://zeekaihu.net/4/7245179"; // Replace with your second link

    return (
        <div className="topic">
            <div className="topic-content">
                <video controls><source src={props.topicObj.link} type="video/mp4" width="100%" /></video>
            </div>
            <div className="topic-links">
                <div className="topic-name">{props.topicObj.name}</div>
                <div className="topic-link">
                    <a href={props.topicObj.link} id="button" download onClick={handleDownloadClick}>Download</a>
                    {/* <a href={yourSecondLink} id="secondLink" style={{ display: 'none' }}></a> */}
                </div>
            </div>
        </div>
    );
}
