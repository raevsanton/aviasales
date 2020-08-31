import styled, { css } from 'styled-components';

export const SortButtonsWrapper = styled.div`
    display: flex;
    height: 50px;
`
export const SortButtonOne = styled.button<{ sort: boolean }>`
    width: 252px;
    text-align: center;
    padding: 15px 0;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    outline: none;
    transition: .3s ease-in-out;
    font: 12px OpenSansSemiBold, sans-serif; 
    text-transform: uppercase;
    border: ${props => (props.sort ? '1px' : '0px')} solid #DFE5EC;
    color: ${props => (props.sort ? '#4A4A4A' : '#FFFFFF')};
    background: ${props => (props.sort ? '#FFFFFF' : '#2196F3')};
    ${props => props.sort && 
        css`
        &:hover {
            background-color: #e5f9ff;
            color: #2196F3;
            border: 1px #2196F3 solid;
        }` 
    }
`
export const SortButtonTwo = styled.button<{sort: boolean}>`
    width: 252px;
    text-align: center;
    padding: 15px 0;
    cursor: pointer;
    outline: none;
    transition: .3s ease-in-out;
    font: 12px OpenSansSemiBold, sans-serif; 
    text-transform: uppercase;
    border-radius: 0 5px 5px 0;
    border: ${(props) => (props.sort ? '0px' : '1px')} solid #DFE5EC;
    color: ${(props) => (props.sort ? '#FFFFFF' : '#4A4A4A')};
    background: ${(props) => (props.sort ? '#2196F3' : '#FFFFFF')};
    ${props => props.sort 
        ? css`
            &:hover { 
                color: #fff;
            }` 
        : css`
            &:hover {
                background-color: #e5f9ff;
                color: #2196F3;
                border: 1px #2196F3 solid;
            }`
    }
`