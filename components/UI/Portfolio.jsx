import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/portfolio.module.css'
import PortfolioItem from "./PortfolioItem";

import portfolioData from '../data/portfolio'
import portfolio from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState('Mobile App')
  const [data, setData] = useState()

  useEffect(() => {
    if (filter === 'Mobile App') {
      const filteredData = portfolioData.filter(item => item.category === filter)

      setData(filteredData)
    }

    if (filter === 'Web Design') {
      const filteredData = portfolioData.filter(item => item.category === filter)

      setData(filteredData)
    }

  }, [filter])

  const active = `${classes.tab__btn__active}`
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg='12' md='12' className="mb-5">
            <SectionSubtitle subtitle='Portfolio' />
            <h4 className="mt-4">Some of my recent projects. I will keep this section always up to date.</h4>
          </Col>

          {/* <Col lg='6' md='6'>
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={`${filter === 'Mobile App' ? active : ''} secondary__btn text-white`}
                onClick={() => setFilter('Mobile App')}
              >
                Mobile App
              </button>
              <button
                className={`${filter === 'Web Design' ? active : ''} secondary__btn text-white`}
                onClick={() => setFilter('Web Design')}
              >
                Web Design
              </button>
            </div>
          </Col> */}

          {
            data?.map(item => (
              <Col lg='4' md='6' sm='12' key={item.id}>
                <div className={`${classes.cards}`}>
                  <PortfolioItem item={item} />
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio
