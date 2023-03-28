import styled from "styled-components"

export const StyledLoginOrganism = styled.div`
    width:400px;
    height:500px;
    padding:40px;

    border: 0px solid grey;
    border-radius:10px;
    background-color:white;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
`

export const StyledHrr = styled.span`
    display:flex;
    align-items: center;

    width:100%;
    margin-bottom:20px;

    font-size: 12px;
    color: rgba(0, 0, 0, 0.70);
    &::before,
    &::after {
        content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 8px;
    }   
`