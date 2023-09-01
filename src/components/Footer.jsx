import React from 'react'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <div className="container footer_container">
                <article>
                    <Link to='/'>
                        <img className='logo' src={Logo} alt='Footer Logo' />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae esse mollitia quam est facilis provident? Sapiente modi pariat
                        ur minus animi iure beatae adipisci qui! Autem officiis corrupti cumque rem modi.
                    </p>
                    <div className="footer_socials">
                        <a href='https://www.linkedin.com/in/abhishek-shankar-2bb9691a3/' target='_blank' rel='noreferror noopener'>
                            <FaLinkedin />
                        </a>
                        <a href='https://www.linkedin.com/in/abhishek-shankar-2bb9691a3/' target='_blank' rel='noreferror noopener'>
                            <AiFillInstagram />
                        </a>
                        <a href='https://www.linkedin.com/in/abhishek-shankar-2bb9691a3/' target='_blank' rel='noreferror noopener'>
                            <AiOutlineTwitter />
                        </a>
                        <a href='https://www.linkedin.com/in/abhishek-shankar-2bb9691a3/' target='_blank' rel='noreferror noopener'>
                            <FaFacebook />
                        </a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>

                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>

                </article>
                <article>
                    <h4>Permalinks</h4>

                    <Link to="/contact">Contact Us</Link>
                    <Link to="/s">Support</Link>


                </article>


            </div>
            <div className="footer_copyright">
                <small>2023 Abhishek SHANKAR</small>
            </div>
        </footer>
    )
}

export default Footer