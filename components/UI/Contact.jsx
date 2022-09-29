import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";
import classes from '../../styles/contact.module.css';
import SectionSubtitle from './SectionSubtitle'
import Form from "./Form";

const Contact = () => {
  return (
    <section id='contact' className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <SectionSubtitle subtitle='Contact' />
            <h3>Get in touch with me</h3>
            <p>Reach me if you need anything: pricing, creative ideas, project development, or even a job offer.</p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span><i className="ri-map-pin-line"></i></span>
                <p>São Paulo - Brazil</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span><i className="ri-mail-line"></i></span>
                <p>eduardodecastro@outlook.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span><i className="ri-phone-line"></i></span>
                <p>+55 16 99789-0512</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href='https://github.com/duecoder'><a target='_blank' rel='noreferrer'><i className={`${classes.contact__icon} ri-github-line`}></i></a></Link>
              <Link href='https://www.linkedin.com/in/eduardodue/'><a target='_blank' rel='noreferrer'><i className={`${classes.contact__icon} ri-linkedin-fill`}></i></a></Link>
              <Link href='https://www.instagram.com/dueprod/'><a target='_blank' rel='noreferrer'><i className={`${classes.contact__icon} ri-instagram-line`}></i></a></Link>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
