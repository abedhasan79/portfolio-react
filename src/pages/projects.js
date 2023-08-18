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
        <div className="projectsMainDiv" id="project">
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
                        <img src="images/pokedex.png" alt="pokedex" />
                        <div className="description">
                            <h6>Pokedex app using React.js, HTML, CSS, JavaScript. Uses data from the poke Api to fetch data.</h6>

                        </div>
                        <div className="hoverLayout">
                            <h3>Github link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/abedhasan79/pokedex-react" className="logoColor"><i className="fab fa-github" style={styles.icon}></i></a>
                            <h3>Deployed link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://abedhasan79.github.io/pokedex-react" className="logoColor"><i className="fa-brands fa-chrome" style={styles.icon}></i></a>
                        </div>
                    </div>
                    <div className="project projectTwo">
                        <h4>ApolloDae</h4>
                        <img src="images/project2.png" alt="apollodae" />
                        <div className="description">
                            <h6>Full Stack E-Commerce Website. Using Mern Stack, Cloudinary, Tailwind css, Heroku, Git.</h6>

                        </div>
                        <div className="hoverLayout">
                            <h3>Github link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/abedhasan79/ApolloDAE" className="logoColor"><i className="fab fa-github" style={styles.icon}></i></a>
                            <h3>Deployed link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://apollodae001.herokuapp.com/" className="logoColor"><i className="fa-brands fa-chrome" style={styles.icon}></i></a>
                        </div>
                    </div>
                    <div className="project projectThree">
                        <h4>Teagram</h4>
                        <img src="images/project3.png" alt="teagram" />
                        <div className="description">
                            <h6>Social Network Web App. Using Handlebars, MySQL, Node.Js, Express.Js, Cloudinary, REST, Heroku, Git.</h6>

                        </div>
                        <div className="hoverLayout">
                            <h3>Github link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/EsraWameed/teagram" className="logoColor"><i className="fab fa-github" style={styles.icon}></i></a>
                            <h3>Deployed link...</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://tea-gram.herokuapp.com/" className="logoColor"><i className="fa-brands fa-chrome" style={styles.icon}></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;