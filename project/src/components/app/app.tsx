import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from 'src/const';
import {Film, Main, MyList, SignIn, Player, Review} from 'src/pages';
import {NotFoundPage, PrivateRoute} from 'src/components';

type Props= {
  genre: string;
  date: string;
  titleFilm: string;
};

const App = ({genre, date, titleFilm}: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Main genre={genre} date={date} titleFilm={titleFilm}/>}/>
      <Route path={AppRoute.Film} element={<Film />}/>
      <Route path={AppRoute.SignIn} element={<SignIn />}/>
      <Route path={AppRoute.Review} element={<Review />}/>
      <Route path={AppRoute.Player} element={<Player />}/>

      <Route path={AppRoute.MyList} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <MyList />
        </PrivateRoute>
      }
      />

      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  </BrowserRouter>
);

export default App;
