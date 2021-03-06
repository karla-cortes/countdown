import React, { Component } from "react";
import ReactPlayer from "react-player";
import Data from "../data.json";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Playlist extends Component {
  state = {
    myvideo: "",
    setMyvideo: "",
    myvideoIndex: 0,
    setMyvideoIndex: 0,
    songid: "",
    playing: true,
    mute: true,
  };

  componentDidMount() {
    this.setState({ myvideo: "Ungodly Hour" });
    this.setState({ songid: 10 });
  }

  render() {
    const playNext = () => {
      const nextIndex = this.state.setMyvideoIndex + 1;
      if (nextIndex >= arrayqueue.length) {
        this.setState({ setMyvideo: arrayqueue[0] });
        this.setState({ setMyvideoIndex: 0 });
        this.setState({ songid: arrayqueue[nextIndex].id });
        this.setState({ myvideo: arrayqueue[this.state.myvideoIndex].song });
      } else {
        this.setState({ setMyvideo: arrayqueue[nextIndex] });
        this.setState({ setMyvideoIndex: nextIndex });
        this.setState({ songid: arrayqueue[nextIndex].id });
        this.setState({ myvideo: arrayqueue[nextIndex].song });
      }
    };
    const handleClick = (item, index) => {
      this.setState({ myvideo: item.song });
      this.setState({ setMyvideo: item });
      this.setState({ songid: item.id });
      this.setState({ setMyvideoIndex: index });
    };

    const handlePlay = () => {
      this.setState({ playing: !this.state.playing });
    };

    const handleMute = () => {
      this.setState({ mute: !this.state.mute });
    };

    const arrayqueue = [
      {
        id: 10,
        artist: "Chloe x Halle",
        song: "Ungodly Hour",
        album: "Ungodly Hour",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/a/a4/Chloe_x_Halle_-_Ungodly_Hour.png",
        director: "Alfred Marroqu??n",
        video: "https://www.youtube.com/watch?v=OPS8WTYqxeM",
      },
      {
        id: 9,
        artist: "Goldlink FT. Tyler, The Creator, Jay Prince",
        song: "U Say",
        album: "DIASPORA",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/4/4e/Goldlink-DIASPORA-cover.png",
        director: "Santi - OkayAfrica",
        video: "https://www.youtube.com/watch?v=olLlcGnziNw",
      },
      {
        id: 8,
        artist: "Kali Uchis FT. Tyler, The Creator, Bootsy Collins",
        song: "After The Storm",
        album: "Isolation",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/1/1b/Kali_Uchis_-_Isolation.png",
        director: "Nadia Lee Cohen",
        video: "https://www.youtube.com/watch?v=9f5zD7ZSNpQ",
      },
      {
        id: 7,
        artist: "Doja Cat",
        song: "Streets",
        album: "Hot Pink",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/8/87/Doja_Cat_-_Hot_Pink.png",
        director: "Christian Breslauer",
        video: "https://www.youtube.com/watch?v=jJdlgKzVsnI",
      },
      {
        id: 6,
        artist: "Lalo, J.Balvin & Trapical",
        song: "Mocca (Remix)",
        album: "Mocca (Remix) - Single",
        thumbnail:
          "https://m.media-amazon.com/images/I/818GvkHXDyL._SS500_.jpg",
        director: "Sergio de ??vila, J??r??me Lehoucq",
        video: "https://www.youtube.com/watch?v=5P12UoDHL6o",
      },
      {
        id: 5,
        artist: "Khruangbin",
        song: "So We Won't Forget",
        album: "Mordechai",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/5/5d/Khruangbin_Mordechai_Cover.png",
        director: "Scott Dungate",
        video: "https://www.youtube.com/watch?v=lo4KMGiy--Y",
      },
      {
        id: 4,
        artist: "Jhene Aiko FT. Rae Sremmurd",
        song: "Sativa",
        album: "Trip",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/2/2b/Jhen%C3%A9_Aiko_-_Trip.png",
        director: "EYES",
        video: "https://www.youtube.com/watch?v=5x-d3pabd5o",
      },
      {
        id: 3,
        artist: "Mac Miller FT. Anderson .Paak",
        song: "Dang!",
        album: "The Divine Feminine",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/9/93/Mac_Miller_-_The_Divine_Feminine.png",
        director: "Rex Arrow",
        video: "https://www.youtube.com/watch?v=LR3GQfryp9M",
      },
      {
        id: 2,
        artist: "Travis Scott",
        song: "Butterfly Effect",
        album: "Astroworld",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg",
        director: "BRTHR",
        video: "https://www.youtube.com/watch?v=_EyZUTDAH0U",
      },
      {
        id: 1,
        artist: "Disclosure",
        song: "When A Fire Starts To Burn",
        album: "Settle",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/en/7/76/Disclosure_-_Settle.png",
        director: "Bo Mirosseni",
        video: "https://www.youtube.com/watch?v=4nsKDJlpUbA",
      },
    ];

    return (
      <React.Fragment>
        <div className="navigation">
          <h2>kountdown</h2>
          <div className="play-pause">
            <div className="play" onClick={() => handlePlay()}>
              <FontAwesomeIcon icon={this.state.playing ? faPause : faPlay} />
            </div>
            <div className="mute" onClick={() => handleMute()}>  <FontAwesomeIcon icon={this.state.mute ? faVolumeUp : faVolumeMute} /></div>
          </div>
        </div>

        <div className="main-container">
          {this.state.myvideoIndex !== "" &&
          arrayqueue[this.state.setMyvideoIndex].song === this.state.myvideo ? (
            <div className="tv-container">
              <div className="countdown">
                <h2 className={this.state.songid === 10 ? "ten" : "other"}>
                  {this.state.songid}
                </h2>
              </div>

              <div className="tv">
                <img src="images/tv.png" alt="tv" />
              </div>
              <ReactPlayer
                url={arrayqueue[this.state.setMyvideoIndex].video}
                className="react-player"
                muted={this.state.mute}
                controls={true}
                playing={this.state.playing}
                config={{
                  youtube: {
                    playerVars: {
                      start: this.state.myvideo === "When A Fire Starts To Burn" ? 73 : 33,
                      end: this.state.myvideo === "When A Fire Starts To Burn" ? 153 : 103,
                      showinfo: false,
                    },
                  },
                }}
                onEnded={playNext}
                className="frame"
              />
            </div>
          ) : (
            <h1>Loading...</h1>
          )}

          <div className="playlist-container" id="style-1">
            {arrayqueue.map((item, index) => {
              return (
                <div
                  className="artist-container"
                  key={index}
                  onClick={() => handleClick(item, index)}
                >
                  <div className="artist-info">
                    <img
                      src={item.thumbnail}
                      alt={item.album}
                      className={
                        this.state.myvideo === item.song
                          ? "album active"
                          : "album"
                      }
                    />
                    <div className="song-artist">
                      <p>{item.song}</p>
                      <p>{item.artist}</p>
                    </div>

                    <p class="item-id">{item.id}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Playlist;
