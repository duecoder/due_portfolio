import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from './Footer.module.css';
import Link from "next/link";

const NAV__LINK = [
  {
      path:'/',
      display: 'Home'
  },
  {
      path:'#about',
      display: 'About'
  },
  {
      path:'#services',
      display: 'Services'
  },
  {
      path:'#portfolio',
      display: 'Portfolio'
  },
  {
      path:'#contact',
      display: 'Contact'
  },
]

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

    return <footer>

        <Container>
            <Row>
                {/* ===== footer top ===== */}
                <Col lg={6} className={`${classes.footer__top}`}>
                <div className={`${classes.nav__menu}`}>
                  {
                    NAV__LINK.map((item, index) => (
                      <Link href={item.path} key={index}>{item.display}</Link>
                    ))
                  }
                </div>
                </Col>

                {/* ====== footer bottom ====== */}
                <Col lg={12}>
                  <div className={`${classes.footer__copyright}`}>
                    <p>&copy; Copyright {year} - Developed by Eduardo &apos;Due&apos; Castro.
                    All rights reserved.</p>
                  </div>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;
