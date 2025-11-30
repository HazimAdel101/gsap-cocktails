import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import {
  Navbar,
  Hero,
  Cocktails,
  About,
  Art,
  Menu,
  Contact,
} from "./Components";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
