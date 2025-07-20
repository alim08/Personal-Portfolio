const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
  
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "<strong>Relevant Coursework</strong> - Data Structures and Algorithms, Computer Organization and Architecture, Operating Systems, Computer Networks, Database Systems, Software Engineering, Machine Learning, Discrete Math, Linear Algebra, and more.",
    imgPath: "/images/ufbanner.png",
    logoPath: "/images/UF.png",
    title: "University of Florida",
    date: "Fall 2022 - Present",
    responsibilities: [
      "<strong>Vice President of Pi Delta Psi Fraternity</strong> - Coordinated chapter events and mentored new members, fostering leadership and community engagement.",
      "<strong>Florida Cicerone Tour Guide</strong> - Guided tours of the University of Florida campus, providing historical and cultural insights to visitors.",
      "<strong>Organizer, STAT (Students Today, Alumni Tomorrow)</strong> - Organized events for students to connect with alumni and learn about career opportunities.",
    ],
  },
  {
    review:
      "During my Summer 2024 software engineering internship, I spearheaded the development of a modern, user-centric React.js drag-and-drop interface for seamless code-quality submissions, architected a robust AST-powered Python analyzer for automated naming-convention enforcement, and integrated a real-time RESTful API pipeline to deliver instant feedback—demonstrating full-stack expertise in front-end engineering, automated code analysis, and scalable system architecture.",
    imgPath: "/images/l3banner.png",
    logoPath: "/images/l3harris.png",
    title: "Software Engineer Intern",
    date: "May 2024 - August 2024",
    responsibilities: [
      "<strong>Sleek React.js Upload Interface</strong> - Crafted a drag-and-drop React front-end handling 150+ weekly submissions, reducing upload errors by 30% and boosting user adoption by 50%.",
      "<strong>AST-Powered Python Detector</strong> - Developed an AST-based algorithm with custom regex that flags naming-convention violations at 98% accuracy, cutting manual review time by 60%.",
      "<strong>Real-Time Feedback Pipeline</strong> - Integrated the UI with a REST API to deliver violation reports in under 5 seconds per file—accelerating code review cycles by 40% and increasing throughput by 25%. ",
    ],
  },
  {
    review:
      "During my Summer 2025 internship, I architected a Jenkins-driven CI/CD platform that fully automates builds, tests, and deployments across dev, staging, and prod, and then layered in an AI-powered review engine—fusing GPT-4 prompt templates with CodeQL static analysis—to catch issues earlier. By weaving these pieces into a seamless, end-to-end pipeline, I ensured every release was fast, reliable, and rooted in deeper code quality checks—demonstrating my knack for DevOps automation, AI integration, and scalable system design.",
    imgPath: "/images/l3banner.png",
    logoPath: "/images/l3harris.png",
    title: "Software Engineer Intern",
    date: "May 2025 - August 2025",
    responsibilities: [
      "<strong>Jenkins-Powered Rapid Release Pipeline</strong> - Built and maintained a CI/CD workflow automating builds, tests, and deployments across development, staging, and production—accelerating release cycles by 3× and reducing manual deployment steps by 60%.",
      "<strong>AI-Enhanced Code Review Engine</strong> - Orchestrated an OpenAI GPT-4–driven review system with fine-tuned prompts alongside CodeQL static analysis—boosting peer-review throughput by 50% and cutting average feedback time in half.",
      "<strong>End-to-End Multi-Environment Automation</strong> - Automated 100% of builds, tests, and deployments across dev, staging, and prod environments—eliminating manual handoffs and ensuring consistent, high-quality releases.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/alim08",
    imgPath: "/images/image 189.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/adamdlim/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};