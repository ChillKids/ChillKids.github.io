import React from 'react';

function Lang() {
    return (
        <div className="section skills" id="section-skills-lang">
            <div className="content">

                <div className="titles">
                    <div className="title">Language Skills</div>
                    <div className="subtitle">Reading and writing</div>
                </div>

                <div className="skills dotted">
                    <ul>
                        <li>
                            <div className="name">English</div>
                            <div className="single-post-text">
                                <p>
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                                </p>
                            </div>
                            <div className="progress">
                                <div className="percentage" style={{width: 90}}>
                                    <span className="percent">90%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="name">Chinese</div>
                            <div className="single-post-text">
                                <p>
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                                </p>
                            </div>
                            <div className="progress">
                                <div className="percentage" style={{width: 70}}>
                                    <span className="percent">90%</span>
                                </div>
                            </div>
                        </li>
                       
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Lang;