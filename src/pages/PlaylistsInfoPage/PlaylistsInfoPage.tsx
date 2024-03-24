import { useParams } from 'react-router-dom';
import { PLAYLISTS } from '@/data';
import './PlaylistsInfoPage.css';

export const PlaylistsInfoPage = () => {
  const { playlistId } = useParams();
  const playlist = PLAYLISTS[Number(playlistId)];

  if (!playlist || !playlist.songs.length) {
    return (
      <div className="playlistsInfoPage">
        <h2>PlaylistsInfoPage</h2>

        <div className="playlist">
          <p>Такого плейлиста нет</p>
        </div>
      </div>
    );
  }

  return (
    <div className="playlistsInfoPage">
      <h2>PlaylistsInfoPage</h2>

      <div className="playlist">
        <div>
          Жанр: <b>{playlist.genre}</b>
        </div>
        <div>
          Название: <b>{playlist.name}</b>
        </div>
        <hr />
        {playlist.songs.map((song, i) => (
          <div key={i}>- {song}</div>
        ))}
      </div>
    </div>
  );
};
