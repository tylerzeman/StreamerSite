import React from "react";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Youtube from "../images/youtube.png";
import Twitch from "../images/twitch.png";
import Tiktok from "../images/tik-tok.png";
import Discord from "../images/discord.png";
import Merch from "../images/merchandise.png"
const Header = () => {
  return (
    <header className="Header">
      <nav>
        <a href="https://mobile.twitter.com/Direwolfe21" target="_blank">
          <img src={Twitter} alt="Twitter logo"/>
        </a>
        <a href="https://www.instagram.com/direwolfe2/" target="_blank">
          <img src={Instagram} alt="Instagram Logo"/>
        </a>
        <a
          href="https://www.youtube.com/channel/UCaAuOUeZO5mDaUpXds5ZNzQ"
          target="_blank"
        >
          <img src={Youtube} alt="Youtube Logo"/>
        </a>
        <a href="https://www.twitch.tv/direwolfe2" target="_blank">
          <img src={Twitch} alt="Twitch Logo"/>
        </a>
        <a href="https://www.tiktok.com/@direwolfe2" target="_blank">
          <img src={Tiktok} alt="Tiktok Logo"/>
        </a>
        <a href="https://discord.gg/mfcmn5TNDD" target="_blank">
          <img src={Discord} alt="Discord Logo"/>
        </a>
        <a href="https://streamlabs.com/direwolfe2/merch" target="_blank">
          <img src={Merch} alt="Merch Logo"/>
        </a>
      </nav>
    </header>
  );
};

export default Header;
