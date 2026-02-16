import styled from "styled-components";

export const Form = styled.form`
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;

export const Form__login = styled.input`
    display: block;
    width: 100%;
    margin: 1em 0;
    height: 32px;
    font-size: 21px;
    color: rgb(90, 90, 90);
`;

export const Login__btn = styled.button`
    height: 32px;
    width: 60%;
    font-size: 21px;
    border: none;
    &:hover{
    box-shadow: 0px 2px 5px 2px rgba(95, 95, 95, 0.514);
}
`;

