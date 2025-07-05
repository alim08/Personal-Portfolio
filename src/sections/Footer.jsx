import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center md:items-start items-center">
                <a href="/">Visit my blog</a>
                
            </div>
            <div className="socials">
                {socialImgs.map((img) => (
                    <a className="icon" target="_blank" href={img.url} key={img.url}>
                        <img src={img.imgPath} />
                    </a>
                ))}
            </div>
            <div className="flex flex-col justify-cetner">
                <p className="text-center md:text-end">
                    Adam Lim
                </p>
            </div>
        </div>
    </footer>

  )
}

export default Footer