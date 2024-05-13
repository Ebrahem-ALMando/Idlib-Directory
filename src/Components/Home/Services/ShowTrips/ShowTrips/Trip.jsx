
import {Col, Container, Row} from "react-bootstrap";
import styles from "../../Trips.module.css";
import React from "react";
import CardTrip from "./Item/CardTrip";
import Slider from "../../../SliderHome/Slider";

function Trip(){
    return(
        <>
        {/*    <NavBar/>*/}
            {/*<Slider/>*/}
            <Container className={``} dir="">
                <Row  xl={6} className={` row justify-content-center `}>
                    <Col xl={8} className={`col-auto  `}>
                        <h1 className={`${styles.textTrips}`} style={{marginTop:'8rem'}} >
                            الرحلات ضمن خط ادلب سرمدا
                        </h1>
                        <CardTrip
                            imageName={"trip_1.jpg"}
                            title={"مستشفى ادلب الجامعي"}
                            description={"يبدأ انطلاق الرحلات على هذا الخط من الساعة 7 صباحا وحتى 8 مساءً"}
                            price={'12 Tl'}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Trip;