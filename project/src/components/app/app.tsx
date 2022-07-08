import Main from '../../pages/main/main';

type AppMainProps= {
  genre: string;
  date: string;
  titleFilm: string;
};

function App({genre, date, titleFilm}: AppMainProps): JSX.Element {
  return (
    <Main
      genre = {genre}
      date = {date}
      titleFilm = {titleFilm}
    />
  );
}

export default App;
