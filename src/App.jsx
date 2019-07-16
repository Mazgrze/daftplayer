import React, { Component } from 'react';
import trackList from './album';
import './App.scss';
import Head from './Head/Head';
import Main from './Main/Main';
import NextTrack from './NextTrack/NextTrack';
import Playlist from './Playlist/Playlist';
import MoreInfo from './MoreInfo/MoreInfo';
import background from './bg_image.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaylist: false,
      isAlbumInfo: false,
      isPlayed: false,
      isShuffle: false,
      isRepeat: false,
      tracks: trackList,
      currentTrack: 0,
    };
  }

  getNextTrack() {
    const { tracks, currentTrack } = this.state;
    let nextTrack;
    if (tracks && tracks.length) {
      if (currentTrack + 1 < tracks.length) {
        nextTrack = tracks[currentTrack + 1];
      }
    }
    return nextTrack;
  }

  togglePlaylist = () => {
    this.setState(prevState => ({
      isAlbumInfo: false,
      isPlaylist: !prevState.isPlaylist,
    }));
  };

  playTrack = (trackId) => {
    this.setState((prev) => {
      if (trackId >= 0 && trackId < prev.tracks.length) {
        return {
          currentTrack: trackId,
        };
      }
      return {
        currentTrack: 0,
      };
    });
  };

  showMainScreen = () => {
    this.setState({
      isPlaylist: false,
      isAlbumInfo: false,
    });
  };

  shufflePlay = () => {
    this.setState({
      isPlayed: true,
      isShuffle: true,
    });
  };

  togglePlay = () => {
    this.setState(prev => ({
      isPlayed: !prev.isPlayed,
    }));
  };

  nextTrack = () => {
    this.setState((prev) => {
      // Just next song
      if (prev.tracks.length > prev.currentTrack + 1) {
        return {
          currentTrack: prev.currentTrack + 1,
        };
      }

      // first song
      if (prev.isRepeat && !prev.isShuffle) {
        return {
          currentTrack: 0,
        };
      }
      // fallback
      return { currentAlbum: 0, currentTrack: 0 };
    });
  };

  prevTrack = () => {
    this.setState((prev) => {
      if (prev.currentTrack > 0) return { currentTrack: prev.currentTrack - 1 };
      if (prev.currentTrack === 0) {
        if (prev.isRepeat && prev.isShuffle) {
          return {
            currentTrack: prev.tracks.length - 1,
          };
        }
      }
      // fallback
      return { currentAlbum: 0, currentTrack: 0 };
    });
  };

  render() {
    const {
      tracks, currentTrack, isPlayed, isPlaylist, isAlbumInfo,
    } = this.state;
    return (
      <div className="app">
        <img className="app__background" src={background} alt="" />
        <Head
          track={tracks[currentTrack]}
          goBack={this.showMainScreen}
          isPlayed={isPlayed}
          togglePlay={this.togglePlay}
          isPlaylist={isPlaylist}
          showInfo={() => {
            this.setState(prev => ({ isAlbumInfo: !prev.isAlbumInfo }));
          }}
        />

        <Main
          tracks={tracks}
          currentTrack={currentTrack}
          isPlayed={isPlayed}
          togglePlay={this.togglePlay}
          next={this.nextTrack}
          prev={this.prevTrack}
          playTrack={this.playTrack}
        />
        <MoreInfo isActive={isAlbumInfo} track={tracks[currentTrack]} />
        <NextTrack nextTrack={this.getNextTrack()} showPlaylist={this.togglePlaylist} />

        <Playlist
          tracks={tracks}
          isActive={isPlaylist}
          currentTrack={currentTrack}
          playTrack={this.playTrack}
          shufflePlay={this.shufflePlay}
          togglePlaylist={this.togglePlaylist}
        />
      </div>
    );
  }
}

export default App;
