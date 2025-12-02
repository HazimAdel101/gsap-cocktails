import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const About = () => {
  useGSAP(() => {
    const splitTitle = SplitText.create("#about h2", { type: "words" });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });
    scrollTimeline
      .from(splitTitle.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.out",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });
  
  return (
    <section id="about" className="px-5 md:px-[4rem]">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge capitalize">Best cocktails</p>
            <h2>
              where every detail matters <span className="text-white">- </span>
              from muddle to granish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
          </div>
          <p className="md:text-3xl text-xl font-bold">
            <span>4.5</span>/5
          </p>
          <p className="text-sm text-white-100">+12,000 Customers</p>
        </div>
        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy" />
            <img src="/images/abt1.png" alt="about-1" />
          </div>
          <div className="md:col-span-6">
            <div className="noisy" />
            <img src="/images/abt2.png" alt="about-2" />
          </div>
          <div className="md:col-span-3">
            <div className="noisy" />
            <img src="/images/abt5.png" alt="about-3" />
          </div>
        </div>
        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy" />
            <img src="/images/abt3.png" alt="about-3" />
          </div>
          <div className="md:col-span-4">
            <div className="noisy" />
            <img src="/images/abt4.png" alt="about-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
