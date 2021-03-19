import React from "react";
import {
    Dash,
    EmptyElement,
    EndTime,
    LogoCompany,
    Price,
    StartTime,
    TicketColumn,
    TicketStyle,
    TicketWrapper,
    TextGray,
    WrapperStops
} from "./styles";
import {TicketDestruct} from "../../types";

const Ticket: React.FC<TicketDestruct> = ({
    price,
    carrier,
    originFrom,
    destinationFrom,
    dateFrom,
    stopsFrom,
    durationFrom,
    originTo,
    destinationTo,
    dateTo,
    stopsTo,
    durationTo
}) => {
    //Price
    const priceTicket = price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
    //Stops
    let countStopsFrom = `${stopsFrom.length} stops`;
    let countStopsTo = `${stopsTo.length} stops`;
    if (stopsFrom.length === 0) {
        countStopsFrom = 'Stop';
    }
    if (stopsTo.length === 0) {
        countStopsTo = 'Stop';
    }
    if (stopsFrom.length === 1) {
        countStopsFrom = '1 stop';
    }
    if (stopsTo.length === 1) {
        countStopsTo = '1 stop';
    }
    //Duration
    const durationResult = (time: number) => {
        const hours = (time / 60);
        const hoursResult = Math.floor(hours);
        const minutes = (hours - hoursResult) * 60;
        const minutesResult = Math.round(minutes);
        return `${hoursResult}h ${minutesResult}m`;
    };
    const durationTimeFrom = durationResult(durationFrom);
    const durationTimeTo = durationResult(durationTo);
    //Dates
    const timeResult = (date: Date) => {
        const dateObj = new Date(date);
        const minutes = dateObj.getMinutes().toString();
        const hours = dateObj.getHours().toString();
        const minutesResult = minutes.length === 1 ? `0${minutes}` : `${minutes}`;
        const hoursResult = hours.length === 1 ? `0${hours}` : `${hours}`;
        return `${hoursResult}:${minutesResult}`;
    };
    const dateFullFrom = new Date(dateFrom);
    const dateFullTo = new Date(dateTo);
    dateFullFrom.setMinutes(dateFullFrom.getMinutes() + durationFrom);
    dateFullTo.setMinutes(dateFullTo.getMinutes() + durationTo);

    const timeFromFirstFlight = timeResult(dateFrom);
    const timeToFirstFlight = timeResult(dateFullFrom);
    const timeFromSecondFlight = timeResult(dateTo);
    const timeToSecondFlight = timeResult(dateFullTo);
    return (
        <TicketStyle>
            <TicketColumn>
                <Price>{priceTicket} ₽</Price>
                <TicketWrapper>
                    <TextGray>{originFrom}</TextGray>
                    <Dash>&nbsp;–&nbsp;</Dash>
                    <TextGray>{destinationFrom}</TextGray>
                </TicketWrapper>
                <TicketWrapper>
                    <StartTime>{timeFromFirstFlight}</StartTime>
                    <Dash>&nbsp;–&nbsp;</Dash>
                    <EndTime>{timeToFirstFlight}</EndTime>
                </TicketWrapper>
                <TicketWrapper>
                    <TextGray>{originTo}</TextGray>
                    <Dash>&nbsp;–&nbsp;</Dash>
                    <TextGray>{destinationTo}</TextGray>
                </TicketWrapper>
                <TicketWrapper>
                    <StartTime>{timeFromSecondFlight}</StartTime>
                    <Dash>&nbsp;–&nbsp;</Dash>
                    <EndTime>{timeToSecondFlight}</EndTime>
                </TicketWrapper>
            </TicketColumn>
            <TicketColumn>
                <EmptyElement/>
                <TicketWrapper>
                    <TextGray>Duration</TextGray>
                </TicketWrapper>
                <TicketWrapper>
                    <StartTime>{durationTimeFrom}</StartTime>
                </TicketWrapper>
                <TicketWrapper>
                    <TextGray>Duration</TextGray>
                </TicketWrapper>
                <TicketWrapper>
                    <StartTime>{durationTimeTo}</StartTime>
                </TicketWrapper>
            </TicketColumn>
            <TicketColumn>
                <LogoCompany>
                    <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="company-logo"/>
                </LogoCompany>
                <TicketWrapper>
                    <TextGray>{countStopsFrom}</TextGray>
                </TicketWrapper>
                <TicketWrapper>
                    <WrapperStops>
                        {stopsFrom.length === 0
                            ? 'Non-Stop'
                            : stopsFrom.map((stop: string, index: number) => (
                                <EndTime key={index}>
                                    {`${stop}${stopsFrom[index + 1] ? ', ' : ''}`}
                                </EndTime>
                        ))}
                    </WrapperStops>
                </TicketWrapper>
                <TicketWrapper>
                    <TextGray>{countStopsTo}</TextGray>
                </TicketWrapper>
                <TicketWrapper>
                    {stopsTo.length === 0
                        ? 'Non-Stop'
                        : stopsTo.map((stop: string, index: number) => (
                        <EndTime key={index}>
                            {`${stop}${stopsTo[index + 1] ? ', ' : ''}`}
                        </EndTime>
                    ))}
                </TicketWrapper>
            </TicketColumn>
        </TicketStyle>
    )
}

export default Ticket;
