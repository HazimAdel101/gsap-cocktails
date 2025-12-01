import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { openingHours, socials } from "../Constants";

export const Contact = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        stagger: 0.05,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        stagger: 0.05,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#f-left-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      }, '<');
  });
  return (
    <footer id="contact" className="px-5">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />
      <div className="content">
        <h2 className="title">Where to Find Us</h2>
        <div className="">
          <h2>Visit our bar</h2>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div className="">
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@mojito.com</p>
        </div>
        <div className="">
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>
        <div className="">
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                aria-lable={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
