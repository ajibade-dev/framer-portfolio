import { useEffect, useState } from "react";
import useMediaQUery from "./hooks/useMediaQuery"
import Navbar from "./scenes/Navbar"
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing"
import LineGradient from "./components/LineGradient"
import  MySkills from "./scenes/MySkills"
import Projects from "./scenes/Projects"
import Testimonials from "./scenes/Testimonials"
import Contact from "./scenes/Contact"

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQUery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <div className="mt-0 md:mt-32 w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      
      <div className="mt-0 md:mt-32 w-5/6 mx-auto md:h-full">
          <MySkills />
      </div>
   
      <div className=" mt-0 md:mt-32 w-5/6 mx-auto">
      <Projects />
      </div>
      
      <div className="w-5/6 md:h-full mx-auto">
      <Testimonials />
      </div>
      <div className="mt-0 md:mt-32 w-5/6 md:h-full mx-auto">
      <Contact />
      </div>
    </div>
  );
}

export default App;
