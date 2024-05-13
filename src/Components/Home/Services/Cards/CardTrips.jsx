import React, {useEffect} from 'react'
import styles from "./CardTrips.module.css"
import {Card, Col} from "react-bootstrap";
import {FaLocationDot} from "react-icons/fa6";
import {Link} from "react-router-dom";
const CardTrips = ({ title, imageName, description,price }) => {
useEffect(()=>{
    document.querySelectorAll('.modal-trigger').forEach(image => {
        image.addEventListener('click', function () {
            const modal = document.getElementById('modal');
            const modalImage = document.getElementById('modal-image');

            modal.style.display = 'block';
            modalImage.src = this.src;

            // تقميق باقي الصفحة
            document.body.style.overflow = 'hidden';
        });
    });

// عند الضغط على زر الإغلاق
    document.querySelector('.close').addEventListener('click', function () {
        const modal = document.getElementById('modal');

        modal.style.display = 'none';

        // إلغاء تقميق الصفحة
        document.body.style.overflow = 'auto';
    });
})
  return (
      <Col xl={3} className={`col-auto m-4 `} >
          <Card className={`${styles.card}`} >
              <Card.Header className={`${styles.cardHeader}`}>

                  <Card.Title className={`${styles.textTitle}`}>

                       الخدمات الصحية
                      <img alt={"img"} src="/assets/img/TripsPage/Hospital.png"/>

                      <h5 className={`${styles.titleContaint}`}>
                          {title}
                      </h5>
                  </Card.Title>

              </Card.Header>
              <Card.Body className={`${styles.cardBody}`}>
                  <img className={`${styles.cardImg} modal-trigger`}
                       src={`/assets/img/TripsPage/${imageName}`} alt={"IMG"}/>
                  <div id="modal" className={`${styles.modal} modal`}>
                      <span className={`${styles.close} close`}>&times;</span>
                      <img className={styles.modalContent} id="modal-image"/>
                  </div>

                  <Card.Text className={`${styles.cardText}`}>
                      {description}
                  </Card.Text>

                 <h3 style={{color:'#41C9E2FF'}}>
                     {price}

                 </h3>

                  <Link
                        className="text-decoration-none link-light" to="/trip" >
                  <button className={`${styles.tripButton}  `}>
                      معرفة المزيد
                  </button>
                  </Link>
              </Card.Body>
          </Card>
      </Col>
  );
}

export default CardTrips