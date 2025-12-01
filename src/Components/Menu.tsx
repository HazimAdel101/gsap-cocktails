import { useRef, useState } from "react";
import { sliderLists } from "../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Menu = () => {
  const [activeTab, setActiveTab] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".cocktail img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        opacity: 1,
        duration: 1,
        xPercent: 0,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".details h2",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
      }
    );

    gsap.fromTo(
      ".details p",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
      }
    );
  }, [activeTab]);

  const goToSlide = (index: number) => {
    // Convert ID to array index (IDs are 1-based, indices are 0-based)
    const targetIndex = index - 1;
    // Calculate new index with proper wrapping for negative numbers
    const newIndex =
      ((targetIndex % sliderLists.length) + sliderLists.length) %
      sliderLists.length;
    // Convert back to ID (1-based)
    setActiveTab(newIndex + 1);
  };

  const getCocktail = (index: number) => {
    // Ensure index wraps around if it exceeds the number of tabs
    const adjustedIndex =
      ((index % sliderLists.length) + sliderLists.length) % sliderLists.length;
    return sliderLists[adjustedIndex];
  };

  return (
    <section id="menu" aria-labelledby="menu-heading" className="px-5">
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((slider) => {
          const isActive = activeTab === slider.id;
          return (
            <button
              onClick={() => setActiveTab(slider.id)}
              key={slider.id}
              type="button"
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              aria-label={slider.name}
            >
              {slider.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(activeTab - 1)}
          >
            <span>prevCocktail</span>
            <img
              src="/images/right-arrow.png"
              alt="arrow-right"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(activeTab + 1)}
          >
            <span>nextCocktail</span>
            <img
              src="/images/left-arrow.png"
              alt="left-right"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={getCocktail(activeTab - 1).image}
            alt={getCocktail(activeTab - 1).name}
          />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{getCocktail(activeTab - 1).name}</p>
          </div>
          <div className="details">
            <h2>{getCocktail(activeTab - 1).title}</h2>
            <p>{getCocktail(activeTab - 1).description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
