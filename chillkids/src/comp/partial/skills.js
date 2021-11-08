import React from 'react';

function Skills() {
    return (
        <div className="section skills" id="section-skills">
            <div className="content">

                <div className="titles">
                    <div className="title">Design Skills</div>
                    <div className="subtitle">Creative ability</div>
                </div>

                <div className="skills percent">
                    <ul>
                        <li>
                            <div className="name">Web Layout</div>
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
                            <div className="name">Illustrations</div>
                            <div className="single-post-text">
                                <p>
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                                </p>
                            </div>
                            <div className="progress">
                                <div className="percentage" style={{width: 70}}>
                                    <span className="percent">70%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="name">Photoshop</div>
                            <div className="single-post-text">
                                <p>
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                                </p>
                            </div>
                            <div className="progress">
                                <div className="percentage" style={{width: 95}}>
                                    <span className="percent">95%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="name">Graphic Design</div>
                            <div className="single-post-text">
                                <p>
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                                </p>
                            </div>
                            <div className="progress">
                                <div className="percentage" style={{width: 85}}>
                                    <span className="percent">85%</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Skills;