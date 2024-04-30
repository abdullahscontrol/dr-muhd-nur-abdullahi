import "../responsiveStyle.css"
const topicData = [
  {
    name: "Books",
    link: "here1.jpg",
  },
  {
    name: "Journal Articles",
    link: "hero7.jpg",
  }, {
    name: "Confrences & Talks",
    link: "hero4.jpg",
  },
];
const anotherData = [
  {
    name: "Books",
    // link:"hero2.jpg",
    textHeading: "Professional Summary",
    text: "An accomplished and seasoned IT professional with extensive local and international experience in diverse areas of Computing, Cybersecurity, Oil & Gas and Technology Management. Adept in handling administrative, leadership and academic responsibilities with an excellent degree of success. "
  }, {
    // name:"Books",
    image: "hero10.jpeg",
    // textHeading :"Professional Summary",
    // text:"An accomplished and seasoned IT professional with extensive local and international experience in diverse areas of Computing, Cybersecurity, Oil & Gas and Technology Management. Adept in handling administrative, leadership and academic responsibilities with an excellent degree of success. "
  },
  {
    name: "Books",
    // link:"hero2.jpg",
    textHeading: "Latest Events",
    text: "An accomplished and seasoned IT professional with extensive local and international experience in diverse areas of Computing, Cybersecurity, Oil & Gas and Technology Management. Adept in handling administrative, leadership and academic responsibilities with an excellent degree of success. "
  },

];
import { Link } from "react-router-dom"
function Header() {
  return (
    <div className="header">
      <div className="header-side logo"><h1>Dr. Muhd Nur </h1></div>
      <div className="header-side">
        <Link to='/home' className="signlink">Home</Link>
        <Link to='/darrusa' className="signlink">Darrusa</Link>
        <Link to='/about' className="signlink">Research</Link>
        <Link to='/contact' className="signlink">Achivments</Link> <hr className="hr" />
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <div className="navbar">
      <Header />
      <TitleContainer />
      <div className="image">
        <div className="links">
          <Link to='/about' className="signlink">Programs</Link>
          <Link to='/darrusa' className="signlink">Darrusa</Link>
          <Link to='/publication' className="signlink">Research & Publication</Link>
          <Link to='/contact' className="signlink">Acivments</Link>
          {/* <Link to='/contact' className="signlink">Contact</Link> */}
          {/* <Link to='/contact' className="signlink">Religious Activity</Link> */}
          <Link to='/contact' className="signlink">Media</Link>
        </div>
        <div className="images firstimages"><ExampleComponent className='some' /> <br />
          <br /><br />
          <div className="">
            Director General, Khirat Islamic Trust. <br />
            Director General, Arraid Educational Foundation. <br />
            Director General, Zangarniya Foundation. <br />
            And much more...
          </div>
          <br /> <br />

          <div className=""><button>Contacts</button></div>
        </div>
        <div className="images">
          {/* <TitleContainer /> */}
          <img src="hero3-nobg.png" alt="" id="hero" /></div>
        {/* <div className="name">Dr. Muhammad Nura Abdullahi </div> */}
        {/* <div className="professiom">Dr. Islamic Shariah Law</div> */}
      </div>
      {/* <div className="mobile-links">
        <div className="">Pages</div>
        <div className="">
          <Link to='/darrusa' className="signlink">
            <img src="menus1.png" alt="" />
          </Link>
        </div>
      </div> */}
      <Hero />

      <div className="image-central">{topicData.map(img => <Img topicObj={img} />)}</div>
      <div className="another-central">

        {anotherData.map(another => <Another anotherObj={another} />)}
      </div>
      <div className="callout"><Callout /></div>
      <div className="newsand"><Newsandupdate /></div>
      <div className="footer"><Footer /></div>
      <div className="contact"><Contact /></div>
    </div>
  )
}
function TitleContainer() {
  return (<div className="header2">

    <div className="title-container">
      <div className="text"><ExampleComponent2/></div>
    </div>
  </div>
  )
}
export function Hero() {
  return (
    <div className="hero">
      <div className="hero-side">
        {/* <h1>Dr. Muhammad Nura <br /> Abdullahi</h1> */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit rerum reprehenderit esse a. Perferendis, voluptatibus accusantium labore voluptate cumque laborum numquam natus in quae porro molestias tempore? Cumque, eius!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatum expedita deleniti ut aliquid ipsam harum nesciunt repellendus itaque eligendi amet corrupti deserunt laborum optio quo qui, recusandae ipsum quidem?
      </div>
    </div>
  )
}
import { TypeAnimation } from 'react-type-animation';
const ExampleComponent2 = () => {
  return (
    <TypeAnimation
      sequence={[
         // Same substring at the start will only be typed out once, initially
         'Welcome to Dr Muhd Nur Abdullahi ',
         1000, // wait 1s before replacing "Mice" with "Hamsters"
         'Page',
         1000,
          // 'Abdullahi Page',
        //  1000,
         // 'We produce food for Guinea Pigs',
         // 1000,
         // 'We produce food for Chinchillas',
         // 1000
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '3rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome to ...',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Dr. Muhammad Nur',
        1000, 'Abdullahi Page',
        1000,
        // 'We produce food for Guinea Pigs',
        // 1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '3rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

function Img(Props) {
  return (
    <div className="image-topic">
      <div className="imgage-topic">
        <div className="img-content">
          <img src={Props.topicObj.link} alt="" />
          {/* <video controls ><source src={Props.topicObj.link} type="video/mp4" width="100%" /></video> */}
        </div>
        <div className="image-links">
          <div className="image-name">{Props.topicObj.name}</div>
        </div>

      </div>
    </div>
  )
}
function Another(Props) {
  return (
    <div className="another">
      <div className="another-topic">
        <div className=" topic-heading"><h1>{Props.anotherObj.textHeading}</h1></div>
        <div className=" topic-text">{Props.anotherObj.text}</div>
        <div className=" topic-image"><img src={Props.anotherObj.image} alt="" /></div>
      </div>

    </div>
  )
}


function Callout() {
  return (
    <div className="calloutinside">
      <div className="call">
        <div className="heading"><h1>Publication</h1></div>
        <div className="content">83</div>
      </div>
      <div className="call">
        <div className="heading"><h1>Another</h1></div>
        <div className="content">83</div>
      </div>
      <div className="call">
        <div className="heading"><h1>Papers</h1></div>
        <div className="content">83</div></div>
      <div className="call">
        <div className="heading"><h1>Honors & Award</h1></div>
        <div className="content">83</div>
      </div>
    </div>
  )
}

function Newsandupdate() {
  return (
    <div className="newsandupdates">
      <div className="news-title">News & Updates</div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <footer>
        <h1>Dr Muhammad Nura <br /> Abdullahi</h1>
        <div className="containers">
          <div className="container">
            <h1>Contact Information</h1>
            <div className="content">
              <ul>
                <h1>Address:</h1>
                <li>SD 37 Lakeview Estate, Jabi, Abuja</li>
                <li>Email: contact@isaalipantami.com</li>
              </ul>
            </div>
          </div>
          <div className="container">
            <h1>Quick Links </h1>
            <div className="content">
              <ul>
                <li>Khairat Islamic Trust</li>
                <li>Yan Albarka Collage</li>
                <li>Mafatihul Khair</li>
                <li>Zangarnia Foundation </li>
              </ul>
            </div>
          </div>
          <div className="container container-3">
            <h1>Recent Updates</h1>
            <div className="content"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}


function Contact() {
  return (
    <div className="contact">
      <div className="">Copyright©2024-Dr Muhd Nur</div>
      <div className="">
        <a href="http://localhost:5174/account">
          Contact the developer
        </a>
      </div>
    </div>
  )
}