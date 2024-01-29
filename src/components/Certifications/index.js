import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider} from './CertificateStyle'
import CertificationCard from '../Cards/CertificationCard'
import { certifications } from '../../data/constants'


const Certificates = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="certificates">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
           Here are some certificates of mine :-
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Python' ?
            <ToggleButton active value="Python" onClick={() => setToggle('Python')}>Python</ToggleButton>
            :
            <ToggleButton value="Python" onClick={() => setToggle('Python')}>Python</ToggleButton>
          }
          <Divider />
          {toggle === 'IIIT-H' ?
            <ToggleButton active value="IIIT-H" onClick={() => setToggle('IIIT-H')}>IIIT-H</ToggleButton>
            :
            <ToggleButton value="IIIT-H" onClick={() => setToggle('IIIT-H')}>IIIT-H</ToggleButton>
          }
          <Divider />
          {toggle === 'AWS' ?
            <ToggleButton active value="AWS" onClick={() => setToggle('AWS')}>AWS</ToggleButton>
            :
            <ToggleButton value="AWS" onClick={() => setToggle('AWS')}>AWS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
         
          {toggle === 'all' && certifications
            .map((project) => (
              <CertificationCard project={project} />
            ))}
          {certifications
            .filter((item) => item.category === toggle)
            .map((project) => (
              <CertificationCard project={project} />
            ))}
           
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificates