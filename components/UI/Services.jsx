import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/services.module.css'
import ServicesItem from './ServicesItem';
import { SiBootstrap, SiGithub, SiJavascript, SiNextdotjs, SiPython, SiTypescript } from 'react-icons/si'

const Services = () => {
  return (
    <section id='skills'>
      <Container className={`${classes.services__content}`}>
        <Row>
          <Col lg={6} md={6}>
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title='React.JS' icon='ri-reactjs-fill' />
                <ServicesItem title='HTML5' icon='ri-html5-line' />
              </div>

              <ServicesItem title='CSS3' icon='ri-css3-line' />

            </div>
          </Col>
          <Col lg={6} md={6} className={`${classes.services__title}`}>
            <SectionSubtitle subtitle='My Skills' />
            <h3 className='mb-0 mt-4'>From Design, </h3>
            <h3 className='mb-4'>To Coding. </h3>
            <p>
              I enjoy creating/designing the projects layout, colors, styles. Add the functionalities coming from JavaScript, unite it all with React and <i><b>voilà</b></i>.<br />
              I&apos;ve been working for a while with ReactJS, NextJS, JavaScript, HTML and CSS, but also have some knowledge in the backend stack.
              Landing pages, e-commerces and business/brand websites, are some of the projects I have done.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={`${classes.icons_container}`}>
              <SiNextdotjs className={`${classes.skills_icon}`} size={45} />
              <SiJavascript className={`${classes.skills_icon}`} size={45} />
              <SiTypescript className={`${classes.skills_icon}`} size={45} />
              <SiBootstrap className={`${classes.skills_icon}`} size={45} />
              <SiPython className={`${classes.skills_icon}`} size={45} />
              <SiGithub className={`${classes.skills_icon}`} size={45} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
