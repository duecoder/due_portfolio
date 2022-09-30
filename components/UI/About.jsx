import React from "react";
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link';
import SectionSubtitle from "./SectionSubtitle";
import Image from 'next/image';

import img01 from '../../public/images/due-trees.jpg'

import classes from '../../styles/about.module.css'

const About = () => {
  return (
    <section id='about'>
      <Container>
        <Row>
          <Col lg={6} className={`${classes.about__content}`}>
            <SectionSubtitle subtitle='About me' />
            <h3 className="mt-4">Long road,</h3>
            <h3 className="mb-4">Keep learning</h3>

            <p>
            I started building websites when I was 15 years old. Now I&apos;m 27. A lot of things happened throughout these years, and I&apos;ve been around 10 of them away from the IT area. Until this year. Nowadays, I&apos;m using React, JavaScript and TypeScript to develop some projects, while I still study new stuff (like NextJS).
            Althought it&apos;s not my priority, I enjoy studying the backend stack, such as API rest, NodeJS, and the connection between the both sides.
            </p>
            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 ">
                  <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>
                    Proactive
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3">
                  <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>
                  Researcher
                </h6>
              </div>

              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3">
                  <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>
                  Creative
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3">
                  <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>
                  Disciplined
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn"><Link href='#portfolio'>My Portfolio</Link></button>

              <button className="secondary__btn">
                <Link href='#portfolio'>
                  <a href='/docs/cv_eduardo.pdf' target='_blank' rel="noopener noreferrer">Download CV</a>
                </Link>
              </button>
            </div>
          </Col>

          <Col lg={6}>

            <div className={`${classes.about__img__box__gallery} d-flex justify-content-center`}>
              <div className="d-flex align-items-center justify-content-center mb-1">
                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img01} alt='about-img' />
                </div>

                {/* Future Images Below */}

                {/* <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img02} alt='about-img' />
                </div>
              </div>

              <div className="d-flex flex-column mb-3">
                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img03} alt='about-img' />
                </div>

                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img04} alt='about-img' />
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
