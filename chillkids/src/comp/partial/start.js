import React from 'react';

function Start() {
  return (
    <div className="section started" id="section-started">
    <div className="centrize full-width">
        <div className="vertical-center">

            <h1 className="h-title">
                Jack <br />Leung
            </h1>

            <div className="started-content">

                <div className="h-subtitles">
                    <div className="h-subtitle typing-subtitle">
                        <p>Consultant and Mentor</p>
                        <p>Web Designer</p>
                        <p>Programmer</p>
                    </div>
                    <span className="typed-subtitle"></span>
                </div>

                <div className="h-text">
                    Hello! I am Web Developer from United States, New York. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.
                </div>

                <a href="./" className="btn">
                    <span className="animated-button"><span>Contact Me</span></span>
                    <i className="icon fas fa-chevron-right"></i>
                </a>

                <a href="./" className="btn mouse-btn" style={{display: 'none'}}>
                    <i className="icon fas fa-chevron-down"></i>
                </a>

            </div>

        </div>
    </div>
</div>
  );
}

export default Start;