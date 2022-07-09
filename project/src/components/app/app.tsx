import Main from '../../pages/main/Main';

type Props= {
  genre: string;
  date: string;
  titleFilm: string;
};

const App = ({genre, date, titleFilm}: Props): JSX.Element => (
  <Main
    genre = {genre}
    date = {date}
    titleFilm = {titleFilm}
  />
);

export default App;
