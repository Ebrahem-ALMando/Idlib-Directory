import React from "react";
import styled from "styled-components";

function Badge(props,{
    content,
    clean = true,
    glow = false,
    paid = false,
    late = false,
}) {
    return (
        <Div className={props.className} clean={clean} glow={glow} paid={paid} late={late}>

            {props.text}

        </Div>
    );
}

const Div = styled.span`
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;


    &:hover {
        color: #394077;

        cursor: pointer;
    }

    ${({clean}) =>
            clean &&
            `
    
     border: 0.05rem solid #ded8f4;
     color:white;
      &:hover {
           background-color:white;
    
     `}
    ${({glow}) =>
            glow &&
            `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
          background-color: rgba(109, 134, 245, 0.192);
        color:#2f233d;
    `}
    ${({paid}) =>
            paid &&
            `
        background-color:#70e00041;
        color:#ded8f4;
    `}

    ${({late}) =>
            late &&
            `
        background-color:#ff595e41;
        color:#ff595e;
    `}
`;
export default Badge;


