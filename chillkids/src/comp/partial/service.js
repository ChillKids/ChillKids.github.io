import React from 'react';

function Service() {
    return (
        <div className="section service" id="section-services">
            <div className="content">

                <div className="titles">
                    <div className="title">Services</div>
                    <div className="subtitle">What I Do</div>
                </div>

                <div className="service-items">

                    <div className="service-col">
                        <div className="service-item">
                            <div className="icon"><i className="fas fa-brain"></i></div>
                            <div className="name">Economic <br />Science</div>
                            <div className="single-post-text">
                                <p>
                                    Economics is a social science concerned with the production, consumption of goods and services.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="service-col">
                        <div className="service-item">
                            <div className="icon"><i className="icon fas fa-ad"></i></div>
                            <div className="name">Marketing <br />& Advertising</div>
                            <div className="single-post-text">
                                <p>
                                    Advertising Management though is a complex process of employing various media to sell a product or service.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="service-col">
                        <div className="service-item">
                            <div className="icon"><i className="icon fab fa-chrome"></i></div>
                            <div className="name">Web <br />Development</div>
                            <div className="single-post-text">
                                <p>
                                    The web development process includes: web design, web content, client-side / server-side scripting and network security configuration.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="service-col">
                        <div className="service-item">
                            <div className="icon"><i className="icon fas fa-headphones"></i></div>
                            <div className="name">Music <br />Writing</div>
                            <div className="single-post-text">
                                <p>
                                    Sheet music is the basic form in which Western classNameical music is notated so that it can be learned and performed by solo singers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="service-col">
                        <div className="service-item">
                            <div className="icon"><i className="icon fas fa-gamepad"></i></div>
                            <div className="name">Game <br />Development</div>
                            <div className="single-post-text">
                                <p>
                                    Come Up With a Game Idea. An idea is the first thing that comes to mind when a game is being described before creating.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="service-col">
                        <div className="service-item">
                            <div className="icon"><i className="fas fa-video"></i></div>
                            <div className="name">Photography <br />& Video</div>
                            <div className="single-post-text">
                                <p>
                                    Sessions. If you are a photographer that spends most of the time in a portrait studio, you can charge for your session.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="clear"></div>
            </div>
        </div>
    );
}

export default Service;