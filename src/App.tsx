import AuthorsPage from "./pages/Authorspage";
import Homepage from "./pages/Homepage";
import { useRoutes } from "react-router-dom";
const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/authors", element: <AuthorsPage /> },
  ]);
  return <>{routes}</>;
};

export default App;
