import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";


function App() {
  return (
    <div>

      <NavBar />
      <Outlet />

    </div>
  );
}

export default App;
