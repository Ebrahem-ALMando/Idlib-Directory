import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {NavDropdown} from "react-bootstrap";
import menuData from "./Data/data.json";
import axios from "axios";
import {BiSolidDashboard} from "react-icons/bi";

const NavBar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [lan, setLan] = useState("AR");
    const [userData, setUserData] = useState("");
    const getIdUser = () => {
        axios.get(`http://127.0.0.1:8000/get/id/user/data`).then((response) => {
            if (response.data) {
                setUserData(response.data);
                console.log(response.data)
            } else {
                setUserData(false);
            }
        });
    };

  useEffect(() => {
/*      getIdUser();*/
    const onScroll = () => {
      if (window.scrollY < 50) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (url, classes) => {
    setActiveLink(url);
  };
  const MenuItem=({title,link,submenu})=>{
    if(submenu){
      return(
          <>
            <NavDropdown title={title} id="basic-nav-dropdown ">
              {
                submenu.map((item ,index)=>(
                    <MenuItem
                        key={index} title={item.title} link={item.link} submenu={item.submenu}/>
                ))
              }
            </NavDropdown>
          </>
      )
    }
    else {
      return (
          <Link
              className="text-decoration-none m-auto  link-light " to={link}
          >
            <Nav.Link
                href={link}
                className={`
                ${activeLink ===link ? "active navbar-link" : "navbar-link"}`
                }
                onClick={() => {
                  onUpdateActiveLink(link);
                }}
            >
              {" "}
               {title}
            </Nav.Link>
          </Link>
      )
    }
  }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} dir={"rtl"}>
      <Container className="">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Brand href="#"
                      className={`
                        ${activeLink ==="Home" ? "active navbar-link" : "navbar-link"}`
                      }
                      onClick={() => {
                        onUpdateActiveLink("Home");
                      }}>
          <Link to={"/"}
          >
            <img
        
              className="logo"
              src="/assets/img/logo6.gif"
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="Nav-bar" dir="rtl">
            {
              menuData.menu.map((item,index)=>(
                <MenuItem
                    key={index} title={item.title} link={item.link} submenu={item.submenu}/>
              ))
            }
              {localStorage.getItem('idUser')>0?
                <>

                  <Link
                      className="text-decoration-none m-auto  link-light " to={"/home"}
                  >
                      <button className="btn btn-outline-light btnLog "
                              onClick={()=>{
                                  localStorage.setItem('idUser',0)
                                  window.location.href='/home'
                              }}
                      >
                          تسجيل خروج
                      </button>
                  </Link>
                    <Link
                        className="text-decoration-none m-auto  link-light " to={"/dashboard"}
                    >
                        <button className=" btn btn-outline-light btnLog "
                                style={{marginRight:'1rem'}}
                        >
                            <BiSolidDashboard/>
                        </button>
                    </Link>
                </>
                  :
                  <Link
                      className="text-decoration-none m-auto  link-light " to={"/login"}
                  >
                      <button className="btn btn-outline-light btnLog "
                              onClick={()=>{


                              }}
                      >
                          تسجيل الدخول
                      </button>
                  </Link>
              }

          </Nav>

            <span className="navbar-text me-lg-5">
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


                    </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
