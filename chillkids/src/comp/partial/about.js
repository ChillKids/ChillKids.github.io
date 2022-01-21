import React from 'react';

function About() {
    return (
        <div className="section about" id="section-about">
            <div className="content">

                <div className="titles">
                    <div className="title">About Me</div>
                    <div className="subtitle">My story</div>
                </div>

                <div className="cols">
                    <div className="col">
                        <div className="single-post-text">
                            <img src="./images/story/aleksandar.jpg" width={"100%"}></img>
                        </div>
                    </div>
                    <div className="col">
                        <div className="single-post-text">
                            <p>
                            navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more:
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cols">
                <div className="col">
                        <div className="single-post-text">
                            <p>
                            navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more:
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="single-post-text">
                            <img src="./images/story/hong-kong-protests.jpg" width={"100%"}></img>
                        </div>
                    </div>
                    
                </div>

                <div className="info-list">
                    <ul>
                        <li><strong>Age:</strong> 24</li>
                        <li><strong>Residence:</strong> Hong Kong</li>
                        <li><strong>Freelance:</strong> Available</li>
                        <li><strong>Address:</strong> Provo, Utah</li>
                        <li><strong>Phone:</strong> +1 208 701 5159</li>
                        <li><strong>E-mail:</strong> chikitleung.cs@gmail.com</li>
                    </ul>
                </div>

                <div className="clear"></div>
            </div>
        </div>
    );
}

export default About;