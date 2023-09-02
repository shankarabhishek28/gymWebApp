import React, { useState, useEffect } from 'react';
import './gallary.css';
import Header from '../../components/Header';
import HeaderImage from '../../../images/header_bg_3.jpg';

const Gallary = () => {
  const galleryLength = 15;
  const [resolvedImg, setResolvedImg] = useState([]);

  
  useEffect(() => {
    const loadImagePaths = async () => {
      const images = [];
      for (let i = 1; i <= galleryLength; i++) {
        const imagePath = await import(`../../../images/gallery${i}.jpg`);
        images.push(imagePath.default);
      }
      setResolvedImg(images);
      console.log(images)
    };

    loadImagePaths();
  }, []);
 

  return (
    <>
      <Header title="Our Gallery" img={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quisquam,
        natus aperiam deleniti officia sapiente omnis enim cumque et adipisci, maxime aliquid molestiae repellendus repudiandae eveniet? Excepturi veniam doloremque iusto?
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {resolvedImg.map((image, index) => (
            <article key={index}>
            {image === null ? <h4>Loading...</h4> :<img src={image} alt={index + 1} /> }  
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallary;
