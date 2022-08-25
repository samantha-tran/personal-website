import experienceData from '../data/ExperienceData';
import projectData from '../data/ProjectData';
import Resume from '../assets/SamanthaTran-Resume.pdf'
import {ExperienceCard, ProjectCard} from './InfoSection'
import { ExpansionPanel, Sidebar } from '@chatscope/chat-ui-kit-react';
import ListGroup from 'react-bootstrap/ListGroup';

function SideBar() {
  return (
    <Sidebar position="right">
        <ExpansionPanel title="Experiences">
          {experienceData.map((item) => (
            <ExperienceCard title={item.title} subtitle={item.subtitle} body={item.body}/>
          ))}
        </ExpansionPanel>
        <ExpansionPanel title="Projects">
          {projectData.map((item) => (
            <ProjectCard title={item.title} body={item.body} githubURL={item.githubURL} demoURL={item.demoURL}/>
          ))}
        </ExpansionPanel>
        <ExpansionPanel title="Links and Resume">
          <ListGroup className="list-group-flush">
            <ListGroup.Item><a href="https://www.linkedin.com/in/samanthatran2/" target="_blank" rel="noreferrer">LinkedIn</a></ListGroup.Item>
            <ListGroup.Item><a href="https://github.com/samantha-tran" target="_blank" rel="noreferrer">Github</a></ListGroup.Item>
            <ListGroup.Item><a href={Resume} rel="noopener noreferrer" target="_blank">Resume</a></ListGroup.Item>
            <ListGroup.Item><a href="mailto:samantha.tran@uq.net.au">Email</a></ListGroup.Item>
          </ListGroup>
        </ExpansionPanel>
    </Sidebar>   
  );
}

export default SideBar;