import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/Main';
import Film from '../../pages/film/Film';
import SignIn from '../../pages/sign-in/SignIn';
import MyList from '../../pages/my-list/MyList';
import Review from '../../pages/review/Review';
import Player from '../../pages/player/Player';
import NotFoundPage from '../not-found-page/NotFoundPage';
import PrivateRoute from '../../components/private-route/PrivateRoute';

type Props= {
  genre: string;
  date: string;
  titleFilm: string;
};

const App = ({genre, date, titleFilm}: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Main genre = {genre} date = {date} titleFilm = {titleFilm}/>}/>
      <Route path={AppRoute.Film} element={< Film />}/>
      <Route path={AppRoute.SignIn} element={< SignIn />}/>
      <Route path={AppRoute.Review} element={< Review />}/>
      <Route path={AppRoute.Player} element={< Player />}/>

      <Route path={AppRoute.MyList} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <MyList />
        </PrivateRoute>
      }
      />

      <Route path='*' element={< NotFoundPage />}/>
    </Routes>
  </BrowserRouter>
);

export default App;
