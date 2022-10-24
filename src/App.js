import "./App.css";
import Header from "./components/Header";
import TwitchVod from "./components/TwitchVod";
import profilePic from "./images/Youtube_Icon.jpg";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <div className="twitchContainer">
          <TwitchVod />
        </div>
        <div>
          <img
            src={profilePic}
            id="profilePic"
            alt="Direwolfe's Youtube Icon"
          ></img>
        </div>
        <div className="sections divider">
          <h2>About Me</h2>
          <p>
            What up my peeps i am Direwolfe2 a Marine Corps Veteran, people in my life call me Dustin.
            I am a very proud father of one;mini version of myself. His name is
            Liam and he is who inspired me to become a content creator. My
            Aspirations as a Content Creator feel endless but my focus is mostly on my
            Live streams on Twitch, although I am starting to branch out onto other
            platforms. We have a very chill and steadily growing community that
            has been shaped around the right type of people. Great viewers in
            chat who are the foundation of why we are in twitch's top 100
            chillest streams doing it (probably). Come out and see for
            yourself!!
          </p>
        </div>
        <div className="sections">
          <h2>Charity Work</h2>
          <p>
            I am very passionate about Charity work and love giving back. Last Year we helped raised over $170,000 for St.Jude Children's Research Hospital as a Fallout Community, in our small community we managed to raise ~$570. I plan on doing work with StackUp which is a military charity that supports US and Allied Vets by sending gaming supply crates to help boost Moral in combat zones/humanitaian zones. I am always looking for more opportunities to give back please send all inquiries to: Dehart08@icloud.com.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
