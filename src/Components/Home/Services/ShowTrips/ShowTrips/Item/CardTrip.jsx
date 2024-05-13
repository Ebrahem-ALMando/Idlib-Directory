import React, {useEffect} from 'react'
import styles from "./CardTrip.module.css"
import {Card, Col, Table} from "react-bootstrap";
import {FaLocationDot} from "react-icons/fa6";
const CardTrip = ({ title, imageName, description }) => {
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
        <>
            {/*<Col xl={8} className={`col-auto m-4 `} >*/}
                <Card className={`${styles.card}`} >
                    <Card.Header className={`${styles.cardHeader}`}>
                        <Card.Title className={`${styles.textTitle}`}>
                            مـسـار الرحلة
                            <img alt={"img"} src="/assets/img/TripsPage/Location.png"/>
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
                        <Table bordered className={`${styles.table}`} >
                            <thead className={`${styles.tablehead}`}>
                            <tr>
                                <th>#</th>
                                <th>الانطلاق من ادلب</th>
                                <th>الانطلاق من سرمدا</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>7:00 AM</td>
                                <td>7:00 AM</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>7:30 AM</td>
                                <td>7:30 AM</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>8:00 AM</td>
                                <td>8:00 AM</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>8:30 AM</td>
                                <td>8:30 AM</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            {/*</Col>*/}
        </>
    );
}

export default CardTrip;