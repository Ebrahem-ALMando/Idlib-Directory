import styled from "styled-components";
import { Link} from "react-router-dom";
import {
    RiHomeLine,
    RiDatabaseFill,
    RiMessengerFill,
    RiAccountCircleLine,
    RiUser3Fill
} from "react-icons/ri";
import {FaCar, FaSubway, FaWallet} from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";

import React, {useEffect, useState} from "react";
import {SiGooglemessages} from "react-icons/si";
import {BiCategoryAlt, BiLogIn} from "react-icons/bi";
import styles from './Sidebar.module.css'
import {FaLocationDot, FaMapLocationDot} from "react-icons/fa6";
import {PiPathBold} from "react-icons/pi";
import Badge from "./Badge";

function Sidebar(props) {
    const [isPressed, setIsPressed] = useState('dashboard');

    const [date,setDate]=useState('');
    const [activeLink,setActiveLink]=useState('dashboard')
    useEffect(()=>{
        setIsPressed(localStorage.getItem('activeLink'))
        getDateNow()
    },[])
        const getDateNow=()=>{
            const timeElapsed = Date.now();

            const today = new Date(timeElapsed)

            setDate(today.toLocaleDateString());
        }

    const handleMouseActiveLink = (link) => {
        setIsPressed(link);
        localStorage.setItem('activeLink',link);

    };


    const setActiveLinkUrl=(value)=>{
        setActiveLink(value);

    }
    return (
        <Container className="" >
            <ProfileContainer>
                <Avatar src="/assets/img/admin.png" />
                <Name>{props.nameUser}</Name>

                <Badge
                    className={"btn btn-outline-light"}
                    text="مسؤول" />
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Link id={`${activeLink === "dashboard" ? "active-link" : "lin"}`}
                          className="text-decoration-none link-light" to="/dashboard" >
                    <Linkurl
                        className={isPressed==="dashboard"?styles.selecct:null}
                        onClick={()=>{handleMouseActiveLink("dashboard")

                        }}
                    >
                        <RiHomeLine />

                            <h3
                                onClick={()=>{setActiveLinkUrl("dashboard")}}
                            >لوحة التحكم</h3>

                    </Linkurl>
                    </Link>
                    <Link id={`${activeLink === "Enquiries" ? "active-link" : "lin"}`}
                          className="text-decoration-none link-light" to="/drivers" >
                    <Linkurl
                        className={isPressed==="drivers"?styles.selecct:null}
                        onClick={()=>{handleMouseActiveLink("drivers")}}
                    >
                        <RiAccountCircleLine />

                            <h3

                            >السائقين </h3>

                    </Linkurl>
                    </Link>
         {/*           <Linkurl
                        onMouseDown={handleMouseDown}

                        isPressed={isPressed}
                    >
                        <RiAccountCircleLine />
                        <Link id={`${activeLink === "users" ? "active-link" : "lin"}`}
                              className="text-decoration-none link-light" to="/users" >
                            <h3
                                onClick={()=>{setActiveLinkUrl("users")}}
                            >المستخدمين</h3>
                        </Link>
                    </Linkurl>*/}
                    <Link  id={`${activeLink === "students" ? "active-link" : "lin"}`}
                           className="text-decoration-none link-light" to="/wagons" >
                    <Linkurl
                        className={isPressed==="bass"?styles.selecct:null}
                        onClick={()=>{handleMouseActiveLink("bass")}}
                    >
                        <FaCar />

                            <h3
                                onClick={()=>{setActiveLinkUrl("students")}}
                            >العربات</h3>

                    </Linkurl>
                    </Link>
                    <Link id={`${activeLink === "services" ? "active-link" : "lin"}`}
                          className="text-decoration-none link-light" to="/regions" >
                    <Linkurl
                        className={isPressed==="regions"?styles.selecct:null}
                        onClick={()=>{handleMouseActiveLink("regions")}}
                    >
                        <FaLocationDot />

                            <h3
                                onClick={()=>{setActiveLinkUrl("services")}}
                            >المناطق</h3>

                    </Linkurl>
                    </Link>
                    <Link id={`${activeLink === "category_courses" ? "active-link" : "lin"}`}
                          className="text-decoration-none link-light" to="/positions" >
                    <Linkurl
                        className={isPressed==="positions"?styles.selecct:null}
                        onClick={()=>{handleMouseActiveLink("positions")}}
                    >
                        < FaMapLocationDot/>

                            <h3
                                onClick={()=>{setActiveLinkUrl("category_courses")}}
                            >المواقف</h3>

                    </Linkurl>
                    </Link>
                    <Link id={`${activeLink === "courses" ? "active-link" : "lin"}`}
                          className="text-decoration-none link-light" to="/lines" >
                    <Linkurl
                        className={isPressed==="lines"?styles.selecct:null}
                        onClick={()=>{handleMouseActiveLink("lines")}}
                    >
                        <PiPathBold />

                            <h3
                                onClick={()=>{setActiveLinkUrl("courses")}}
                            >الخطوط</h3>

                    </Linkurl>
                    </Link>
                    <Link id={`${activeLink === "repo" ? "active-link" : "lin"}`}
                          className="text-decoration-none link-light" to="" >
                    <Linkurl
                        className={isPressed==="trips"?styles.selecct:null}
                        onClick={()=>{handleMouseActiveLink("trips")}}
                    >
                        <FaSubway />

                            <h3
                                onClick={()=>{setActiveLinkUrl("repo")}}
                            >الرحلات</h3>

                    </Linkurl>
                    </Link>
                    <Link id={`${activeLink === "message" ? "active-link" : "lin"}`}
                          className="text-decoration-none link-light" to="/message" >
                    <Linkurl
                        onClick={()=>{handleMouseActiveLink("message")}}

                        className={isPressed==="message"?styles.selecct:null}
                    >
                        <RiMessengerFill/>

                            <h3
                                onClick={()=>{setActiveLinkUrl("message")}}

                            >الرسائل الواردة</h3>

                    </Linkurl>
                    </Link>
                    <Link id={`${activeLink === "message" ? "active-link" : "lin"}`}
                          className="text-decoration-none link-light" to="/home" >
                        <Linkurl
                            onClick={()=>{handleMouseActiveLink("logout")
                                localStorage.setItem('idUser',0)
                                window.location.href='/home'
                            }}

                            className={isPressed==="logout"?styles.selecct:null}
                        >
                            <BiLogIn/>

                            <h3
                                onClick={()=>{setActiveLinkUrl("message")}}

                            >تسجيل الخروج</h3>

                        </Linkurl>
                    </Link>
                </Links>

                <ContactContainer>
                    <span>التاريخ </span>
                    <q className="text-center">
                        {
                            date
                        }
                    </q>
                </ContactContainer>
            </LinksContainer>

        </Container>


    );
}

const Container = styled.div`
  min-width: 300px;
 
  height: 100% !important;
  border-radius: 2rem 0 0 2rem;
  box-shadow: -10px 0 20px 0 #7c33d3;
  background:linear-gradient(90deg, #7c33d3,#254eb1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  right: 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content !important;
    width: 100%;
  }
 
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Avatar = styled.img`
    height: 5rem;
    width:5rem;
    border-radius: 6rem;
    margin-top: 20%;
`;

const Name = styled.h1`
    color: white;
    font-size:23px;
    font-weight: 400;
    margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
    background:linear-gradient(90deg, #7c33d3,#254eb1);

    height: 100%;
    width: 100%;
    border-top: none;
    border-radius: 0 0 0 2rem;
`;

const Links = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    height: 60%;
`;

const Linkurl = styled.li`
  margin-right: 7%;
  margin-left: 7%;
  margin-bottom: 2rem;
  margin-top:-1rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 10px 0 10px 0;
 height: 50px;
  padding: 10px 15px;
  h3 {
    font-weight: 200;
    font-size: 22px;
    &:hover {
      color: #060b2d;
    }
  }
  svg {
    font-size: 1.5rem;
  }
  opacity: 0.8;

  transition: background 0.3s, color 0.3s;


  &:hover {
    h3{
      color: #060b2d;
      transition-delay: 0.15s;;
    }
    background: white;
    color: #060b2d;
    transition-delay: 0.15s;;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 300px;
    margin: 0.7rem auto;
  }
`;

const ContactContainer = styled.div`
    width: 60%;
    background-color: #091322;
    color: #c4c4c4;
    height: 20%;
    margin: 2rem auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    a {
        color: white;
        text-decoration: none;
    }

    @media screen and (min-width: 320px) and (max-width: 1080px) {
        margin-bottom: 2rem;
    }
`;

export default Sidebar;

