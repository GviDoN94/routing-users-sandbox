import { PLAYLISTS } from '@/data';
import './PlaylistsPage.css';
import { Link } from 'react-router-dom';

export const PlaylistsPage = () => {
  return (
    <div className="playlistsPage">
      <h2>PlaylistsPage</h2>

      <div className="playlists">
        {PLAYLISTS.map(({ id, name, genre }) => {
          return genre !== 'Non Music' ? (
            <Link
              to={`/playlists/${id}`}
              key={id}
            >
              {name}
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};
