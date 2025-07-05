import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const ProjectCard = ({ title, desc, imgSrc, imgAlt, link }) => (
    <div className="flex flex-col space-y-2">
      <h2 className="text-3xl font-bold text-white leading-tight">
        {title}
      </h2>
      <p className="text-white-50 md:text-xl">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} on GitHub`}
        className="mt-2"
      >
        <img
          src="/images/logos/github.png"
          alt="GitHub logo"
          className="w-8 h-8"
        />
      </a>
    </div>
  );

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              {/*<h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
              <a className="icon" target="_blank" href="https://github.com/" key="https://github.com/">
                <img src="images/logos/github.png" />
              </a>*/}

              <ProjectCard
                title="On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde"
                desc="An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience."
                link="https://github.com/your-ryde-repo"
              />
              
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              {/*<h2>The Library Management Platform</h2>*/}
              <ProjectCard
                title="Testing testing ok"
                desc="Testing still to make sur eit look good on both devices"
                link="https://github.com/your-library-repo"
              />
              
            </div>
            

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              {/*<h2>YC Directory - A Startup Showcase App</h2>*/}
              <ProjectCard
                title="Caitlin has a big behind  asdasd asdasdasdsa asdas "
                desc="She loves sushi and likes to eat as much as possible."
                link="https://github.com/your-library-repo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;