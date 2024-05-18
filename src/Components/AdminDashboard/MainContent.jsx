import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import ViewCardInfo from "./ViewCardInfo";
import Info from "./Info";
import LastAddItem from "./LastAddItem";
import axios from "axios";
import {urlDomainApi} from "../../URL_DomainApi";
import {toast} from "react-toastify";
import Wagons from "./Wagons/Wagons";
import {BiLoader} from "react-icons/bi";
/*import Info from "./Info";
import ViewCardInfo from "./viewCardInfo";
import HomePage from "./GohomePage";
import Members from "./Members";
import { themeColor2} from "../../utils";
import Students from "./Students";*/
const MainContent=(props)=> {
    const [upDrivers,setUpDrivers]=useState([])
    const [upWagons,setUpWagons]=useState([])
    const [countMessage,setCountMessage]=useState([])
    const [countDriver,setCountDriver]=useState([])
    const [countWagons,setCountWagons]=useState([])
    const [countRegion,setCountRegion]=useState([])
    const [countLine,setCountLine]=useState([])
    const [isLoad,setIsLoad]=useState(false)
    const getTowUpDriver=async ()=>{
        await axios.get(`${urlDomainApi}/driver/up`)
            .then((response)=>{
            if(response.status===200){
                setUpDrivers(response.data.drivers)
            }
        })
    }
    const getTowUpWagons=async ()=>{
        await axios.get(`${urlDomainApi}/wagon/up`)
            .then((response)=>{
            if(response.status===200){
                setUpWagons(response.data.wagons)
            }
        })
    }
    const getCountMessage=async ()=>{
        await axios.get(`${urlDomainApi}/message/count`)
            .then((response)=>{
            if(response.status===200){
                setCountMessage(response.data.messages)
            }
        })
    }
    const getCountDriver=async ()=>{
        await axios.get(`${urlDomainApi}/driver/count`)
            .then((response)=>{
            if(response.status===200){
                setCountDriver(response.data.drivers)
            }
        })
    }
    const getCountWagons=async ()=>{
        await axios.get(`${urlDomainApi}/wagons/count`)
            .then((response)=>{
            if(response.status===200){
                setCountWagons(response.data.wagons)
            }
        })
    }
    const getCountRegion=async ()=>{
        await axios.get(`${urlDomainApi}/region/count`)
            .then((response)=>{
            if(response.status===200){
                setCountRegion(response.data.Regions)
            }
        })
    }
    const getCountLine=async ()=>{
        await axios.get(`${urlDomainApi}/line/count`)
            .then((response)=>{
            if(response.status===200){
                setCountLine(response.data.line)
            }
        })
    }
    useEffect(() => {
        getTowUpDriver()
        getTowUpWagons()
        getCountMessage()
        getCountDriver()
        getCountWagons()
        getCountRegion()
        getCountLine()
      setTimeout(()=>{
          setIsLoad(true)
      },1000)

    }, []);
    return(
        <Container>
            <Navbar nameUser={props.nameUser}/>
            {isLoad?        <SubContainer>
                <SectionOne>
                    <ColumnOne1>
                        <ViewCardInfo title={"الرسائل الواردة"}
                                      count={countMessage||"0"}

                                      time={"  منذ اخر شهر"}
                                      increment={"10%"}
                        />
                        <Info
                            /*countSectionTow={countEnquiries}*/
                            countSectionTow={countWagons}
                            titleSectionTow={'العربات'}
                            timeSectionTow={"هذا الاسبوع 10%"}
                            /*countSectionOne={countMessage}*/
                            countSectionOne={countDriver}
                            timeSectionOne={"هذا الشهر 20%"}
                            titleSectionOne={"السائقين"}
                            badgeOne={"قديمة"}
                            badgeTow={"جديدة"}
                            url={"/"}
                        />

                    </ColumnOne1>
                    <ColumnTwo1>
                        <TitleText>المضافين حديثا </TitleText>
                        <LastAddItem
                            setion={'D'}
                            link={'/drivers'}
                            nameImg={'driver.png'}
                            data={upDrivers}
                            viewItem={'عرض جميع السائقين'}
                        />
                    </ColumnTwo1>
                </SectionOne>
                <SectionOne>
                    <ColumnOne1>
                        <ViewCardInfo title={"الرحلات"} count={70}
                                      time={"  منذ اخر شهر"}
                                      increment={"20%"}

                        />
                        <Info
                            countSectionTow={countLine}
                            timeSectionTow={"هذا الشهر 20%"}
                            titleSectionTow={"الخطوط"}
                            countSectionOne={countRegion}
                            timeSectionOne={"هذا الشهر 5%"}
                            titleSectionOne={"المناطق "}
                            badgeOne={"بعيدة"}
                            badgeTow={"قريبة"}
                            url={"/courses"}
                        />
                    </ColumnOne1>
                    <ColumnTwo1>
                        <LastAddItem
                            setion={'W'}
                            link={'/wagons'}
                            nameImg={'Bus.png'}
                            data={upWagons}
                            viewItem={'عرض جميع العربات'}
                        />
                    </ColumnTwo1>
                </SectionOne>

                <SectionTwo>
                    {/*<ColumnOne2>*/}
                    {/*    <InvoiceContainer>*/}
                    {/*        <TitleText></TitleText>*/}

                    {/*    </InvoiceContainer>*/}
                    {/*</ColumnOne2>*/}
                    <ColumnTwo2>
                        <TitleText>الصفحة الرئيسية</TitleText>
                        {/* <HomePage/>*/}

                    </ColumnTwo2>

                </SectionTwo>

            </SubContainer>:

            <H1>
                يتم تحميل البيانات
              <Icon>
                  <BiLoader/>
              </Icon>
            </H1>

            }


        </Container>
    )
}
const H1=styled.h1`
position: relative;
 top: 20%;
  text-align: center;
    background:linear-gradient(90deg, #41C9E2,#008DDA);
  padding: 50px;
  border-radius: 20px;
  opacity: 0.8;
`
const Icon=styled.span`
  svg {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    vertical-align: top;
    animation: image 1s linear infinite; /* زمن أطول لدوران أكثر سلاسة */
  }

  @keyframes image {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`
const Container = styled.div`
  width: 80%;
  color: white;


  margin: 1rem 8rem 1rem 4rem;
    
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
    padding-top: 20px;
    border-top: 3px solid ;

    border-image: linear-gradient(90deg, #41C9E2, #008DDA);
    border-image-slice: 1;
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const TitleText = styled.h3`
  height: 26%;
    color: #1d8de9;
  /* padding-top */
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default MainContent;
