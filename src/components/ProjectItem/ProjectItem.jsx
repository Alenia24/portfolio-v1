import "./ProjectItem.css"

export default function ProjectItem({ title, image, description,liveLink, githubLink, projectTools }) {
  return (
    <div>
      <div className="project-container">
        <div className="project-image-container">
          <a href={liveLink} target="_blank" rel="noopener noreferer">
            <img className="img-fluid project-image" src={image} alt={title} />
          </a>
          <div className="project-links">
            <a href={liveLink} target="_blank" rel="noopener noreferer">
              <button className="project-link">Visit Link</button>
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferer">
              <button className="project-link">Github Repo</button>
            </a>
          </div>
        </div>
        <div className="project-info">
          <h2 className="project-title">{title}</h2>
          <p>{description}</p>
          <div className="project-tools">
            {projectTools.map((project, index) => {
              return (
                <div key={index} className="project-tool">
                  {project}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
