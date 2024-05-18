import React from "react";
import styled from "styled-components";
/*import Badge from "./Badge";*/
/*import { cardShadow, hoverEffect, themeColor } from "../../utils";*/
import {Link} from "react-router-dom";
import Badge from "./Badge";
import  stylesBD from './Badge.module.css'
function Info(props) {
    return (
        <InfoCard>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>{props.countSectionOne}</Digit>
                        <InfoContainer>
                            <Title>{props.titleSectionOne}</Title>
                            <SubTitle>{props.timeSectionOne}</SubTitle>
                        </InfoContainer>
                    </Row>
                </CardContent>

            </Card>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>{props.countSectionTow}</Digit>
                        <InfoContainer>
                            <Title>{props.titleSectionTow}</Title>
                            <SubTitle>{props.timeSectionTow}</SubTitle>
                        </InfoContainer>
                    </Row>
                    <Row justify>
                   {/*     <Link to={props.url}   className="text-decoration-none link-light">*/}
                            <Badge
                                className={`${stylesBD.btnInfoBadge} ${stylesBD.btnInfoBadgeAdmin}`}
                                text={props.badgeOne}  />

                     {/*   </Link>*/}
                        {/*<Link to={props.url}   className="text-decoration-none link-light">*/}

                            <Badge
                                className={stylesBD.btnInfoBadge}

                                text={props.badgeTow}  />
           {/*             </Link>*/}
                    </Row>
                </CardContent>
            </Card>

        </InfoCard>
    );
}

const InfoCard = styled.div`
  height: 100%;
  width: 17rem;
    background:linear-gradient(90deg, #41C9E2,#008DDA);
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
  rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 15px 20px 10px #008DDA;
 
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const Card = styled.div`
    background-color: #ffffff;
    border-radius: 1rem;
    margin-bottom: 1rem;
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
const Digit = styled.div`
    background:linear-gradient(90deg, #41C9E2,#008DDA);
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
 
`;
const InfoContainer = styled.div`
  margin-right: 0.7rem;
`;
const Title = styled.h3`
    color: #0068ff;
`;
const SubTitle = styled.h5`
    color: #0068ff;;
  font-weight: normal;
`;

export default Info;
