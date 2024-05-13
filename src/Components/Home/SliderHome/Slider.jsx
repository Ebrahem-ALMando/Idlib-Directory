import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./Slider.module.css"
import "./arrow.css"

function Slider() {
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 800px)');
        const handleScreenChange = (e) => {
            setSmallScreen(e.matches);
        };


        mediaQuery.addEventListener('change', handleScreenChange);


        setSmallScreen(mediaQuery.matches);


        return () => {
            mediaQuery.removeEventListener('change', handleScreenChange);
        };
    }, []);

    return (
        <Carousel data-bs-theme="dark" className={styles.slider}>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={smallScreen ? "/assets/img/Home/slide_Min.png" : "/assets/img/Home/slide_Max.png"}
                    alt="Slide"
                />
                <div className={styles.text}>
                    <h1>استكشف المؤسسات الحكومية الرسمية والخدمات  في إدلب بسهولة</h1>
                    <p>يوفر دليلنا معلومات شاملة وجهات اتصال لمختلف الهيئات الحكومية، مما يسهل الوصول إلى الخدمات والموارد الأساسية للمجتمع.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`${styles.imgSlide2}  d-block`}
                    src={smallScreen ? "/assets/img/Home/slide1_Min.png" : "/assets/img/Home/slide1_Max.png"}
                    alt="Slide"
                />
                <div className={styles.text}>
                    <h1>استكشف المؤسسات الحكومية الرسمية والخدمات  في إدلب بسهولة</h1>
                    <p>يوفر دليلنا معلومات شاملة وجهات اتصال لمختلف الهيئات الحكومية، مما يسهل الوصول إلى الخدمات والموارد الأساسية للمجتمع.</p>
                </div>
            </Carousel.Item>
            {/* Add additional Carousel.Items here for more slides */}
        </Carousel>
    );
}

export default Slider;
