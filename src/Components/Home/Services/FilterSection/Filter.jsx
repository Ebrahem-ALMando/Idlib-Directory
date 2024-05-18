import {Col, Row} from "react-bootstrap";
import styles from './Filter.module.css'
import stylesT from "./../Cards/CardTrips.module.css";
import stylesTBUT from "../Cards/CardTrips.module.css";
import {FiSearch} from "react-icons/fi";
import styled from "styled-components";
const Filter=()=>{
    return(
        <>
    <Row  xl={6} className={` row justify-content-center `}>

        <Col xl={6} className={`col-auto col-6 ${styles.colInputFilter}`}>
            <p className={`${styles.textFilter} `}>
                البحث عن شيئ مخصص
            </p>


            <InputContainer>


                <button

                    style={{height: '2.95rem', width: '70px', borderRadius: ' 10px 0 0 0'}} className={stylesTBUT.tripButton}
                >
                    <Icon>
                        <FiSearch/>
                    </Icon>
                </button>

                <Input type="text" placeholder="البحث عن مؤسسة"
                />

            </InputContainer>


            {/*        <input
                type={'text'}
                id={'begin'}
                className={`${styles.compoFilter} `}

            />*/}


        </Col>
        <Col xl={6} className={`col-auto col-6 ${styles.colInputFilter}`}>
            <p className={`${styles.textFilter} `}>
            التصنيفات والمؤسسات
            </p>
            <select
                id={'end'}
                className={`${styles.compoFilter} `}


            >
                <option >
                    ----
                </option>

            </select>

        </Col>



    </Row>
    <Row  xl={6} className={` row justify-content-center ${styles.rowBTN} `} >
        <Col xl={2} className={`col-auto col-6 `}>

                <button className={`${stylesT.tripButton} ${styles.btnFilter}`}>
                    <span className={styles.text}>  الغاء التصفية</span><span
                    className={styles.icon}
                ><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                </button>

        </Col>
    </Row>
        </>
)
}
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;

`;
const Icon = styled.div`

    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    svg {
        font-weight: bold;
        font-size: 25px;
        color: #ffffff;
    }
`;
const Input = styled.input`
    border: 2px solid #ACE2E1;

    background: linear-gradient(90deg, #41C9E2, #008DDA);
    text-align: center;

    border-radius: 0 0 10px 0;
    color: #ffffff;
    width: 80%;
    height: 3rem;

    &::placeholder {
        text-align: center;
        color: #ffffff;
    }

    &:focus {
        box-shadow: -10px 0 20px 0 #80aecf;
        outline: none;
    }

    @media screen and (min-width: 320px) and (max-width: 1080px) {
        width: 100%;
    }
`;
export default Filter