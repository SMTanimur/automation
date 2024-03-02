
import { ITeamMember } from "~/types";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { teamMembers } from "~/data/team-members";
import { Icons } from "../ui/Icons";
const OurTeamMembers = () => {

  const [totalSlides, setTotalSlides] = useState(0);

 

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 1, spacing: 24 },
        },

        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 32 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 32 },
        },
      },
      slides: { perView: 1.4 },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
 // This effect updates the total slides state whenever instanceRef.current changes
 useEffect(() => {
  if (instanceRef.current) {
    const slides = instanceRef.current.track.details.slides.length;
    setTotalSlides(slides);
  }
}, [instanceRef.current]);
  function prevSlide() {
    instanceRef.current?.prev();
  }

  function nextSlide() {
    instanceRef.current?.next();
  }

  return (
    <section className=" overflow-hidden  bg-gray-950">
      <div className="container">
        <div className="mb-10 mr-30px max-w-[680px] md:mb-[3.75rem] md:pr-[140px]">
          <div className="text-left">
            <span className="mb-[.625rem] block  text-base	 font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md">
              our active members
            </span>
            <h3 className=" text-xl font-bold leading-[1.25]  text-white md:text-2xl">
              Transforming Challenges into Seamless Solutions
            </h3>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col">
            <div ref={sliderRef} className="keen-slider max-md:order-2">
              {
                <>
                  {teamMembers?.map((item: ITeamMember, idx) => (
                    <div
                      key={item.id}
                      className="keen-slider__slide !overflow-visible min-w-[406.667px] max-w-[406.667px] "
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div className="group">
                        <div className="relative z-[1] mr-[30px] overflow-hidden rounded-md after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-[100] after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear">
                          <div className="max-h-[440px] ">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={640}
                              height={712}
                              className="object-cover  transition-transform duration-500 [transform:scale(1.05)] group-hover:[transform:scale(1)]"
                              style={{
                                color: "transparent",
                                height: "100%",
                              }}
                            />
                          </div>

                          <div className="absolute bottom-1 left-[2px]">
                            <div className="pt-2.5 styles_social-hoverable-area__ZFmdx">
                              <div className="inline-grid h-[65px] w-[65px] cursor-pointer place-items-center rounded-md bg-primary transition-colors duration-300 styles_hover-me__mUB4m">
                                <Icons.share size={20} className="text-white" />
                              </div>

                              <ul className="styles_social-list__qptyG">
                                {item.socialLinks.map((link, idx) => {
                                  const Icon = Icons[link.icon];
                                  return (
                                    <li key={idx}>
                                      <Link
                                        href={link.url}
                                        className="inline-grid h-[35px] w-[35px] place-items-center rounded-md bg-gray-700 text-white transition-colors hover:bg-primary"
                                      >
                                        <Icon />
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-[-70px] rounded-md  p-5 pr-[50px] pt-[93PX] text-center bg-gray-900">
                          <h3 className="text-white text-xl">{item.name}</h3>
                          <p>{item.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              }
            </div>
            <div className="flex flex-wrap gap-5 max-md:order-1 max-md:mb-8 md:absolute md:right-0 md:top-[-136px] md:justify-center">
              <div
                className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-[1rem] text-white transition-colors hover:bg-primary md:h-[60px] md:w-[60px] left-10 bg-[#313133]"
                onClick={prevSlide}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
                </svg>
              </div>
              <div
                className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-[1rem] text-white transition-colors hover:bg-primary md:h-[60px] md:w-[60px] right-10 bg-[#313133]"
                onClick={nextSlide}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative z-[4] mt-10 flex flex-wrap items-center justify-center gap-4 max-md:ml-3 lg:mt-[60px]">
            {Array.from({ length: totalSlides }, (_, idx) => (
          <span
            className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full outline outline-2 outline-offset-[5px] outline-transparent transition-colors cursor-pointer bg-primary"
            key={idx}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx);
            }}
          ></span>
        ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamMembers;
