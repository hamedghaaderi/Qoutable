import Homepage from "./pages/Homepage";
import { useRoutes } from "react-router-dom";
const App = () => {
  const routes = useRoutes([{ path: "/", element: <Homepage /> }]);
  return <>{routes}</>;
};

export default App;
