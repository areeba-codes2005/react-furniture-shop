import "./App.css";
import { Routes, Route } from "react-router-dom";
import appRoutes from "./appRoutes/appRoutes";

function App() {
  return (
    <Routes>
      {appRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
