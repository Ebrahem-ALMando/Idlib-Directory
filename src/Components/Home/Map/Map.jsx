import React, {useEffect, useRef, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.min.js';

import L from 'leaflet';
import "leaflet-routing-machine";

import styles from "./Map.module.css";
import stylesT from "../Services/Cards/CardTrips.module.css"
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import {urlDomainApi} from "../../../URL_DomainApi";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import positions from "../../AdminDashboard/Positions/Positions";


const Map = () => {
    const mapRef = useRef();
    const  [isLoad,setIsLoad]=useState(false);
    const  [locStart,setLocStart]=useState("");
    const [beginPointX,setBeginPointX]=useState("");
    const [endPointX,setEndPointX]=useState("");
    const [beginPointY,setBeginPointY]=useState("");
    const [endPointY,setEndPointY]=useState("");
    const [lastRoutingControl,setLastRoutingControl]=useState()
    const [dataPosition,setDataPosition]=useState([]);
    const [nameLine,setNameLine]=useState('');


    const [dataRegions,setDataRegions]=useState([]);



    const getRegionsList = async () => {

        try {
            const response = await axios.get(`${urlDomainApi}/region`);
            if (response.status === 200) {
                setDataRegions(response.data.Regions);
            } else {
                toast.error('حدث خطأ في جلب قائمة المناطق');
            }
        } catch (error) {
            toast.error('حدث خطأ في الاتصال بالخادم');
        }
    };

    useEffect(() => {
        getRegionsList();
        getPositionList();
        const customIcon = new L.icon({
            iconUrl: require('./Location map.png'),
            iconRetinaUrl:require('./Location map.png'),// مسار الأيقونة الخاصة بك
            iconSize: [32, 32], // حجم الأيقونة
            iconAnchor: [16, 32], // محور الأيقونة
            tooltipAnchor: [0, -32], // محور النص في العلامة
            popupAnchor: [0, -32] // محور النص في العلامة المنبثقة (Popup)
        });
        L.Marker.prototype.options.icon = customIcon;
    }, []);
const setLoc=()=>{
    setTimeout(()=>{
        const map = mapRef.current;





        if(locStart.length>0){
            setIsLoad(true);

            if (map != null) {
                const startCoords = [beginPointX,beginPointY];
                const endCoords =[endPointX,endPointY];
                if(lastRoutingControl){
                    map.removeControl(lastRoutingControl);
                }
                const routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(startCoords[0], startCoords[1]),
                        L.latLng(endCoords[0], endCoords[1])
                    ],
                    routeWhileDragging: true,
                    draggableWaypoints: false, // تعطيل تحريك المسار بعد رسمه
                    addWaypoints: false,
                    lineOptions: {
                        styles: [
                            {
                                color: '#1d8cf8'
                                , opacity: 1
                                , weight: 4
                            }
                        ]
                    }
                });
                setLastRoutingControl(routingControl);
                routingControl.addTo(map);
               let c1= document.getElementById('begin').value;
               let c2= document.getElementById('end').value;
                console.log(c1+c2)
                setNameLine(c1+c2)

                /*
                           map.dragging.disable();
                           map.touchZoom.disable();
                           /!*  map.doubleClickZoom.disable();*!/
                           map.scrollWheelZoom.disable();
                           map.boxZoom.disable();
                           map.keyboard.disable();*/

            }
        }else {
            toast.error("حدث خطأ يرجى تحديد المنطقة بشكل صحيح");
        }

    },1000)
}


    const setBeginPointLoc=async (e)=>{
        if(e.target.value==="----"){
            setLocStart('')
        }else {
            const points = e.target.value.split(',');

            setBeginPointX(points[0])
            setBeginPointY(points[1])


        }





       /*       setLoc()*/
      //  await  print();
    }
    const setEndPointLoc =  (e) => {


        if(e.target.value==="----"){
            setLocStart('')
        }else {
            const points = e.target.value.split(',');

            setEndPointX(points[0]);
            setEndPointY(points[1]);
            setLocStart("get")
        }




    }

    const getPositionList = async () => {
        try {
            const response = await axios.get(`${urlDomainApi}/position`);
            if (response.status === 200) {
                setDataPosition(response.data.position);
            } else {
                toast.error('حدث خطأ في جلب قائمة المواقف');
            }
        } catch (error) {
            toast.error('حدث خطأ في الاتصال بالخادم');
        }
    };
    const options=dataRegions.map((region,index)=>{
            return(
                <option
                    value={[`${region.point_x},${region.point_y}`]}

                >
                    {region.name}
                </option>
            )
        })
    //
    //  يجب الانتباه الى تغيير المسار في select انا حاليا مكرر الحدث بدو ازالة
    //
    return (
        <section className={`${styles.mapSec}`}>
            <Container className={``} dir="">
                <Row  xl={6} className={` row justify-content-center `}>
                    <Col xl={8} className={`col-auto  `}>
                        <h1 className={`${styles.titleMap}`} >
                            مسارات الخطوط
                        </h1>

                    </Col>
                    <Col xl={8} className={`col-auto  `}>
                        <p className={`${styles.textMap}`} >
                           يمكنك مشاهدة جميع الخطوط مباشرة على الخريطة وجميع المواقف الموجودة على الخط الذي تم اختياره من خلال اختيار نقطة البداية ونقطة النهاية
                        </p>

                    </Col>

                </Row>

                <Row  xl={6} className={` row justify-content-center `}>

                        <Col xl={6} className={`col-auto col-6 `}>
                            <p className={`${styles.textFilter} `}>
                                منطقة النهاية
                            </p>
                            <select
                                id={'begin'}
                                className={`${styles.compoFilter} `} onInput={setEndPointLoc}

                            >


                                    <option >
                                        ----
                                    </option>


                                {options}

                            </select>
                        </Col>
                        <Col xl={6} className={`col-auto col-6 `}>
                            <p className={`${styles.textFilter} `}>
                                منطقة البداية
                            </p>
                            <select
                                id={'end'}
                                className={`${styles.compoFilter} `}

                                    onInput={

                                            setBeginPointLoc

                                    }
                            >
                                <option >
                                    ----
                                </option>
                                {options}
                            </select>

                        </Col>


                </Row>
                <Row  xl={6} className={` row justify-content-center `}>
                    <Col xl={6} className={`col-auto col-6 `}>
                        <button onClick={setLoc} className={`${stylesT.tripButton} ${styles.buttnGetPath} `}>
                            عرض المسار
                        </button>
                    </Col>
                </Row>
            </Container>


            <MapContainer
                draggable={false}
                className={styles.customMapContainer}
                center={[35.93044221577073, 36.63428119557299]} zoom={13}  ref={mapRef}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
{/*                <Marker
                    title="نص جديد عند مرور المؤشر"
                    title="البداية"
                    icon={customIcon} className={styles.mark}  position={[35.93044221577073, 36.63428119557299]} />*/}
                {isLoad&&locStart.length>1?
               <>
                   <Marker position={[beginPointX,beginPointY]}/>
                   <Marker position={[endPointX,endPointY]} />

                   {dataPosition.map((item)=>{
                    return(
                        <>
                            {nameLine==='36.19591008505874,36.73238643664288435.928713797204914,36.6406145139876'?
                                <Marker position={[item.point_x,item.point_y]} />:null
                            }
                        </>

                    )
                   })}
                  {/* <Marker position={[36.58122743179597, 37.03300248335753]} />
                    
                   <Marker position={[36.56654540726946, 37.00442086395486]} />
                   <Marker position={[36.45487395709631, 37.03616297883987]} />*/}
               </>
                :null}
            </MapContainer>

        </section>

    );

};

export default Map;
