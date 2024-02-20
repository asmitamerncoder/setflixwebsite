import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import VideoCard from "./Components/VideoCard";
import Images from "./Images/images";

function App() {

  
  let screenWidth = window.screen.availWidth;

  // console.log(screenWidth);

  let cards = document.querySelector(".card-Container-new");

  // console.log(cards);

  let goPrev = () => {    
    let slideWidth = cards.clientWidth;
    console.log(slideWidth);
    cards.scrollLeft = cards.scrollLeft - slideWidth;
  };

  let goNext = () => {
    let slideWidth = cards.clientWidth;
    cards.scrollLeft = cards.scrollLeft + slideWidth;
     };

  return (
    <div className="App">
      <Navbar />
      <div className="btn-container">
        <button
          className="prev-btn"
          onClick={() => {
            goPrev();
          }}
        >
          &lt;
        </button>
      </div>
      <div className="btn-container">
        <button
          className="next-btn"
          onClick={() => {
            goNext();
          }}
        >
          &gt;
        </button>
      </div>

      <div
      
        className={screenWidth == 430 ? "card-Container-new" : "card-Container"}
      >
        <Card
          title="Peaky Blinders"
          pic={Images.PeakyBlinders}
          link="https://en.wikipedia.org/wiki/The_Vampire_Diaries"
        />
        <Card
          title="The Black List"
          pic={Images.TheBlackList}
          link="https://en.wikipedia.org/wiki/The_Vampire_Diaries"
        />
        <Card
          title="Vampire Diaries"
          pic={Images.VampireDiaries}
          link="https://en.wikipedia.org/wiki/The_Vampire_Diaries"
        />
        <Card
          title="The Crown"
          pic={Images.TheCrown}
          link="https://en.wikipedia.org/wiki/The_Vampire_Diaries"
        />
      </div>
      <div className="watchTraliors">
        <img
          id="watchTraliors_Img"
          src="https://cdn.gadgets360.com/content/assets/latest-holywood-movies-banner-1200x400.jpg"
          alt="break-banner"
        />
      </div>
      <div className="video_Cards_Container">
        <div className="video_Cards">
          <VideoCard videoLink="https://www.youtube.com/embed/RO3Qp_XdR0w" />
          <VideoCard videoLink="https://www.youtube.com/embed/oVzVdvGIC7U" />
        </div>
        <div className="video_Cards">
          <VideoCard videoLink="https://www.youtube.com/embed/JGBIimq1I3A" />
          <VideoCard videoLink="https://www.youtube.com/embed/JWtnJjn6ng0" />
        </div>
      </div>
      <hr />
      <div className="quickList_conatainer">
        <h3 id="footer">Get Subscription Now</h3>
        <div>
          <h4>Quick Links</h4>
          <ul className="footerList">
            <li>Home</li>
            <li>Vampire Diaries</li>
            <li>Peaky Blinders</li>
            <li>The Blacklist</li>
            <li>The Crown</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
