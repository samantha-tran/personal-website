import {
    ExpansionPanel,
    Sidebar
} from '@chatscope/chat-ui-kit-react';

import ProjectCard from './ProjectCard';
import ExperienceCard from './ExperienceCard';

// DATA
import experienceData from '../data/ExperienceData';
import projectData from '../data/ProjectData';


function SideBar() {
  return (
    <Sidebar position="right">
        <ExpansionPanel title="Experiences">
          {experienceData.map((item) => (
            <ExperienceCard title={item.title} subtitle={item.subtitle} body={item.body}/>
          ))}
        </ExpansionPanel>
        <ExpansionPanel open title="Projects">
          {projectData.map((item) => (
            <ProjectCard title={item.title} body={item.body} githubURL={item.githubURL} demoURL={item.demoURL}/>
          ))}
        </ExpansionPanel>
        <ExpansionPanel title="Links and Resume">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        </ExpansionPanel>
    </Sidebar>   
  );
}

export default SideBar;