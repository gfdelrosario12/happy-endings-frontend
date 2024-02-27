import "./App.css";
import Body from "./components/Body.js";
import NavBar from "./components/NavBar.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Body />}></Route>)
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
