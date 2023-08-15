import React from "react";
import './projects.css'
function Projects() {

    const styles = {

        icon: {
            fontSize: '80px',
            marginRight: '2vh',
        },

    };

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
                        <div className="hoverLayout">
                            <h3>Github link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/abedhasan79" className="logoColor"><i className="fab fa-github" style={styles.icon}></i></a>
                            <h3>Deployed link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abed-hasan-965497222/" className="logoColor"><i className="fa-brands fa-chrome" style={styles.icon}></i></a>
                        </div>
                    </div>
                    <div className="project projectTwo">
                        <h4>PoKeDex</h4>
                        <img src="/images/pokedex.png" alt="pokedex" />
                        <div className="description">
                            <h6>pokedex app using HTML CSS JavaScript. Uses data from the poke Api to fetch data.</h6>

                        </div>
                        <div className="hoverLayout">
                            <h3>Github link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/abedhasan79" className="logoColor"><i className="fab fa-github" style={styles.icon}></i></a>
                            <h3>Deployed link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abed-hasan-965497222/" className="logoColor"><i className="fa-brands fa-chrome" style={styles.icon}></i></a>
                        </div>
                    </div>
                    <div className="project projectThree">
                        <h4>PoKeDex</h4>
                        <img src="/images/pokedex.png" alt="pokedex" />
                        <div className="description">
                            <h6>pokedex app using HTML CSS JavaScript. Uses data from the poke Api to fetch data.</h6>

                        </div>
                        <div className="hoverLayout">
                            <h3>Github link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/abedhasan79" className="logoColor"><i className="fab fa-github" style={styles.icon}></i></a>
                            <h3>Deployed link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abed-hasan-965497222/" className="logoColor"><i className="fa-brands fa-chrome" style={styles.icon}></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;