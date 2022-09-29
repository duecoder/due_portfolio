import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import SectionSubtitle from './SectionSubtitle'
// import network from '../../public/images/Connected world.png'
import classes from '../../styles/testimonial.module.css'

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' className={`${classes.testimonial__img}`}>
            <Image alt='network-img' src={network} width='400' height='400' />
          </Col>

          <Col lg='6' md='6'>
            <SectionSubtitle subtitle='Testimonials' />
            <h4 className="mt-4 mb-5">What my clients say</h4>

          <div className={`${classes.testimonial__slider}`}>
            <Slider { ... settings }>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image alt='client-img' src='/images/hero2.jpg' width={50} height={50} className='rounded-2' />

                  <div>
                    <h6>Jhon Doe</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil praesentium iusto aliquam! Deleniti sint pariatur consequatur, itaque velit commodi impedit magnam laboriosam eum, facilis odit deserunt nisi quibusdam dolor natus earum praesentium tempore ex! Laboriosam vero dolores ab soluta.</p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image alt='client-img' src='/images/hero2.jpg' width={50} height={50} className='rounded-2' />

                  <div>
                    <h6>Due Castro</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil praesentium iusto aliquam! Deleniti sint pariatur consequatur, itaque velit commodi impedit magnam laboriosam eum, facilis odit deserunt nisi quibusdam dolor natus earum praesentium tempore ex! Laboriosam vero dolores ab soluta.</p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image alt='client-img' src='/images/hero2.jpg' width={50} height={50} className='rounded-2' />

                  <div>
                    <h6>Mary Finer</h6>
                    <h6>Financial Accountant</h6>

                  </div>
                </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil praesentium iusto aliquam! Deleniti sint pariatur consequatur, itaque velit commodi impedit magnam laboriosam eum, facilis odit deserunt nisi quibusdam dolor natus earum praesentium tempore ex! Laboriosam vero dolores ab soluta.</p>
              </div>
            </Slider>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
