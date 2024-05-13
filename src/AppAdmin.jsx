
import styled from "styled-components";

import { Route, Routes } from "react-router-dom";

import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Components/AdminDashboard/Sidebar";
import MainContent from "./Components/AdminDashboard/MainContent";
import Drivers from "./Components/AdminDashboard/Drivers/Drivers";
import Regions from "./Components/AdminDashboard/Regions/Regions";
import Message from "./Components/AdminDashboard/Message/Message";
import Positions from "./Components/AdminDashboard/Positions/Positions";
import {useEffect, useState} from "react";
import axios from "axios";
import {urlDomainApi} from "./URL_DomainApi";
import Wagons from "./Components/AdminDashboard/Wagons/Wagons";
import Lines from "./Components/AdminDashboard/Lines/Lines";

const AppAdmin = () => {
    const [dataUser,setDataUser]=useState([]);

    useEffect(() => {

        getNameUser()

    }, []);
    const getNameUser=async ()=>{

        try {
            const response = await axios.post(`${urlDomainApi}/user/${localStorage.getItem('idUser')}`);
            if (response.status === 200) {
                setDataUser(response.data.user.name);
                console.log(response.data.user.name)
            } else {
                toast.error('حدث خطأ في جلب قائمة البيانات');
            }
        } catch (error) {
            toast.error('حدث خطأ في الاتصال بالخادم');
        }

    }
    return (
        <Container dir="rtl">
            <Sidebar nameUser={dataUser} />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<MainContent nameUser={dataUser} />} />
                <Route path="/dashboard" element={<MainContent nameUser={dataUser} />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/wagons" element={<Wagons />} />
                <Route path="/regions" element={<Regions />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/lines" element={<Lines />} />
                <Route path="/message" element={<Message />} />
                {/*<Route path="/users" element={<Users />} />
                <Route path="/students" element={<Student/>} />
                <Route path="/services" element={<Services />} />
                <Route
                    path="/category_courses"
                    element={<Category_Courses />}
                />
                <Route path="/courses" element={<Courses />} />*/}
            </Routes>
        </Container>
    );
};
const Container = styled.div`
  display: flex;
  height: 95%;



  background: #072a7b;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default AppAdmin;
