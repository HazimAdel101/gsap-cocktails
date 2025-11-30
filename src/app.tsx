import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Navbar, Hero, Cocktails, About, Art, Menu } from "./Components";

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
    </main>
  );
};

export default App;
