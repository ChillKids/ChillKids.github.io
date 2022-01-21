import React from 'react';
import Background from './partial/background';
import Start from './partial/start';
import Service from './partial/service';
import Resume from './partial/resume';
import Lang from './partial/lang';
import Contacts from './partial/contacts';
import Coding from './partial/coding';
import Skills from './partial/skills';
import Works from './partial/works';
import About from './partial/about'

import work from '../json/work.json'
import education from '../json/education.json'

function Body() {
    console.log(work);
  return (
    <div className="wrapper">
        <Background/>
        <Start/>
        <About/>
        <Resume title={"Experience"} subtitle={"Working with"} resume_id={"section-experience"} items={work}/>
        <Resume title={"Education"} subtitle={"Studied at"} resume_id={"section-education"} items={education}/>
        
        <Contacts></Contacts>
        <Coding></Coding>
        <Lang></Lang>
        <Skills></Skills>
        {/* <Works></Works> */}
    </div>
  );
}

export default Body;