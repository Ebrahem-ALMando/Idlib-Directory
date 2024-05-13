import react, {useEffect, useState} from "react"

import styled from "styled-components";

import {FiSearch} from "react-icons/fi";
import stylesTBUT from '../../Home/Services/Cards/CardTrips.module.css'
import axios from "axios";
import {urlDomainApi} from "../../../URL_DomainApi";

import {toast} from "react-toastify";
import TableRegions from "../Table/RegionsTableItems/TableRegions";

import TableWagons from "../Table/WagonsTabbleItem/TableWagons";
import CreateWagons from "./CreateWagons";
const Wagons=props=>{
    const [dataWagons,setDataWagons]=useState([]);
    const [dataWagonsSE,setDataWagonsSE]=useState([]);
    const [isSearch,setIsSearch]=useState(false);
    /*   const [textSearch,setTextSearch]=useState('');*/

    useEffect(() => {

        getWagonsList();

    }, []);
    const getWagonsList = async () => {
        try {
            const response = await axios.get(`${urlDomainApi}/wagon`);
            if (response.status === 200) {

                setDataWagons(response.data.wagons);
            } else {
                toast.error('حدث خطأ في جلب قائمة العربات');
            }
        } catch (error) {
            toast.error('حدث خطأ في الاتصال بالخادم');
        }
    };
    const getNewWagonsData=()=> {
        getWagonsList()
    }
    const handleFilter = async (event) => {
        const searchText = event.target.value;
        if (searchText.length >0) {

            const filteredData = dataWagons.filter(item =>
                    item.type.toLowerCase().includes(searchText.toLowerCase())
                // Add more conditions for additional fields as needed
            );
            await  setDataWagonsSE(filteredData)
            setIsSearch(true);
        }else {
            setIsSearch(false)
            getWagonsList()
        }
    };

    return(
        <Container>
            <InputContainer>

                <button

                    style={{height:'50px',width:'70px',borderRadius:'5px'}} className={stylesTBUT.tripButton}
                >
                    <Icon >
                        <FiSearch />
                    </Icon>
                </button>

                <Input onChange={handleFilter} type="text" placeholder="البحث عن عربة"
                />

            </InputContainer>

            <CreateModalContainer>

                <CreateWagons getNewWagonsData={getNewWagonsData}/>

            </CreateModalContainer>
            <TableWagons
                getNewWagonsData={getNewWagonsData}
                Col1={"النوع"}
                Col2={"الموديل"}
                Col3={"عدد المقاعد"}
                Col4={"رقم العربة"}
                Col5={"ملاحظات"}
                // data={isSearch?data.length<=0?"لا بوجد بيانات متطابقة":data:dataUser}
                data={!isSearch?dataWagons:dataWagonsSE}

            />
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
export default Wagons