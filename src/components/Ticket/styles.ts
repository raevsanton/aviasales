import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 0px 20px 20px;
  &:last-child {
    margin-bottom: 120px;
  }
`
export const Price = styled.h2`
  font-size: 24px;
  color: #2196F3;
  margin-bottom: 20px;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 75px;
  &:last-child {
    margin-right: 0;
  }
`
export const TextGray = styled.p`
  color: #A0B0B9;
  line-height: 21px;
`
export const TicketWrapper = styled.div`
  display: flex;
`
export const Dash = styled.div<{ isGray?: boolean }>`
color: ${({ isGray }) => (isGray && '#A0B0B9')};
`

export const StartTime = styled.p`
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 10px;
  text-transform: lowercase;
`
export const Text = styled.p`
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 10px;
`
export const LogoCompany = styled.div`
  margin-bottom: 14px;
`
export const Stops = styled.div`
  font-size: 14px;
  height: 30px;
  display: flex;
  width: 100%;
`
export const EmptyElement = styled.div`
  height: 53px;
`
