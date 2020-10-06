import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import Back from '../components/Back';

import Layout from '../components/layout';
import SEO from '../components/seo';
import style from './work.module.css';
import back from '../images/window.svg';
import gasm from '../images/gasm.png';

const Work = () => {
  const [images, setImages] = useState([]);
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

    fetch(`https://api.imgur.com/3/album/${commissionsFolder}/images`, {
      headers: {
        Authorization: 'Client-ID a732583aa50be8a',
      },
    })
      .then((response) => response.json())
      .then((json) => setImages(json.data));
  }, []);

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

  return (
    <Layout>
      <SEO title="Commissions" />
      <Back />

      <div className={style.base} />
      <main className={style.main}>
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
            .map((image) => (
              <div className="container" key={image.id}>
                <img src={image.link} alt={image.name} loading="lazy" />
              </div>
            ))}
        </section>
        <img src={gasm} className={style.gasm} />
      </main>
    </Layout>
  );
};

export default Work;
