import React from 'react'
import './about.css'
import HeaderImage from '../../../images/header_bg_1.jpg'
import Header from '../../components/Header'
import StoryImage from '../../../images/about1.jpg'
import VissionImage from '../../../images/about2.jpg'
import MissionImage from '../../../images/about3.jpg'


const About = () => {
  return (
    <><Header title='About Us' img={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Fuga doloribus laudantium doloremque soluta praesentium
      reiciendis voluptates dolore minus tempora sunt!
    </Header>
      <section className="about_story animated">
        <div className="container about_story-container">
         
            <img src={StoryImage} alt='our story image' />
          
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi aliquam fugit debitis
              exercitationem repella mollitia qui numquam ea iusto. At.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima,
              vero perspiciatis inventore blanditiis officiis!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestias 
              reprehenderit nisi vitae dolore harum dignissimos soluta facilis fuga quod.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              natus provident blanditiis impedit debitis omnis.
            </p>
          </div>

        </div>
      </section>
      <section className="about_Vission">
        <div className="container about_Vission-container">

          <div className="about_section-content">
            <h1>Our Vission</h1>
            <p>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi aliquam fugit debitis
              exercitationem repella mollitia qui numquam ea iusto. At.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima,
              vero perspiciatis inventore blanditiis officiis!
            </p>


          </div>
          <div className="about_section-image v">
              <img src={VissionImage} alt='our Vission image' />
          </div>

        </div>
      </section>
      <section className="about_Mission">
        <div className="container about_Mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt='our Mission image' />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi aliquam fugit debitis
              exercitationem repella mollitia qui numquam ea iusto. At.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima,
              vero perspiciatis inventore blanditiis officiis!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              natus provident blanditiis impedit debitis omnis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In soluta distinctio voluptatibus atque tempore consequatur inventore
               voluptatum, et enim provident?
            </p>
          </div>

        </div>
      </section>

    </>
  )
}

export default About