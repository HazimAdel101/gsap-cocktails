import { featureLists, goodLists } from "../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        duration: 1,
        maskPosition: "center",
        maskSize: "400%",
        ease: "power1.inOut",
      })
      .to('#masked-content', {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      })
  });
  return (
    <section id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The Art</h2>
      </div>

      <div className="content w-full">
        <ul className="space-y-4 will-fade">
          {goodLists.map((feature) => (
            <li
              className="flex items-center  justify-start gap-2"
              key={feature}
            >
              <img src="/images/check.png" alt="check" />
              <p>{feature}</p>
            </li>
          ))}
        </ul>

        <div className="cocktail-img">
          <img
            src="/images/under-img.jpg"
            alt="cocktail"
            className="abs-center masked-img size-full object-contain"
          />
        </div>

        <ul className="space-y-4 will-fade">
          {featureLists.map((feature) => (
            <li className="flex items-center justify-start gap-2" key={feature}>
              <img src="/images/check.png" alt="check" />
              <p className="md:w-fit w-">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="masked-container">
        <h2 className="will-fade">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3 className="">Made with craft, Poured with Passion</h3>
            <p className="">
              This isn&apos;t just a drink, it&apos;s a carefully crafted moment
              made just for you.
            </p>
          </div>
        </h2>
      </div>
    </section>
  );
};
