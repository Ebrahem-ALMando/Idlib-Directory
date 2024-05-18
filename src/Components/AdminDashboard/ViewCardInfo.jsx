import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";


function ViewCardInfo(props) {

    return (
        <Card  >
            <CardContent>
                <Chart>
                    <IoStatsChart />
                </Chart>
                <CardText>
                    {props.title}
                </CardText>
                <Number>
                    {props.count}
                </Number>
                <Increase>
                    {props.increment}
                    +
                    {props.time}
                </Increase>
            </CardContent>
        </Card>
    );
}
const Card = styled.div`
  height: 100%;
  width: 14rem;
    background:linear-gradient(90deg, #41C9E2,#008DDA);
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow:#008DDA 0px 22px 70px 4px
   
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const CardText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Number = styled.h2`
  text-align: center;
`;

const Increase = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default ViewCardInfo;
