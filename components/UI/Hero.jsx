import React from "react";
import SectionSubTitle from './SectionSubtitle'
import { Container, Row, Col } from 'reactstrap'
import Image from "next/image";
import Link from "next/link";
import HeroImg from '../../public/images/hero2.jpg'
import classes from '../../styles/hero.module.css'

const Hero = () => {
  return <section className={`${classes.hero}`}>
    <Container>
      <Row>

        {/* ==== hero content ==== */}
        <Col lg={6} md={6}>
          <div className={`${classes.hero__content}`}>
            <SectionSubTitle subtitle='Hello'></SectionSubTitle>
            <h2 className="mt-3 mb-3">I&apos;m Eduardo &apos;Due&apos; Castro</h2>
            <h5>Front End Developer</h5>
            <p>
              My name is Eduardo Castro aka &apos;Due&apos;. I&apos;m a Web Developer with some experience in ReactJS, NextJS, JavaScript, TypeScript, JSX, HTML5 and CSS3.
              I also have interest and a bit of knowledge in the back-end stack such as NodeJS, API Rest and databases.<br />
              I&apos;m a System Analysis and Development student - a technology graduation course, and also keep studying courses apart, focused in
              especializing on the Front-End stack, and learning more about the Back-End stack.
            </p>
          </div>
          <div className="mt-5 mb-5">
            <button className="primary__btn"><Link href='#contact'>Talk to me</Link></button>
            <button className="secondary__btn"><Link href='#'>Download CV</Link></button>
          </div>
        </Col>

        {/* ==== hero image ==== */}
        <Col lg={6} md={6}>
          <div className={`${classes.hero__img} text-end`}>
            <Image alt='hero-image' src={HeroImg} width='440' height='400' />

            <div className={`${classes.hero__skills}`}>
              <h6>Skills</h6>
              <span><i className="ri-reactjs-fill"></i></span>
              <span><i className="ri-html5-line"></i></span>
              <span><i className="ri-css3-line"></i></span>
            </div>

            <div className={`${classes.hero__experience} d-flex align-items-center gap-3`}>
              <span><i className="ri-lightbulb-flash-line"></i></span>
              <div className="bg-transparent">
                <h6>Experience</h6>
                <h5 className="mb-0">2.5 Years</h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Hero
