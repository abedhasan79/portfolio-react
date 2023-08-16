import React from "react";
import './about.css';


function About() {
    return (
        <>
            <div className="aboutMainDiv" id="about">
                <div>
                    <div>
                        <div className="aboutMeHeader">
                            <h2>About Me</h2>
                        </div>
                        <div className="container-about">
                            <div className="image-container-about">
                                <img className="imageAbout" src="images/coder.png" alt="me abed" />
                            </div>

                            <div className="aboutIntroDiv">
                                <p className="aboutParagraph">
                                    I am a passionate and dedicated Full Stack Developer with a specialization in the MERN stack. I thrive on turning innovative ideas into functional, user-friendly applications. My journey in the world of web development began with a curiosity about how the digital landscape works, and it has evolved into a full-fledged love for crafting seamless and interactive web experiences.
                                    Technology is ever-evolving, and I'm dedicated to staying at the forefront of industry trends. Whether it's staying updated on the latest JavaScript frameworks or exploring new methodologies, I'm always eager to expand my skill set and stay adaptable in an ever-changing landscape.
                                </p>
                            </div>
                        </div>

                        <div className="resume">
                            <a target="_blank" rel="noopener noreferrer" href="images/Abed Hasan Resume.pdf">Download Resume</a>
                        </div>

                        <div className="aboutSkills">
                            <div>
                                <i className="fa-sharp fa-solid fa-laptop-code"></i>
                                <h4>Frontend Developer</h4>
                            </div>
                            <div>
                                <i className="fa-solid fa-database"></i>
                                <h4>Backend Developer</h4>
                            </div>
                            <div>
                                <i className="fa-sharp fa-solid fa-layer-group"></i>
                                <h4>FullStack Developer</h4>
                            </div>
                        </div>

                        <div className="aboutSkillsHeading">
                            <div>
                                <h4>My Skills</h4>
                                <h2>Technologies <span className="dotdotdot">...</span></h2>
                            </div>

                        </div>
                        <div className="tech">
                            <div className="techChild">
                                <img src="images/html.png" alt="html" />
                                <img src="images/css.png" alt="css" />
                                <img src="images/js.png" alt="css" />
                                <img src="images/mysql.png" alt="css" />
                                <img src="images/node.png" alt="css" />
                                <img src="images/mongo.png" alt="css" />
                                <img src="images/react.png" alt="css" />
                                <img src="images/express.png" alt="css" />
                                <img src="images/graphQL.png" alt="css" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default About;