import React, {useEffect} from "react";
import styled from "styled-components";

import {Link} from "react-router-dom";

function LastAddItem(props) {

    return (
        <YourMembers>
            {props.data.map((member,index)=>{
                return(
                    <React.Fragment key={index}>
                        <Member>
                            <Avatar>
                                <img src={`/assets/img/${props.nameImg}`} alt="" />
                            </Avatar>
                            <Detail>
                                <Title>{props.setion==='D'?member.full_name:member.type}</Title>
                                <SubTitle>{`${props.setion==='D'?"الخبرة :"+member.experience+" عام " :" رقم العربة: " +member.car_number} `}</SubTitle>
                            </Detail>
                        </Member>
                    </React.Fragment>)
            })}
            <Link id="lin"
                  className="text-decoration-none link-light" to={props.link}
            onClick={()=>{
                localStorage.setItem('activeLink',props.link);

            }

            }
            >
                <AllMembers>{props.viewItem}</AllMembers>
            </Link>
        </YourMembers>
    );
}

const YourMembers = styled.div`
  height: 70%;
  background:linear-gradient(90deg, #7c33d3,#254eb1);
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
  rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 15px 20px 10px #7c33d3;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    margin-left: 50px;
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 400;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 10px;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllMembers = styled.h5`
  text-align: end;
  color:#e0d8f5;
  cursor: pointer;
`;

export default LastAddItem;
