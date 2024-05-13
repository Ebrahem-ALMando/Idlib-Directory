
import './Footer.css'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Contactus from "./Contactus";
import {useContext, useEffect} from "react";
import ContactUSContext from "../Context/Context";
const Footer=(props)=>{
    const[tKey,i18n]=useTranslation();
    const {isContactus}=useContext(ContactUSContext);

    return(
        <>

  {/*          {localStorage.getItem('isContactus')?*/}
            <Contactus text={"Contact Us Now"}/>

            {props.isPorfolio?
                <Row className="justify-content-center  topImg">

                </Row>:null}
        <section className="footer" >
            <Container  dir="">

                <Row className="justify-content-center content-footer">
                    <Col xl={6} className="col-auto">
                        <a href="#">
                            <img className="logo-footer" src={'/assets/img/QuaimLogo.png'} alt="Logo" />
                        </a>
                    </Col>
                    <Col xl={6} className="col-auto">
                    {/*<div className="content-footer ">*/}
                 <span>
                        <ul>
                            <a href="#US">
                            <li>{tKey('US')}</li>
                            </a>
                              <a href="#PORTFOLIO">
                      <li>{tKey('PORTFOLIO')}
                          </li>
                            </a>
                              <a href="#YOU">
                       <li>{tKey('YOU')}</li>
                            </a>
                              <a href="#BLOG">
                       <li>{tKey('BLOG')}</li>
                            </a>
                              <a href="#TOGETHER">
                                  <li>{tKey('TOGETHER')}</li>
                            </a>

                        </ul>
                 </span>
                    {/*</div>*/}
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export  default Footer;

