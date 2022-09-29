import React from "react";
import classes from '../../styles/portfolio-item.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'


const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item

  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {
          keyword.map((item, index) => (
            <span className={`${classes.portfolio__keyword}`} key={index}>{item}</span>
          ))
        }
      </div>

      <div className={`${classes.portfolio__img}`}
      >
        <Image alt='portfolio-img' src={img} width='1280' height='668' /> {/* 320 167 */}
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
          <button className="project__btn">
            <Link href={liveUrl}><a href={liveUrl} target='_blank' rel='noreferrer'><SiGithub className={`${classes.skills_icon}`} size={45} /></a></Link>
          </button>
      </div>
    </div>
  )
}

export default PortfolioItem
