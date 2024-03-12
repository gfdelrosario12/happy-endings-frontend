import "./App.css";
import Home from "./components/Home.js";
import UserHome from "./components/pages/UserPage/UserHome.js";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/user" element={<UserHome />} />
    </Routes>
  );
}

export default App;
