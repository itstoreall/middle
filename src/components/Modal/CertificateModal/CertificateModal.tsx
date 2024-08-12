import useModal from '../../../hooks/useModal';
// import { CloseButtonProps } from '../types';
import sert_01_goit from '../../../assets/images/certificate_goit_fullstack.jpg';
import sert_02_diia from '../../../assets/images/certificate_diia_blockchain_modul_1.jpg';
import sert_03_diia from '../../../assets/images/certificate_diia_blockchain_modul_2.jpg';
import sert_04_diia from '../../../assets/images/certificate_diia_blockchain_modul_3.jpg';
import sert_05_diia from '../../../assets/images/certificate_diia_blockchain_modul_4.jpg';
import CommonModal from '../CommonModal/CommonModal';
import s from './CertificateModal.module.scss';
import { useState } from 'react';

// const CloseButton = ({ closeModal }: CloseButtonProps) => (
//   <button className={s.closeButton} onClick={closeModal} title={'close'}>
//     <span className={s.closeButtonContent}>
//       <span />
//     </span>
//   </button>
// );

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    sert_01_goit,
    sert_02_diia,
    sert_03_diia,
    sert_04_diia,
    sert_05_diia
  ];

  console.log(current);

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={s.slider}>
      <button className={`${s.sliderButton} ${s.prev}`} onClick={prevSlide}>
        &#10094;
      </button>

      <div className={s.sliderImages}>
        {images.map((image, index) => {
          const activeStyle = index === current ? s.active : '';
          const sliderImage = `${s.sliderImage} ${activeStyle}`;
          return (
            <div className={sliderImage} key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          );
        })}
      </div>

      <button className={`${s.sliderButton} ${s.next}`} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

const CertificateModal = () => {
  const { CERTIFICATE } = useModal().modaContentEnum;

  return (
    <CommonModal customStyle={CERTIFICATE}>
      <div className={s.modalContent}>
        <Slider />
      </div>
    </CommonModal>
  );
};

export default CertificateModal;
