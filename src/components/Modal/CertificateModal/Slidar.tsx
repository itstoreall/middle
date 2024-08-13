import { useState } from 'react';
import { white } from '../../../styles/vars';
import sert_01_goit from '../../../assets/images/certificate_goit_fullstack.jpg';
import sert_02_diia from '../../../assets/images/certificate_diia_blockchain_modul_1.jpg';
import sert_03_diia from '../../../assets/images/certificate_diia_blockchain_modul_2.jpg';
import sert_04_diia from '../../../assets/images/certificate_diia_blockchain_modul_3.jpg';
import sert_05_diia from '../../../assets/images/certificate_diia_blockchain_modul_4.jpg';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import s from './CertificateModal.module.scss';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    sert_01_goit,
    sert_02_diia,
    sert_03_diia,
    sert_04_diia,
    sert_05_diia
  ];

  const nextSlide = () => {
    setActiveSlide(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveSlide(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={s.slider}>
      <button className={`${s.sliderButton} ${s.prev}`} onClick={prevSlide}>
        <span className={s.buttonConent}>
          <ArrowIcon color={'white'} />
        </span>
      </button>

      <button className={`${s.sliderButton} ${s.next}`} onClick={nextSlide}>
        <span className={s.buttonConent}>
          <ArrowIcon color={white} />
        </span>
      </button>

      <ul className={s.dotList}>
        {images.map((_, idx) => {
          const activeStyle = activeSlide === idx ? s.active : '';
          const slideStyle = `${s.dotItem} ${activeStyle}`;
          return <li key={idx} className={slideStyle} />;
        })}
      </ul>

      <ul className={s.slideList}>
        {images.map((image, index) => {
          const activeStyle = index === activeSlide ? s.active : '';
          const sliderImage = `${s.slideItem} ${activeStyle}`;
          return (
            <li className={sliderImage} key={index}>
              <div className={s.thumb}>
                <img
                  className={s.slide}
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Slider;
