import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Back from '../components/Back';

import Layout from '../components/layout';
import SEO from '../components/seo';
import style from './work.module.css';
import back from '../images/window.svg';
import gasm from '../images/gasm.png';
import 'react-image-lightbox/style.css';
import hand from '../images/hand.svg';

const Work = () => {
  const [images, setImages] = useState([]);
  const [lightBoxImages, setLightBoxImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query getCommissionsFolder {
      site {
        siteMetadata {
          commissionsFolder
        }
      }
    }
  `);

  useEffect(() => {
    const { commissionsFolder } = data.site.siteMetadata;

    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Client-ID a732583aa50be8a');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow' as RequestRedirect, // eslint-disable-line no-undef
    };

    fetch(`https://api.imgur.com/3/album/${commissionsFolder}/images`, requestOptions)
      .then((response) => response.json())
      .then((json) => { setImages(json.data); });
  }, []);

  useEffect(() => {
    setLightBoxImages(images.map((im) => im.link));
    console.log(lightBoxImages, images);
  }, [images]);

  const carouselRef = useRef();
  // eslint-disable-next-line no-undef
  const [autoScroll, setAutoScroll] = useState<NodeJS.Timeout | undefined>(undefined);
  const [hover, setHover] = useState(false);
  const direction = useRef(-1);

  useEffect(() => {
    if (!hover) {
      const carouselScroll = setInterval(() => {
        if (carouselRef && carouselRef.current) {
          const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current as HTMLElement;
          if (scrollLeft + offsetWidth === scrollWidth || scrollLeft === 0) {
            direction.current *= -1;
          }
          carouselRef.current.scrollLeft += direction.current;
        }
      }, 40);
      setAutoScroll(carouselScroll);
    }
  }, []);

  const onPointerOver = () => {
    setHover(true);
    clearInterval(autoScroll);
  };

  const onPointerOut = () => {
    setHover(false);
    const carouselScroll = setInterval(() => {
      if (carouselRef && carouselRef.current) {
        const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current as HTMLElement;
        if (scrollLeft + offsetWidth === scrollWidth || scrollLeft === 0) {
          direction.current *= -1;
        }
        carouselRef.current.scrollLeft += direction.current;
      }
    }, 40);
    setAutoScroll(carouselScroll);
  };

  const openLightBox = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  return (
    <Layout>
      <SEO title="Work" />
      <Back />
      {isOpen && (
      <Lightbox
        mainSrc={lightBoxImages[photoIndex]}
        nextSrc={lightBoxImages[(photoIndex + 1) % lightBoxImages.length]}
        prevSrc={lightBoxImages[(photoIndex + lightBoxImages.length - 1) % lightBoxImages.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setPhotoIndex((pI) => (pI + lightBoxImages.length - 1) % lightBoxImages.length)}
        onMoveNextRequest={() => setPhotoIndex((pI) => (pI + 1) % lightBoxImages.length)}
      />
      )}

      <div className={style.base} />
      <main className={style.main}>
        <div className={style.hand}>
          <img src={hand} alt="hand pointing towards the images" />
          <span>Click them!</span>
        </div>
        <div className={style.margin}>
          <img src={back} alt="roughtBack" />
        </div>
        <section
          className={style.carousel}
          ref={carouselRef}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
        >
          {images
            .map((image, i) => (
              <div className="container" key={image.id} onClick={() => openLightBox(i)}>
                <img src={image.link} alt={image.name} loading="lazy" />
              </div>
            ))}
        </section>
        <img src={gasm} className={style.gasm} alt="jashi showing the images" />
      </main>
    </Layout>
  );
};

export default Work;
