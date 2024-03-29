import React from 'react';

function Coding() {
  return (
    <div className="section skills" id="section-skills-code">
        <div className="content">
            
            <div className="titles">
                <div className="title">Coding Skills</div>
                <div className="subtitle">Developing on</div>
            </div>

            <div className="skills circles">
                <ul>
                    <li>
                        <div className="progress p90"> 
                            <div className="percentage"></div>
                            <span>90%</span>
                        </div>
                        <div className="name">C++</div>
                        
                    </li>
                    <li>
                        <div className="progress p75">
                            <div className="percentage"></div>
                            <span>75%</span>
                        </div>
                        <div className="name">PHP, MYSQL</div>
                    </li>
                    <li>
                        <div className="progress p85">
                            <div className="percentage"></div>
                            <span>85%</span>
                        </div>
                        <div className="name">Erlang</div>
                    </li>
                    <li>
                        <div className="progress p80">
                            <div className="percentage"></div>
                            <span>80%</span>
                        </div>
                        <div className="name">ReactJS</div>
                    </li>
                    <li>
                        <div className="progress p95">
                            <div className="percentage"></div>
                            <span>95%</span>
                        </div>
                        <div className="name">Java</div>
                    </li>
                    <li>
                        <div className="progress p90"> 
                            <div className="percentage"></div>
                            <span>90%</span>
                        </div>
                        <div className="name">Python</div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  );
}

export default Coding;