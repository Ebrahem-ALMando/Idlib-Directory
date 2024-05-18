import "./App.css";

/*import {Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Story from "./Components/USPage/Story/Story";*/
import NavBar from "./Components/Header/NavBar";
/*import Footer from "./Components/Footer/Footer";
import ExpertiseWhyQUAIM from "./Components/USPage/Expertise – Why QUAIM/ExpertiseWhyQUAIM";
import ExpertisePromiseYou from "./Components/USPage/Expertise – What We Promise You/ExpertisePromiseYou";
import PhilosophyValueTriangle from "./Components/USPage/Philosophy -Value-Triangle/PhilosophyValueTriangle";
import PhilosophyHexastagesProcess from "./Components/USPage/Philosophy - Hexastages Process/PhilosophyHexastagesProcess";
import CustomerCentricity from "./Components/PortfolioPage/Customer Centricity/CustomerCentricity";
import StrategySystems from "./Components/PortfolioPage/ValueProposition/StrategySystems/StrategySystems";
import CapabilityDevelopment from "./Components/PortfolioPage/ValueProposition/Capability Development/CapabilityDevelopment";
import OrganizationalTransformation
    from "./Components/PortfolioPage/ValueProposition/Organizational Transformation/OrganizationalTransformation";
import Shifts from "./Components/PortfolioPage/ValueProposition/Shifts/Shifts";
import Projects from "./Components/YouPage/Projects/Projects";
import Clients from "./Components/YouPage/Clients/Clients";
import Testimonials from "./Components/YouPage/Testimonials/Testimonials";
import ContactUsPage from "./Components/Contact Us/ContactUsPage";*/
import ContactUSContext from "./Components/Context/Context";
import React, {useEffect, useState} from "react";
/*import Blog from "./Components/BlogPage/Blog";
import BlogPage from "./Components/BlogPage/BlogPageContent/BlogPage";
import Expert from "./Components/TogetherPage/Expert/Expert";
import Partner from "./Components/TogetherPage/Partner/Partner";
import Intern from "./Components/TogetherPage/Intern/Intern";*/
import Slider from "./Components/Home/SliderHome/Slider";

import Home from "./Components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppAdmin from "./AppAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Login/Login";
import Trip from "./Components/Home/Services/ShowTrips/ShowTrips/Trip";
import SignIn from "./Components/SignIn/SignIn";
function App() {
        const [isContactus,setIsContactus]=useState(false)
        const isContactusValue={isContactus,setIsContactus};
        const [idUser,setIdUser]=useState(localStorage.getItem('idUser'));
        useEffect(()=>{
            setIdUser(localStorage.getItem('idUser'))

        },[localStorage.getItem('idUser')])
  return (
    <>
        {idUser?idUser==="0"?

            <ContactUSContext.Provider value={isContactusValue}>

            <NavBar typeUser={idUser}/>
                <ToastContainer />

                <Routes>
                    <Route  path="/home" element={<Home/>} />
                    <Route  path="/" element={<Home/>} />
                    <Route  path="/login" element={ <Login/>} />
                    <Route  path="/SignIn" element={ <SignIn/>} />



                </Routes>

    {/*            <Route  path="/trip" element={ <Trip/>} />*/}
            {/*<Slider/>*/}

        {/*    <CardTrips
                title="رحلة باص رائعة"
                imageSrc="#"
                description="استمتع بأجمل المناظر الطبيعية خلال هذه الرحلة الرائعة."
                buttonText="انطلق الآن"
            />*/}

        {/*  <Routes>
           Home Page
            <Route  path="/home" element={ <HomePage/>} />\
            <Route  path="/" element={ <HomePage/>} />
             Us Page
            <Route  path="/us/story" element={ <Story/>} />
            <Route  path="/us/expertise/why-quaim" element={ <ExpertiseWhyQUAIM/>} />
            <Route  path="/us/expertise/Promise-You" element={ <ExpertisePromiseYou/>} />
            <Route  path="/us/philosophy/value-triangle" element={ <PhilosophyValueTriangle/>} />
            <Route  path="/us/philosophy/HexastagesProcess" element={ <PhilosophyHexastagesProcess/>} />
             Portfolio Page
            <Route  path="/portfolio/customer-centricity" element={ <CustomerCentricity/>} />
            <Route  path="/portfolio/value-Proposition/strategy-systems" element={ <StrategySystems/>} />
            <Route  path="/portfolio/value-Proposition/capability-development" element={ <CapabilityDevelopment/>} />
            <Route  path="/portfolio/value-Proposition/organizational-transformation" element={ <OrganizationalTransformation/>} />
            <Route  path="/portfolio/value-Proposition/shifts" element={ <Shifts/>} />
             You Page
            <Route  path="/you/projects" element={ <Projects/>} />
            <Route  path="/you/clients" element={ <Clients/>} />
            <Route  path="/you/testimonials" element={ <Testimonials/>} />
            Contact Us Page
            <Route  path="/contact-us" element={ <ContactUsPage/>} />
            Blog Page
            <Route  path="/blog" element={ <Blog/>} />
            <Route  path="/blog-page" element={ <BlogPage/>} />
            Together Page
            <Route  path="//together/expert" element={ <Expert/>} />
            <Route  path="/together/intern" element={ <Intern/>} />
            <Route  path="/together/partner" element={ <Partner/>} />
        </Routes>
            <Footer />*/}
            </ContactUSContext.Provider>:

                <AppAdmin />:
            <ContactUSContext.Provider value={isContactusValue}>
                <NavBar typeUser={idUser}/>
                <Home/>
            </ContactUSContext.Provider>

        }



    </>
  );
}

export default App;
