import React, { useState, useEffect } from 'react';
import './gallary.css';
import Header from '../../components/Header';
import HeaderImage from '../../../images/header_bg_3.jpg';
import { Waveform } from '@uiball/loaders'

const Gallary = () => {
  const galleryLength = 15;
  const [resolvedImg, setResolvedImg] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadImagePaths = async () => {
      const images = [];
      for (let i = 1; i <= galleryLength; i++) {
        const imagePath = await import(`../../../images/gallery${i}.jpg`);
        images.push(imagePath.default);
      }
      setResolvedImg(images);
      setLoading(false)
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
          {loading ? (
            // Display loading animation while images are loading

            <div className='in_center'>
              <Waveform
                size={60}
                lineWeight={3.5}
                speed={1}
                color="hsl(210,100%,50%)"
              />
            </div>

          ) : (
            resolvedImg.map((image, index) => (
              <article key={index}>
                <img src={image} alt={index + 1} />
              </article>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Gallary;
