import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on projects. Here are some :-
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Flask' ?
            <ToggleButton active value="Flask" onClick={() => setToggle('Flask')}>FLASK</ToggleButton>
            :
            <ToggleButton value="Flask" onClick={() => setToggle('Flask')}>FLASK</ToggleButton>
          }
          <Divider />
          {toggle === 'MERN' ?
            <ToggleButton active value="MERN" onClick={() => setToggle('MERN')}>MERN</ToggleButton>
            :
            <ToggleButton value="MERN" onClick={() => setToggle('MERN')}>MERN</ToggleButton>
          }
          <Divider />
          {toggle === 'PYTHON' ?
            <ToggleButton active value="PYTHON" onClick={() => setToggle('PYTHON')}>MINI PROJECTS</ToggleButton>
            :
            <ToggleButton value="PYTHON" onClick={() => setToggle('PYTHON')}>MINI PROJECTS</ToggleButton>
          }
          {toggle === 'ML' ?
            <ToggleButton active value="ML" onClick={() => setToggle('ML')}>ML</ToggleButton>
            :
            <ToggleButton value="ML" onClick={() => setToggle('ML')}>ML</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects