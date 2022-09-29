import React, { useEffect, useRef } from "react";
import { Container } from 'reactstrap';
import classes from './Header.module.css'
import Link from "next/link";

const NAV__LINK = [
    {
        path:'/',
        display: 'Home'
    },
    {
      path:'#skills',
      display: 'Skills'
    },
    {
        path:'#about',
        display: 'About'
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


const Header = () => {
  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add(`${classes.header__shrink}`)
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  }, [])

  const toggleMenu = () => menuRef.current.classList.toggle(`${classes.active__menu}`)

  return(
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>


          {/* ===== navigation logo ===== */}
          <div className={`${classes.logo}`}>
              <h1><Link href='/'><a><i className={`${classes.code__logo} ri-code-s-slash-line`}></i></a></Link></h1>
              {/* <h1>Due</h1> */}
          </div>

          {/* ===== nav menu ===== */}
          <div className={`${classes.navigation}`} ref={menuRef} onClick={toggleMenu}>
            <div className={`${classes.nav__menu}`}>
              {
                NAV__LINK.map((item, index) => (
                  <Link href={item.path} key={index}>{item.display}</Link>
                ))
            }

              <div className={`${classes.nav__right}`}>
                <div className="d-flex align-items-center gap-3 mb-0">
                  {/* {" "} */}
                  <Link href="https://github.com/duecoder"><a target='_blank' rel='noreferrer'><i className="ri-github-fill"></i></a></Link>
                  <Link href="https://www.linkedin.com/in/eduardodue/"><a target='_blank' rel='noreferrer'><i className="ri-linkedin-box-fill"></i></a></Link>
                  <Link href="https://www.instagram.com/dueprod/"><a target='_blank' rel='noreferrer'><i className="ri-instagram-fill"></i></a></Link>
                </div>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  )
}

export default Header;
