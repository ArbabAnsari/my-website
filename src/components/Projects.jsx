import "./Projects.css";

const details = {
	"Portfolio Website": { category: "Personal website", tags: ["React", "Tailwind CSS"], symbol: "</>" },
	"Backend API": { category: "Backend development", tags: ["Go", "SQL", "REST API"], symbol: "{ }" },
	myBlog: { category: "Web application", tags: ["React", "Appwrite", "Redux"], symbol: "Aa" },
	"Rock Paper Scissors": { category: "Browser game", tags: ["Bot opponent", "Autoplay"], symbol: "✂" },
	TicTacToe: { category: "Browser game", tags: ["HTML", "CSS", "JavaScript"], symbol: "×○" },
	"Todo Manager": { category: "Productivity", tags: ["React", "Local storage"], symbol: "✓" },
};

function Arrow() {
	return (
		<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
			<path d="M7 17 17 7M7 7h10v10" />
		</svg>
	);
}

export default function Projects({ projects }) {
	return (
		<section className="project-showcase" id="projects" aria-labelledby="projects-heading">
			<div className="project-showcase-inner">
				<header className="project-showcase-header">
					<div>
						<p className="project-showcase-eyebrow"><span aria-hidden="true" /> SELECTED WORK</p>
						<h2 id="projects-heading">Projects<span className="project-count">{String(projects.length).padStart(2, "0")}</span></h2>
					</div>
					<p className="project-showcase-intro">A collection of ideas, experiments,<br />and things I’ve built for the web.</p>
				</header>
				<div className="project-showcase-grid">
					{projects.map((project, index) => {
						const detail = details[project.title];
						return (
							<article className="project-tile" key={project.title}>
								<div className="project-tile-top">
									<span className="project-tile-symbol" aria-hidden="true">{detail.symbol}</span>
									<span className="project-tile-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
								</div>
								<p className="project-tile-category">{detail.category}</p>
								<h3>{project.title}</h3>
								<p className="project-tile-description">{project.desc}</p>
								<ul className="project-tile-tags" aria-label={`${project.title} technologies and features`}>
									{detail.tags.map((tag) => <li key={tag}>{tag}</li>)}
								</ul>
								<div className="project-tile-links">
									<a href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>GitHub <Arrow /></a>
									{project.live && <a className="project-tile-live" href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.title} live`}>Live project <Arrow /></a>}
								</div>
							</article>
						);
					})}
				</div>
				<div className="project-showcase-footnote"><span>BUILT WITH CURIOSITY.</span><span>EXPLORE THE CODE. TRY THE PROJECTS.</span></div>
			</div>
		</section>
	);
}
