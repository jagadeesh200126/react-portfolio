import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./component/Menu";
import About from "./component/About";
import Resume from "./component/Resume";
import Contact from "./component/Contact";
import Project from "./component/Projects";
import Home from "./component/Home";

function App(props) {
  return (
    <BrowserRouter>
        <Menu/>

            <Routes>
                  <Route path={`/`} element={<Home/>}/>
                  <Route path={`/Project`} element={<Project/>}/>
                  <Route path={`/Resume`} element={<Resume/>}/>
                  <Route path={`/Contact`} element={<Contact/>}/>
                  <Route path={`/About`} element={<About/>}/>
                  <Route path={`/*`} element={<Pnf/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default App