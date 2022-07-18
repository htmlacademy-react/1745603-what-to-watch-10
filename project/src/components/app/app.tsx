import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from 'src/const';
import {Film, Main, MyList, SignIn, Player, Review} from 'src/pages';
import {NotFoundPage, PrivateRoute} from 'src/components';
import {FilmInfo} from 'src/types/films';

type Props= {
  films: FilmInfo[];
};

const App = ({films}: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Main films={films} />}/>
      <Route path={AppRoute.Film} element={<Film filmInfo={films[0]} />}/>
      <Route path={AppRoute.SignIn} element={<SignIn />}/>
      <Route path={AppRoute.Review} element={<Review filmInfo={films[0]} />}/>
      <Route path={AppRoute.Player} element={<Player src={films[0].player} />}/>

      <Route path={AppRoute.MyList} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <MyList films={films} />
        </PrivateRoute>
      }
      />

      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  </BrowserRouter>
);

export default App;
