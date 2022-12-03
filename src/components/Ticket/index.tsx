import React from 'react';
import { ticketPrice, flightTime, flightDuration, stopsTitle, stopsView } from '../../utils/formatting';
import { TicketFormat } from './types';
import {
  Dash,
  EmptyElement,
  Text,
  LogoCompany,
  Price,
  StartTime,
  Column,
  TicketWrapper,
  TextGray,
  Stops,
  Box,
} from './styles';

export const Ticket: React.FC<TicketFormat> = ({
  price,
  carrier,
  originFrom,
  destinationFrom,
  dateOriginFrom,
  stopsFrom,
  durationFrom,
  originTo,
  destinationTo,
  dateOriginTo,
  stopsTo,
  durationTo,
  dateDestinationFrom,
  dateDestinationTo,
}) => (
  <Box>
    <Column>
      <Price>{ticketPrice(price)} ₽</Price>
      <TicketWrapper>
        <TextGray>{originFrom}</TextGray>
        <Dash isGray>&nbsp;–&nbsp;</Dash>
        <TextGray>{destinationFrom}</TextGray>
      </TicketWrapper>
      <TicketWrapper>
        <StartTime>{flightTime(dateOriginFrom)}</StartTime>
        <Dash>&nbsp;–&nbsp;</Dash>
        <Text>{flightTime(dateDestinationFrom)}</Text>
      </TicketWrapper>
      <TicketWrapper>
        <TextGray>{originTo}</TextGray>
        <Dash isGray>&nbsp;–&nbsp;</Dash>
        <TextGray>{destinationTo}</TextGray>
      </TicketWrapper>
      <TicketWrapper>
        <StartTime>{flightTime(dateOriginTo)}</StartTime>
        <Dash>&nbsp;–&nbsp;</Dash>
        <Text>{flightTime(dateDestinationTo)}</Text>
      </TicketWrapper>
    </Column>
    <Column>
      <EmptyElement/>
      <TicketWrapper>
        <TextGray>Duration</TextGray>
      </TicketWrapper>
      <TicketWrapper>
        <StartTime>{flightDuration(durationFrom)}</StartTime>
      </TicketWrapper>
      <TicketWrapper>
        <TextGray>Duration</TextGray>
      </TicketWrapper>
      <TicketWrapper>
        <StartTime>{flightDuration(durationTo)}</StartTime>
      </TicketWrapper>
    </Column>
    <Column>
      <LogoCompany>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="company-logo" />
      </LogoCompany>
      <TicketWrapper>
        <TextGray>{stopsTitle(stopsFrom)}</TextGray>
      </TicketWrapper>
      <TicketWrapper>
        <Stops>{stopsView(stopsFrom)}</Stops>
      </TicketWrapper>
      <TicketWrapper>
        <TextGray>{stopsTitle(stopsTo)}</TextGray>
      </TicketWrapper>
      <Stops>{stopsView(stopsTo)}</Stops>
    </Column>
  </Box>
);
