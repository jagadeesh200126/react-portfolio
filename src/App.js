import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";
import About from "./component/About";
import Resume from "./component/Resume";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import Home from "./component/Home";
import Pnf from "./component/Pnf";

function App(props) {
  return (
    <BrowserRouter>
        <Menu/>

            <Routes>
                  <Route path={`/`} element={<Home/>} />
                  <Route path={`/Projects`} element={<Projects/>} />
                  <Route path={`/Resume`} element={<Resume/>} />
                  <Route path={`/Contact`} element={<Contact/>} />
                  <Route path={`/About`} element={<About/>} />
                  <Route path={`/*`} element={<Pnf/>} />
            </Routes>
    </BrowserRouter>
  )
}

export default App