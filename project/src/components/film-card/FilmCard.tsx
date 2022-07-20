import { Link } from 'react-router-dom';
import { FilmInfo } from 'src/types/films';
import { useRef } from 'react';

type Props= {
  filmInfo: FilmInfo;
  autoPlay: boolean;
};

const FilmCard = ({filmInfo, autoPlay}: Props): JSX.Element => {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onArticleHover = () => {
    if(videoRef.current) {
      videoRef.current.play();
    }
  };

  const onArticleLeave = () => {
    if(videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onArticleHover} onMouseLeave={onArticleLeave}>
      <div className="small-film-card__image">
        <video src={filmInfo.player} className="player__video" poster={filmInfo.src} ref={videoRef} ></video>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="/films/:id">{filmInfo.title}</Link>
      </h3>
    </article>
  );
};

export default FilmCard;
