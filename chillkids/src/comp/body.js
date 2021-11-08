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

function Body() {
  return (
    <div className="wrapper">
        <Background/>
        <Start/>
        <Service></Service>
        <Contacts></Contacts>
        <Coding></Coding>
        <Lang></Lang>
        <Skills></Skills>
        <Works></Works>
    </div>
  );
}

export default Body;