import styled from "styled-components";

export const StyledForm = styled.form`
    width:100%;
    margin-top:40px;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;

    position:relative;
`

export const EmptySpace = styled.div`
    height: 25px;
`

export const InputWithErroMessageDiv = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`


export const StyledRowDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    width:100%;
`;

export const StyledSelect = styled.select`
    width:100%;
    height: 50px;
    border: 0px;
    border-radius: 5px;
    background-color: #F3F3F3;

    option{
        height:10px;
    }
`;

export const StyledSelectDiv = styled.div`
    margin-left:50px;
    width: 50%; 
`;