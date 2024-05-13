import {Col, Container, Row} from "react-bootstrap";

import {useTranslation} from "react-i18next";
import styles from "./Contactus.module.css";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";

import ContactUSContext from "../Context/Context";


const Contactus=(props)=>{
    const[tKey,i18n]=useTranslation();
    const {setIsContactus}=useContext(ContactUSContext);

/*    const [isContactus,setIsContactus]=useState(localStorage.getItem('isContactus'))*/
    return(

      <Container id={`${props.text!=='Send'?"contactBTN":""}`}>
          <Row  xl={6} className={` row justify-content-center  align-items-center ${styles.Row} `}>
              <Col xl={12} className={`col-auto text-center  `}>
                  <Link
                      className="text-decoration-none m-auto  link-light " to={"/contact-us"}>
                  <button
                      onClick={()=>{
                          setIsContactus(true);

                      }}
                      className={`${styles.button}`}>{tKey(props.text)}</button>
                  </Link>
              </Col>
          </Row>

      </Container>


    )
}
export default Contactus