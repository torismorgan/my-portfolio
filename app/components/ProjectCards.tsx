"use client";

import { useState } from "react";

type Project = {
  num: string;
  title: string;
  description: string;
  bg: string;
  textColor: string;
  white: boolean;
  tabRight?: boolean;
};

const PROJECTS: Project[] = [
  {
    num: "1",
    title: "CONCEPT WEBSITE",
    description: "glasses as portals into three style worlds.",
    bg: "#F1DA65",
    textColor: "#1f1f1f",
    white: false,
  },
  {
    num: "2",
    title: "APP REDESIGN",
    description: "shift from tracking to finding workout partners nearby.",
    bg: "#1f1f1f",
    textColor: "#f5f2ea",
    white: true,
  },
  {
    num: "3",
    title: "TYPE STUDY",
    description: "one typeface explored as image, habitat, and component.",
    bg: "#72C16B",
    textColor: "#1f1f1f",
    white: false,
    tabRight: true,
  },
];

function StarIcon({ white = false }: { white?: boolean }) {
  return white ? (
    <svg width="52" height="52" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M18.4944 1.69979C18.8384 -0.566749 22.1051 -0.566749 22.4491 1.69979L22.8404 4.27806C23.1036 6.01242 25.313 6.59179 26.3934 5.20978L27.9802 3.18014C29.3888 1.37829 32.2299 2.96974 31.4292 5.11213L30.4249 7.79939C29.8174 9.42477 31.4262 10.9996 33.0383 10.3576L35.6405 9.32133C37.7549 8.47928 39.4092 11.2594 37.6606 12.7161L35.2826 14.697C33.9645 15.7951 34.5499 17.9342 36.2434 18.208L39.2628 18.6963C41.5038 19.0587 41.5038 22.2826 39.2628 22.645L36.2434 23.1333C34.5499 23.4072 33.9645 25.5463 35.2826 26.6443L37.6606 28.6252C39.4093 30.0819 37.7549 32.862 35.6405 32.02L33.0383 30.9837C31.4262 30.3417 29.8174 31.9165 30.4249 33.5419L31.4292 36.2292C32.2299 38.3716 29.3888 39.963 27.9802 38.1612L26.3934 36.1315C25.313 34.7495 23.1036 35.3289 22.8404 37.0632L22.4491 39.6415C22.1051 41.9081 18.8384 41.9081 18.4944 39.6415L18.1031 37.0632C17.8399 35.3289 15.6306 34.7495 14.5501 36.1315L12.9634 38.1612C11.5547 39.963 8.71362 38.3716 9.51431 36.2292L10.5187 33.5419C11.1261 31.9165 9.51731 30.3417 7.90525 30.9837L5.30302 32.02C3.1886 32.862 1.53428 30.0819 3.28295 28.6252L5.66093 26.6443C6.97906 25.5463 6.39367 23.4072 4.70011 23.1333L1.68073 22.645C-0.560231 22.2826 -0.560237 19.0587 1.68073 18.6963L4.70011 18.208C6.39367 17.9342 6.97906 15.7951 5.66093 14.697L3.28296 12.7161C1.53429 11.2594 3.1886 8.47928 5.30302 9.32133L7.90525 10.3576C9.5173 10.9996 11.1261 9.42476 10.5187 7.79939L9.51431 5.11212C8.71361 2.96973 11.5547 1.37829 12.9634 3.18014L14.5501 5.20978C15.6306 6.59179 17.8399 6.01242 18.1031 4.27806L18.4944 1.69979Z" fill="#F7F5EC"/>
    </svg>
  ) : (
    <svg width="52" height="52" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M17.7218 2.28352C18.4706 -0.761125 22.7993 -0.761128 23.5481 2.28352L24.3533 5.55709C24.8346 7.51408 27.0702 8.44931 28.8016 7.41802L31.7215 5.67889C34.4364 4.06182 37.4839 7.19987 35.7881 9.86629L34.2252 12.3236C33.1139 14.071 34.0652 16.3921 36.0832 16.857L38.9433 17.5158C42.0454 18.2303 42.0454 22.6481 38.9433 23.3627L36.0832 24.0214C34.0652 24.4863 33.1139 26.8075 34.2252 28.5549L35.7881 31.0121C37.4839 33.6786 34.4364 36.8166 31.7215 35.1995L28.8016 33.4604C27.0702 32.4291 24.8346 33.3643 24.3533 35.3213L23.5481 38.5949C22.7993 41.6395 18.4706 41.6395 17.7218 38.5949L16.9166 35.3213C16.4353 33.3643 14.1997 32.4291 12.4682 33.4604L9.54841 35.1995C6.83349 36.8166 3.78597 33.6785 5.48181 31.0121L7.04463 28.5548C8.15596 26.8075 7.20462 24.4863 5.18662 24.0214L2.3266 23.3627C-0.775536 22.6481 -0.775532 18.2303 2.3266 17.5158L5.18662 16.857C7.20463 16.3921 8.15596 14.071 7.04462 12.3236L5.48181 9.86629C3.78597 7.19987 6.83349 4.06182 9.54841 5.67889L12.4682 7.41802C14.1997 8.44932 16.4353 7.51408 16.9166 5.55709L17.7218 2.28352Z" fill="#1F1F1F"/>
    </svg>
  );
}

export default function ProjectCards() {
  const [active, setActive] = useState<number | null>(null);

  // Cards always overlap each other by DEFAULT_OVERLAP in resting state
  const DEFAULT_OVERLAP = 20;
  // Active card bleeds an extra amount over its neighbours
  const ACTIVE_EXTRA = 10;

  return (
    <div className="flex items-stretch" style={{ height: "380px" }}>
      {PROJECTS.map((project, i) => {
        const isActive = active === i;
        const isInactive = active !== null && !isActive;
        const showTitle = isActive || active === null;

        // Non-first cards always slide left by DEFAULT_OVERLAP; active adds more
        const marginLeft = i === 0 ? 0 : -DEFAULT_OVERLAP + (isActive ? -ACTIVE_EXTRA : 0);
        // Active card also bleeds into right neighbour
        const marginRight = isActive && i < PROJECTS.length - 1 ? -ACTIVE_EXTRA : 0;
        // Default: leftmost card on top; active card always comes to front
        const defaultZ = PROJECTS.length + 1 - i;
        const zIndex = isActive ? PROJECTS.length + 5 : defaultZ;

        return (
          <div
            key={i}
            className="flex flex-col cursor-pointer"
            style={{
              flexGrow: isActive ? 4 : isInactive ? 0.6 : 1,
              flexShrink: 1,
              flexBasis: 0,
              transition: "flex-grow 0.5s cubic-bezier(0.4, 0, 0.2, 1), margin-left 0.5s cubic-bezier(0.4, 0, 0.2, 1), margin-right 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              overflow: "visible",
              position: "relative",
              zIndex,
              marginLeft,
              marginRight,
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Folder tab */}
            <div
              className={`${project.tabRight ? "self-end" : "self-start"} px-5 pt-3 pb-1 rounded-t-[14px] font-display font-bold leading-none shrink-0`}
              style={{
                backgroundColor: project.bg,
                color: project.textColor,
                minWidth: "130px",
                fontSize: "26px",
              }}
            >
              {project.num}
            </div>

            {/* Card body */}
            <div
              className="flex flex-col p-8 flex-1 overflow-hidden"
              style={{
                backgroundColor: project.bg,
                color: project.textColor,
                borderRadius: project.tabRight ? "24px 0 24px 24px" : "0 24px 24px 24px",
              }}
            >
              {/* Title + description — centered vertically */}
              <div className="flex-1 flex flex-col justify-center">
                <p
                  className="font-display font-semibold mb-3"
                  style={{
                    fontSize: "clamp(24px, 2.8vw, 42px)",
                    lineHeight: 1.1,
                    opacity: showTitle ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    transitionDelay: showTitle ? "0.1s" : "0s",
                  }}
                >
                  {project.title}
                </p>

                {/* Description — visible only when active */}
                <p
                  className="font-sans font-light text-[17px] leading-[25px]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    transitionDelay: isActive ? "0.25s" : "0s",
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Shape — always visible */}
              <div className="shrink-0">
                <StarIcon white={project.white} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
