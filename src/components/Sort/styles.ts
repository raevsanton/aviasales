import styled, { css } from 'styled-components';

export const SortButtonsWrapper = styled.div`
  display: flex;
  height: 50px;
`;
export const SortButtonOne = styled.button<{ sort: boolean }>`
  width: 252px;
  text-align: center;
  padding: 15px 0;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease-in-out;
  font: 12px OpenSansSemiBold, sans-serif;
  text-transform: uppercase;
  border: ${({ sort }) => (sort ? '1px' : '0px')} solid #dfe5ec;
  color: ${({ sort }) => (sort ? '#4A4A4A' : '#FFFFFF')};
  background: ${({ sort }) => (sort ? '#FFFFFF' : '#2196F3')};
  ${({ sort }) => sort &&
    css`
      &:hover {
        background-color: #e5f9ff;
        color: #2196f3;
        border: 1px #2196f3 solid;
      }
  `}
`;
export const SortButtonTwo = styled.button<{ sort: boolean }>`
  width: 252px;
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease-in-out;
  font: 12px OpenSansSemiBold, sans-serif;
  text-transform: uppercase;
  border-radius: 0 10px 10px 0;
  border: ${({ sort }) => (sort ? '0px' : '1px')} solid #dfe5ec;
  color: ${({ sort }) => (sort ? '#FFFFFF' : '#4A4A4A')};
  background: ${({ sort }) => (sort ? '#2196F3' : '#FFFFFF')};
  ${({ sort }) => sort
    ? css`
      &:hover {
        color: #fff;
      }
    `
    : css`
      &:hover {
        background-color: #e5f9ff;
        color: #2196f3;
        border: 1px #2196f3 solid;
      }
  `}
`;
