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
                            <div className="name">BlockChain <br />Development</div>
                            <div className="single-post-text">
                                <p>
                                    Economics is a social science concerned with the production, consumption of goods and services.
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



                </div>

                <div className="clear"></div>
            </div>
        </div>
    );
}

export default Service;