import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tour from "./components/Tour";
import Footer from "./components/Footer";

import { navBarLinks, navIcons } from "./links";
import data from './data';
import tourData from "./tourData";

function App() {
  return (
    <>
      <Navbar
        navBarLinks={navBarLinks}
        navIcons={navIcons}
      ></Navbar>

      <Hero></Hero>
      <About></About>

      <Services
        data={data}
      ></Services>

      <Tour
        tourData={tourData}
      ></Tour>

      <Footer
        navBarLinks={navBarLinks}
        navIcons={navIcons}>
      </Footer>
    </>
  );
}

export default App;
