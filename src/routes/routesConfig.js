import PeoplePage from "../containers/PeoplePage/PeoplePage";
import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage";
import PersonPage from "../containers/PersonPage";
import FavouritesPage from "../containers/FavouritesPage/FavouritesPage";
import SearchPage from "../containers/SearchPage";
import ErrorMessage from "../components/ErrorMessage";

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage/>
    },
    {
        path: '/people',
        exact: true,
        element: <PeoplePage/>
    },
    {
        path: '/people/:id',
        exact: true,
        element: <PersonPage/>
    },
    {
        path: '/favourites',
        exact: true,
        element: <FavouritesPage/>
    },
    {
        path: '/search',
        exact: true,
        element: <SearchPage/>
    },
    {
        path: '/fail',
        exact: true,
        element: <ErrorMessage/>
    },
    {
        path: '/not-found',
        exact: true,
        element: <NotFoundPage/>
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage/>
    },
]

export default routesConfig