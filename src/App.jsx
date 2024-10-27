import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 text-white bg-primary">
          <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Works />
          <Tech />

          <div className="z-0 realative">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
