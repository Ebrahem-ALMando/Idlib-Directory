import React from 'react'

import {Col, Container, Row} from "react-bootstrap";
import styles from './Trips.module.css'

import CardTrips from "./Cards/CardTrips";

import Filter from "./FilterSection/Filter";
const Services = () => {
  return (
      <section className={`${styles.TripsSec}`}>
        <Container className={``} dir="">
          <Row  xl={6} className={` row justify-content-center `}>
            <Col xl={8} className={`col-auto  `}>
              <h1 className={`${styles.textTrips}`} >
               المؤسسات والخدمات الأكثر شيوعاً
              </h1>

            </Col>
          </Row>
         <Filter/>

            <Row  xl={6} className={` row justify-content-center `}>
                <CardTrips
                    imageName={"trip_1.jpg"}
                    title={"مستشفى ادلب الجامعي"}
                    description={"يبدأ انطلاق الرحلات على هذا الخط من الساعة 7 صباحا وحتى 8 مساءً"}
                    price={'12 Tl'}

                />
                <CardTrips
                    imageName={"trip_1.jpg"}
                    title={"مستشفى ادلب الجامعي"}
                    description={"أول مستشفى أكاديمي تعليمي مجاني في الشمال السوري المحرر ، تأسس عام 2020 مً"}
                    price={'12 Tl'}

                />
                <CardTrips
                    imageName={"trip_1.jpg"}
                    title={"مستشفى ادلب الجامعي"}
                    description={"يبدأ انطلاق الرحلات على هذا الخط من الساعة 7 صباحا وحتى 8 مساءً"}
                    price={'12 Tl'}

                />

            </Row>
        </Container>
      </section>
  )
}

export default Services