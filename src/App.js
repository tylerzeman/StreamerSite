import "./App.css";
import Header from "./components/Header";
import TwitchVod from "./components/TwitchVod";
import profilePic from "./images/Youtube_Icon.jpg";
function App() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <div className="twitchContainer">
          <TwitchVod />
        </div>
        <div >
          <img src={profilePic} id="profilePic" alt="Direwolfe's Youtube Icon"></img>
        </div>
        <div className="sections divider">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium maximus massa quis aliquam. Mauris ipsum lorem, blandit sed bibendum in, aliquet eget enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean rhoncus sapien in augue imperdiet, sed semper ipsum consequat. Mauris aliquet id est a ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nibh a risus gravida egestas in id risus. Morbi laoreet, mi sit amet pharetra mattis, enim lacus congue arcu, ut dapibus neque nisl id ipsum. Mauris et tellus sit amet nisl pharetra placerat in eget felis. Sed tristique a tortor ut blandit. Phasellus et lacinia sapien.</p>
        </div>
        <div className="sections">
          <h2>Charity Work</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium maximus massa quis aliquam. Mauris ipsum lorem, blandit sed bibendum in, aliquet eget enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean rhoncus sapien in augue imperdiet, sed semper ipsum consequat. Mauris aliquet id est a ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nibh a risus gravida egestas in id risus. Morbi laoreet, mi sit amet pharetra mattis, enim lacus congue arcu, ut dapibus neque nisl id ipsum. Mauris et tellus sit amet nisl pharetra placerat in eget felis. Sed tristique a tortor ut blandit. Phasellus et lacinia sapien.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
