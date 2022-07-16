import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from 'src/const';
import {Film, Main, MyList, SignIn, Player, Review} from 'src/pages';
import {NotFoundPage, PrivateRoute} from 'src/components';
import {FilmInfo} from 'src/types/films';

type Props= {
  filmInfo: FilmInfo[];
};

const App = ({filmInfo}: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Main filmInfo={filmInfo} />}/>
      <Route path={AppRoute.Film} element={<Film filmInfo={filmInfo}/>}/>
      <Route path={AppRoute.SignIn} element={<SignIn />}/>
      <Route path={AppRoute.Review} element={<Review filmInfo={filmInfo}/>}/>
      <Route path={AppRoute.Player} element={<Player filmInfo={filmInfo}/>}/>

      <Route path={AppRoute.MyList} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <MyList filmInfo={filmInfo}/>
        </PrivateRoute>
      }
      />

      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  </BrowserRouter>
);

export default App;
