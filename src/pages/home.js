import React from "react";
import './home.css'
function Home() {

    const styles = {
        
        icon: {
            fontSize: '40px',
            marginRight: '2vh',
        },

    };

    return (
        <>
            <div className="homeMain" id="home">
                <div>
                    <div className="imageMain">
                        <div className="image-container">
                            <img className="image" src="/images/profile-pic.jpg" alt="me abed" />
                        </div>
                    </div>
                    <div className="title">
                        <h1>Hi, I am <span className="my-name">Abed Hasan</span></h1>
                    </div>
                    <div className="title">
                        <div className="title-h4">
                            <h4>I am a Full Stack Developer specialized in Mern Stack. My objective is simply to be the best full stack developer that I can be and to contribute to the technology industry all that I know and can do.</h4>
                        </div>
                    </div>

                    <div className="logo-git-lin">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/abedhasan79" className="logoColor"><i className="fab fa-github" style={styles.icon}></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abed-hasan-965497222/" className="logoColor"><i className="fab fa-linkedin" style={styles.icon}></i></a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;