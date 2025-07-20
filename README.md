````markdown
# Personal Portfolio

**A modern, responsive personal portfolio showcasing projects, skills, and experiences.**

---

## 🚀 Features

- **Interactive 3D Hero**: Smooth, interactive 3D model powered by Three.js and React Three Fiber.  
- **Dynamic Animations**: Engaging animations using GSAP and CSS keyframes.  
- **Responsive Design**: Built with Tailwind CSS and React Responsive for seamless viewing on all devices.  
- **Project Showcase**: Highlighted projects with image gallery and detailed descriptions.  
- **Experience Timeline & Counters**: Animated timeline and number counters to visualize milestones and metrics.  
- **Contact Form**: Client-side form integrated with EmailJS for quick outreach.  
- **Testimonials**: Carousel of client and peer testimonials.  

---

## 🧰 Tech Stack

- **Framework**: React 19 + Vite 4  
- **Styling**: Tailwind CSS 4  
- **3D & Canvas**: Three.js, @react-three/fiber, @react-three/drei, @react-three/postprocessing  
- **Animation**: GSAP, react-countup  
- **Utilities**: react-responsive, react-countup  
- **Email**: @emailjs/browser  
- **Linting & Dev**: ESLint, Prettier, Vite  

---

## 📁 Project Structure

```bash
Personal-Portfolio/
├─ public/                # Static assets (images, models)
├─ src/
│  ├─ components/         # Reusable UI components
│  ├─ constants/          # Data (nav links, cards, counters, testimonials)
│  ├─ styles/             # Global styles & Tailwind configs
│  └─ main.jsx            # React entry point
├─ .gitattributes         # Enforce LF endings
├─ .gitignore             # Ignored files
├─ package.json           # Dependencies & scripts
├─ postcss.config.js      # PostCSS setup
├─ tailwind.config.js     # Tailwind customization
└─ vite.config.js         # Vite config
````

---

## ⚡ Getting Started

### Prerequisites

* Node.js v18+
* npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/alim08/Personal-Portfolio.git
cd Personal-Portfolio

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open your browser at `http://localhost:5173` to view.

### Production Build

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔧 Configuration

* **Contact Form**: Set up an EmailJS account and create a `.env` file in the project root with:

  ```env
  VITE_EMAILJS_SERVICE_ID=your_service_id
  VITE_EMAILJS_TEMPLATE_ID=your_template_id
  VITE_EMAILJS_PUBLIC_KEY=your_public_key
  ```

* **Constants**: Edit `src/constants/index.js` to update navigation links, hero words, counters, experience cards, testimonials, and social links.

---

## 🚀 Deployment

This produces a static build in `dist/`. You can deploy it to any static hosting provider, such as Netlify, Vercel, GitHub Pages, or AWS S3.

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork this repo
2. Create a feature branch
3. Open a pull request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📫 Contact

* **LinkedIn**: [https://www.linkedin.com/in/adamdlim/](https://www.linkedin.com/in/adamdlim/)
* **GitHub**: [https://github.com/alim08](https://github.com/alim08)
* **Email**: [hello@adamlim.dev](mailto:hello@adamlim.dev)

Feel free to reach out with any questions or opportunities!

```
```
