import React, { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

const TwitchVod = () => {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  
  const handleReady = (e) => {
    embed.current = e;
  };
  
  return (
    <TwitchEmbed channel="Direwolfe2" autoplay muted withChat={false} darkMode={true}  onVideoReady={handleReady} id="twitchVod" height="100%" width="100%"/>
  );
};

export default TwitchVod;