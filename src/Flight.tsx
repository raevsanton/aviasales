import React from "react";
import styled from "styled-components";
import logoCompany from "./assets/images/S7 Logo.png";

const FlightStyle = styled.div`
    display: flex;
    align-items: flex-end;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px 0px 20px 20px;
    &:last-child {
        margin-bottom: 120px;
    }
`
const Price = styled.h2`
    font-size: 24px;
    color: #2196F3;
    margin-bottom: 20px;
`
const FlightColumn = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-right: 75px;
    &:last-child {
        margin-right: 0;
    }
`
const Origin = styled.p`
    color: #A0B0B9;
    line-height: 21px;
`
const Destination = styled.p`
    color: #A0B0B9;
    line-height: 21px;
`
const FlightWrapper = styled.div`
    display: flex;
`
const Dash = styled.div`
    color: #A0B0B9;
`
const StartTime = styled.p`
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
    text-transform: lowercase;
`
const EndTime = styled.p`
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
`
const LogoCompany = styled.div`
    margin-bottom: 20px;
`
function Flight() {
    return (
        <FlightStyle>
            <FlightColumn>
                <Price>13 200 Р</Price>
                <FlightWrapper>
                    <Origin>MOW</Origin>
                    <Dash>&nbsp;–&nbsp;</Dash>
                    <Destination>HKT</Destination>
                </FlightWrapper>
                <FlightWrapper>
                    <StartTime>10:45</StartTime>
                    <Dash>&nbsp;–&nbsp;</Dash>
                    <EndTime>08:00</EndTime>
                </FlightWrapper>
                <FlightWrapper>
                    <Origin>MOW</Origin>
                    <Dash>&nbsp;–&nbsp;</Dash>
                    <Destination>HKT</Destination>
                </FlightWrapper>
                <FlightWrapper>
                    <StartTime>11:20</StartTime>
                    <Dash>&nbsp;–&nbsp;</Dash>
                    <EndTime>00:50</EndTime>
                </FlightWrapper>
            </FlightColumn>
            <FlightColumn>
                <FlightWrapper>
                    <Origin>В пути</Origin>
                </FlightWrapper>
                <FlightWrapper>
                    <StartTime>21ч&nbsp;</StartTime>
                    <StartTime>15м</StartTime>
                </FlightWrapper>
                <FlightWrapper>
                    <Origin>В пути</Origin>
                </FlightWrapper>
                <FlightWrapper>
                    <StartTime>13ч&nbsp;</StartTime>
                    <StartTime>30м</StartTime>
                </FlightWrapper>
            </FlightColumn>
            <FlightColumn>
                <LogoCompany>
                    <img src={logoCompany} alt="company-logo"/> 
                </LogoCompany>
                <FlightWrapper>
                    <Origin>2 пересадки</Origin>
                </FlightWrapper>
                <FlightWrapper>
                    <EndTime>HKG,&nbsp;</EndTime>
                    <EndTime>JNB</EndTime>
                </FlightWrapper>
                <FlightWrapper>
                    <Origin>1 пересадка</Origin>
                </FlightWrapper>
                <FlightWrapper>
                    <EndTime>HKG</EndTime>
                </FlightWrapper>
            </FlightColumn>
        </FlightStyle>
    )
}

export default Flight;