import styled from "styled-components";

export const FilterStyle = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 232px;
    height: 252px;
    padding: 20px;
    margin-right: 20px;
`
export const FilterH2 = styled.h2`
    margin-bottom: 20px;
`
export const FilterItem = styled.div`
    width: 100%;
    height: 40px;
    padding-right: 40px;
    margin-left: -20px;
    cursor: pointer;
    &:hover {
        background-color: #F1FCFF;
    }
`
export const Label = styled.label`
    display: block;
    position: relative;
    height: 100%;
    width: 90%;
    padding-left: 55px;
    padding-top: 10px;
    cursor: pointer;
    user-select: none;
    text-transform: none;
    font: 13px OpenSansRegular, sans-serif;
    & input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ span {
            background-color: #FFFFFF;
            border: 1px solid #2196F3;
        }
        &:checked ~ span:after {
            display: block;
        }
    }
    &:hover input ~ span {
        background-color: #F1FCFF;
    }
    & span:after {
        left: 6px;
        top: 2px;
        width: 4px;
        height: 10px;
        border: solid #2196F3;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`
export const Input = styled.input.attrs({ type: 'checkbox' })<any>`
`
export const Span = styled.span`
    position: absolute;
    top: 10px;
    left: 20px;
    height: 20px;
    width: 20px;
    background-color: #FFFFFF;
    border: 1px solid #9ABBCE;
    box-sizing: border-box;
    border-radius: 2px;
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`
