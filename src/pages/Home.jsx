import { Navbar, Footer, Card } from "../components/index.js";

const projects = [
	{
		title: "Portfolio Website",
		desc: "Personal portfolio website made using ReactJS and tailwindcss.",
		live: "https://www.arbabansari.com",
		githubLink: "https://github.com/ArbabAnsari/my-website",
	},
	{
		title: "Backend API",
		desc: "RestAPI made using Golang, SQL. Features authentication, users and posts.",
		live: null,
		githubLink: "https://github.com/ArbabAnsari/auth-backend-golang",
	},
	{
		title: "myBlog",
		desc: "A full fledged blog application with CRUD operations made using ReactJS, Appwrite and Redux.",
		live: "https://blog.arbabansari.com",
		githubLink: "https://github.com/ArbabAnsari/myBlog",
	},
	{
		title: "Rock Paper Scissors",
		desc: "A fun to play rock paper scissors game with bot. Also features auto play mode.",
		live: "https://arbabansari.github.io/Rock-Paper-Scissors/",
		githubLink: "https://github.com/ArbabAnsari/Rock-Paper-Scissors",
	},
	{
		title: "TicTacToe",
		desc: "TicTacToe game made using HTML, CSS and JS",
		live: "https://arbabansari.github.io/TicTacToe/",
		githubLink: "https://github.com/ArbabAnsari/TicTacToe",
	},
	{
		title: "Todo Manager",
		desc: "A todo manager on the web uses local storage, made using ReactJS.",
		live: "https://todo-react-eight-dusky.vercel.app/",
		githubLink: "https://github.com/ArbabAnsari/todo-react",
	},
];

function Home() {
  return (
    <div className="portfolio">
      <Navbar />
      <main>
        <section className="hero page-width" id="home" aria-labelledby="intro">
          <h1 id="intro">
            <span className="hello">Hello, I am</span>
            <span className="name">Arbab Ansari<svg className="name-underline" viewBox="0 0 600 28" fill="none" aria-hidden="true"><path d="M5 16C143 4 370 6 594 13M22 24C195 12 393 16 565 19" /></svg></span>
            <span className="tagline">I write <em>code</em>.</span>
          </h1>
          <a href="#projects" className="work-link">Check My Work <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M5 6C9 13 15 18 23 20M14 21L24 21L23 11" /></svg></a>
        </section>
        <section className="projects page-width" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects<span className="sketch-rule" aria-hidden="true" /></h2>
          <div className="project-grid">
            {projects.map((item) => <Card {...item} key={item.title} />)}
          </div>
        </section>
        <section className="contact page-width" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Connect with me on</h2>
          <div className="social-links">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/arbab-ansari/" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
								<path d="M20.447 20.452H16.894V14.85c0-1.337-.024-3.059-1.863-3.059-1.864 0-2.149 1.454-2.149 2.957v5.704H9.329V9h3.4v1.561h.047c.474-.9 1.632-1.85 3.358-1.85 3.591 0 4.256 2.362 4.256 5.436v6.305zM5.337 7.433a1.977 1.977 0 1 1 0-3.954 1.977 1.977 0 0 1 0 3.954zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.277V1.723C24 .771 23.2 0 22.225 0z" />
							</svg>
						</a>
						<a aria-label="GitHub" href="https://github.com/ArbabAnsari" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61 -.546-1.387-1.333-1.757-1.333-1.757 -1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605 -2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.291-1.552 3.297-1.23 3.297-1.23 .653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .317.218.687.825.57 C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a aria-label="Instagram" href="https://www.instagram.com/__._arbab/" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Instagram" className="h-9 w-9">
								<rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
								<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
								<circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
							</svg>
						</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
