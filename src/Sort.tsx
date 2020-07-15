import React, { useState } from "react";
import styled from "styled-components";

const SortButtonsWrapper = styled.div`
    display: flex;
    width: 503px;
    height: 50px;
`
const SortButtonOne = styled.div<{ active: boolean }>`
    width: 252px;
    text-align: center;
    padding: 15px 0;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    border: ${(props) => (props.active ? '1px' : '0px')} solid #DFE5EC;
    color: ${(props) => (props.active ? '#4A4A4A' : '#FFFFFF')};
    background: ${(props) => (props.active ? '#FFFFFF' : '#2196F3')};
`
const SortButtonTwo = styled.div<{ active: boolean }>`
    width: 252px;
    text-align: center;
    padding: 15px 0;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    border: ${(props) => (props.active ? '0px' : '1px')} solid #DFE5EC;
    color: ${(props) => (props.active ? '#FFFFFF' : '#4A4A4A')};
    background: ${(props) => (props.active ? '#2196F3' : '#FFFFFF')};
`
function Sort() {
    const [active, setActive] = useState(false);
    return (
        <SortButtonsWrapper>
            <SortButtonOne 
                active={active}
                onClick={() => setActive(!active)}
            >Самый дешевый</SortButtonOne>
            <SortButtonTwo
                active={active}
                onClick={() => setActive(!active)}
            >Самый быстрый</SortButtonTwo>
        </SortButtonsWrapper>
    )
}

export default Sort;