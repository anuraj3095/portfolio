# Anuraj Jaiswal | Senior Software Engineer Portfolio

This is the source code for my professional portfolio, available live at **[anuraj.me/portfolio](http://anuraj.me/portfolio)**. 

The portfolio is designed to be a premium, state-of-the-art interactive experience tailored to showcase my background in distributed systems, service mesh architecture, and high-performance server engineering.

## 🛠️ Tech Stack

This project is built using modern web development tools to ensure high performance and a fast developer experience:

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **Styling:** Vanilla CSS with CSS Variables for the design system (Deep Dark Mode & Glassmorphism)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Interactive Elements:** HTML5 Canvas API (for the Service Mesh background)

## 🎮 How to Use It

The portfolio is designed to be both a visual showcase and an interactive playground:

1. **Interactive Service Mesh Background:** The Hero section features an HTML5 Canvas where nodes connect to form a "Service Mesh". Moving your mouse around the canvas will push the nodes and connections, simulating traffic routing and control planes.
2. **Interactive Terminal:** In the "Interactive Shell" section, you can interact with a simulated command-line interface. 
   - Click the terminal input and type `help` to see available commands.
   - Use commands like `whoami`, `skills`, `experience`, and `clear` to learn more about my background in a developer-friendly way.
3. **Architecture & Experience Timeline:** Scroll down to view a detailed timeline of my professional experience, optimized with high-impact project bullet points.

## 💻 Local Development

Follow these steps to run the project locally, build it, or develop new features.

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (Node Package Manager)

### Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`. Any changes you make to the source code will automatically hot-reload in the browser.

### Developing New Features

- **Styling Updates:** Global styles, typography, and color variables are located in `src/index.css`. To tweak the color palette, simply adjust the `--bg-color`, `--accent-primary`, and `--accent-secondary` variables.
- **Adding Terminal Commands:** Open `src/components/Terminal.tsx`. Locate the `switch (cmd)` statement in the `handleCommand` function. You can easily add new `case` blocks to handle new commands and define their output.
- **Updating Experience:** Open `src/components/Experience.tsx`. The experience data is stored in the `experiences` array at the top of the file. You can add new roles or projects by appending to this array.
- **Tweaking the Canvas Background:** The interactive mesh logic is contained entirely within `src/components/MeshBackground.tsx`. You can adjust variables like `numParticles`, `maxDistance`, and `mouseRadius` inside the `useEffect` hook to change how the mesh behaves.

### Building for Production

To create a production-ready bundle, run:

```bash
npm run build
```

This will compile the TypeScript, optimize the assets, and output the static files into the `dist` directory.

## 🚀 Deployment

This project is deployed using **GitHub Pages** with **GitHub Actions**.

### Automatic Deployment

A GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`. 
Automatic deployment is enabled for this repository:

1. Any code pushed to the `main` branch will automatically trigger the deployment workflow.
2. The workflow installs dependencies, builds the Vite project, and securely deploys the `dist` folder to GitHub Pages.
3. In the repository settings on GitHub, ensure that **Pages > Build and deployment > Source** is set to **GitHub Actions**.

The live site is served through a custom domain and is accessible at:

**[anuraj.me/portfolio](http://anuraj.me/portfolio)**
