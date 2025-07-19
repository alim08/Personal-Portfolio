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
      <div className="mt-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="inline-block"
        >
          <img
            src="/images/logos/github.svg"
            alt="GitHub logo"
            className="w-8 h-8"
          />
        </a>
      </div>
    </div>
  );

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/finline.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <ProjectCard
                title="finline: High-Performance Financial Market Data Pipeline"
                desc="Finline is a real-time pipeline in Go that ingests and cleans live market data, 
                spots anomalies as they happen, and delivers insights through a secure GraphQL API. 
                Under the hood it uses Redis Streams for fast streaming, PostgreSQL for reliable storage, 
                and JWT-protected subscriptions—showcasing my ability to design distributed, high-throughput 
                systems for demanding financial applications."
                link="https://github.com/alim08/fin_line"
              />
              
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/voyager.png"
                  alt="Library Management Platform"
                />
              </div>  
              {/*<h2>The Library Management Platform</h2>*/}
              <ProjectCard
                title="Voyager: Start your Next Voyage!"
                desc="Voyager is a full-stack application for optimizing store visits. 
                It leverages React, Node.js, and Google Maps APIs to provide efficient routes 
                based on real-time traffic and opening hours, demonstrating expertise in mapping 
                solutions, algorithm implementation (2-opt), and responsive UI/UX."
                link="https://github.com/brimatt16219/Voyager"
              />
              
            </div>
            

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/move.png" alt="YC Directory App" />
              </div>
              {/*<h2>YC Directory - A Startup Showcase App</h2>*/}
              <ProjectCard
                title="move"
                desc="Move is a React & Flask web app backed by MongoDB and Python algorithms, 
                letting you browse crowdsourced itineraries, discover the most popular attractions by time, and follow friends’ 
                activity trails for inspiration."
                link="https://github.com/jpatag/move"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;