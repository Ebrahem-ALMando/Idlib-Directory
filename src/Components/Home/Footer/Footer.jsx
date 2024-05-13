import {Col, Row} from "react-bootstrap";

import styles from './Footer.module.css'
const Footer=()=>{
    return(
        <Row className={styles.copy}>
            <Col sm={6} className="text-end ">
                <div className="social-icon ">
                    <a
                        href="https://www.linkedin.com/in/ebrahem-al-madno-932106241"
                        target="_blank"
                    >
                        <img src="/assets/img/nav-icon1.svg" alt="" />{" "}
                    </a>
                    <a
                        href="https://www.facebook.com/abo.mohamad.902604"
                        target="_blank"
                    >
                        <img src="/assets/img/nav-icon2.svg" alt="" />{" "}
                    </a>
                    <a
                        href="https://www.instagram.com/ibrahim_aladnan"
                        target="_blank"
                    >
                        <img src="/assets/img/nav-icon3.svg" alt="" />{" "}
                    </a>
                </div>
            </Col>
            <Col sm={6} className="text-start text-sm">
                <p className={styles.nameCopy}>
                    حقوق النشر محفوظة لموقع دليل ادلب
                </p>
            </Col>
        </Row>
    )
}
export default Footer;
