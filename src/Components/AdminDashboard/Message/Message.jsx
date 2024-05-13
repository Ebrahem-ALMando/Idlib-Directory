import react, {useEffect, useState} from "react"

import styled from "styled-components";

import axios from "axios";
import {urlDomainApi} from "../../../URL_DomainApi";

import {toast} from "react-toastify";
import styles from './Message.module.css'
const Message=props=>{
    const [dataMessage,setDataMessage]=useState([]);


    useEffect(() => {

        getMessagesList();

    }, []);
    const getMessagesList = async () => {
        try {
            const response = await axios.get(`${urlDomainApi}/message`);
            if (response.status === 200) {
                setDataMessage(response.data.messages);
            } else {
                toast.error('حدث خطأ في جلب قائمة البيانات');
            }
        } catch (error) {
            toast.error('حدث خطأ في الاتصال بالخادم');
        }
    };


    return(
        <Container>

            <div className={`${styles.textTitle } w-100 alert alert-light`}>
                <h1>
                    الرسائل الواردة
                </h1>
            </div>
            {dataMessage.map((message,index)=>{
                return(
                    <div className={styles.centeredContainer}>
                        <div className={styles.card}>
                            <div className="card-body">
                                <h5 className={styles.cardTitle}>{message.name}{" "} {message.last_name}</h5>
                                <h6 className={`${styles.cardSubtitle} mb-2 text-muted`}></h6>
                                <p className={styles.cardText}>
                                    <strong>الايميل:</strong> {message.email}
                                </p>
                                <p className={styles.cardText}>
                                    <strong>الهاتف:</strong> {message.phone}
                                </p>
                                <p className={styles.cardText}>
                                    <strong>محتوى الرسالة:</strong><br/>
                                    <span className={styles.message}>
                                         {message.message}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                )

            })}


        </Container>
    )
}
const Container = styled.div`
  width: 90%;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;
const CreateModalContainer=styled.div`
margin:2rem;
text-align:center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem auto;
    width: 80%;
  }
`
const InputContainer = styled.div`
  display: flex;
  width: 500px;
  margin: 2rem auto;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin: 2rem auto;
      width: 80%;
  }
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
    color: #ded8f4;
  }
`;
const Input = styled.input`
  border: 2px solid #7335cf;
  background-color: #072a7a;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #ded8f4;
  width: 500px;
  
  &::placeholder{
   text-align: center;
    color: #ded8f4;
  }
  &:focus {
    box-shadow: -10px 0 20px 0 #7c33d3;
    outline: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
  width: 100%;
  }
`;
export default Message