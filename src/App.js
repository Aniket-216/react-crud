import "./App.css";
import Navbar from "./components/layout/Navbar";
import Main from "./components/pages/Main";
import Home from "./components/pages/Home";
import LoginData from "./components/pages/LoginData";
import View from "./components/view/View";
import Update from "./components/update/Update";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/LoginData" element={<LoginData />}></Route>
          <Route path="/View/:id" element={<View />}></Route>
          <Route path="/Update" element={<Update />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
