import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import { theme } from "./styles/theme/theme";
import routeConstants from "./constant/routeConstants";
import { BaseLayout } from "./components";
import { Home, PageNotFound, Search, ShowDetail, Shows } from "./screens";

// separate routes configuration
const routes = [
  {
    path: routeConstants.HOME,
    element: <BaseLayout />, // main layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: routeConstants.SHOWS,
        element: <Shows />,
      },
      {
        path: `${routeConstants.SHOWS}/:id`,
        element: <ShowDetail />,
      },
      {
        path: routeConstants.SEARCH,
        element: <Search />,
      },
    ],
  },
  {
    path: "*", element: <PageNotFound />
  }
];

function App() {

  return (
    <>
      App
    </>
  )
}

export default App
