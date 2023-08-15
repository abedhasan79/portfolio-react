import React from "react";
import './projects.css'
function Projects() {
    return (
        <div className="projectsMainDiv">
            <div>
                <div className="projectHeadding">
                    <h2>Projects</h2>
                </div>
                <div className="projectIntroDiv">
                    <p className="projectParagraph">
                        These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.
                    </p>
                </div>

                <div className="projectParentDiv">
                    <div className="project projectOne">
                        <h4>PoKeDex</h4>
                        <img src="/images/pokedex.png" alt="pokedex" />
                        <div className="description">
                            <h6>pokedex app using HTML CSS JavaScript. Uses data from the poke Api to fetch data.</h6>

                        </div>
                    </div>
                    <div className="project projectTwo">
                    <h4>PoKeDex</h4>
                        <img src="/images/pokedex.png" alt="pokedex" />
                        <div className="description">
                            <h6>pokedex app using HTML CSS JavaScript. Uses data from the poke Api to fetch data.</h6>

                        </div>
                    </div>
                    <div className="project projectThree">
                    <h4>PoKeDex</h4>
                        <img src="/images/pokedex.png" alt="pokedex" />
                        <div className="description">
                            <h6>pokedex app using HTML CSS JavaScript. Uses data from the poke Api to fetch data.</h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;