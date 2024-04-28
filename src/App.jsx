import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar/Navbar";
import HeroPage from "./component/HeroPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroPage />
    </>
  );
}

export default App;
