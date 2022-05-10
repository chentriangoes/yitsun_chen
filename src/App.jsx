import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    // home -- /
    // project - /project
    // about -- /about 
    <BrowserRouter>
    
    <MainLayout>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />

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
