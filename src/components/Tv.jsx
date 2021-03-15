
import React, { Component, useState } from "react";
import ReactPlayer from "react-player";

function Tv() {
  const [myvideo, setMyvideo] = useState("");

  // New state to save index of currently playing video
  const [myvideoIndex, setMyvideoIndex] = useState(0);

  const arrayqueue = [
    {
        "id": 10,
        "artist": "Chloe x Halle",
        "song": "Ungodly Hour",
        "album": "Ungodly Hour",
        "director":"Alfred Marroquín",
        "video": "https://www.youtube.com/watch?v=OPS8WTYqxeM"
    },
    {
        "id": 9,
        "artist": "Goldlink feat Tyler, The Creator, Jay Prince",
        "song": "U Say",
        "album": "DIASPORA",
        "director":"Santi - OkayAfrica",
        "video": "https://www.youtube.com/watch?v=olLlcGnziNw"
    },
    {
        "id": 8,
        "artist": "Kali Uchis feat Tyler, The Creator, Bootsy Collins",
        "song": "After The Storm",
        "album": "Isolation",
        "director":"Nadia Lee Cohen",
        "video": "https://www.youtube.com/watch?v=9f5zD7ZSNpQ"
    },
    {
        "id": 7,
        "artist": "Doja Cat",
        "song": "Streets",
        "album": "Hot Pink",
        "director":"Christian Breslauer",
        "video": "https://www.youtube.com/watch?v=jJdlgKzVsnI"
    },
    {
        "id": 6,
        "artist": "Lalo, J.Balvin & Trapical",
        "song": "Mocca (Remix)",
        "album": "Mocca (Remix) - Single",
        "director":"Sergio de Ávila, Jérôme Lehoucq",
        "video": "https://www.youtube.com/watch?v=5P12UoDHL6o"
    },
    {
        "id": 5,
        "artist": "Khruangbin",
        "song": "So We Won't Forget",
        "album": "Mordechai",
        "director":"Scott Dungate",
        "video": "https://www.youtube.com/watch?v=lo4KMGiy--Y"
    },
    {
        "id": 4,
        "artist": "Jhené Aiko feat Rae Sremmurd",
        "song": "Sativa",
        "album": "Trip",
        "director":"EYES",
        "video": "https://www.youtube.com/watch?v=5x-d3pabd5o"
    },
    {
        "id": 3,
        "artist": "Mac Miller feat Anderson .Paak",
        "song": "Dang!",
        "album": "The Divine Feminine",
        "director":"Rex Arrow",
        "video": "https://www.youtube.com/watch?v=LR3GQfryp9M"
    },
    {
        "id": 2,
        "artist": "Travis Scott",
        "song": "Butterfly Effect",
        "album": "Astroworld",
        "director":"BRTHR",
        "video": "https://www.youtube.com/watch?v=_EyZUTDAH0U"
    },
    {
        "id": 1,
        "artist": "Disclosure",
        "song": "When A Fire Starts To Burn",
        "album": "Settle",
        "director":"Bo Mirosseni",
        "video": "https://www.youtube.com/watch?v=4nsKDJlpUbA"
    }

  ];

  // Callback function that plays next video (or goes back to first video)
  const playNext = () => {
    const nextIndex = myvideoIndex + 1;
    if (nextIndex >= arrayqueue.length) {
      setMyvideo(arrayqueue[0])
      setMyvideoIndex(0)
    } else {   
      setMyvideo(arrayqueue[nextIndex])
      setMyvideoIndex(nextIndex);
      
    }
  }

  // When click, set the video and the current index
  const handleClick = (item, index) => {
    setMyvideo(item.videoname)
    setMyvideoIndex(index)
  }

  return (
    <div>
      
      <ReactPlayer url={arrayqueue[myvideoIndex].video} controls={true} playing={true} config={{ 
     youtube: {
      playerVars: {
        play: 30
      }
    }
  }} onEnded={playNext} />
  
           
      <div className="queue-size" id="style-1">
        {arrayqueue.map((item, index) => {
          return (
            <div
              className="row-queue"
              key={index}
              onClick={() => handleClick(item, index)}
            >
              <div className="column-queue">
                  <p>{item.id}</p>
                  <p>{item.song}</p>
                  <p>{item.artist}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tv;