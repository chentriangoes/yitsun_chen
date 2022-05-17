import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    // home -- /
    // work -- /work
    // project -- /project
    // contact -- /project
    // Resume -- /resume
   
    <BrowserRouter>
    
    <MainLayout>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yitsun_chen" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/coding" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />


    </Routes>
    </MainLayout>
    
    </BrowserRouter>


  
/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
