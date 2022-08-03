import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  opacity: 1;
  padding: 4px 0px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;
  //pointer-events: none;
  position: absolute;
  background-color: white;
  transform: translateY(10px);
  width: 250px;
  right: 0px;
  z-index: 9999999;
  //display: block;
  //position: absolute;
  transition: all 0.3s ease;
`;

export const MenuItem = styled.button`
  outline: none;
  border: none;
  color: rgb(79, 43, 45);
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  z-index: 99;
  width: 100%;
  background-color: white;

  &:disabled,
  &:disabled:hover,
  &:disabled:active,
  &:disabled:hover:active {
    color: #d4d4d4;
    cursor: not-allowed;
  }

  &:enabled:hover,
  &:enabled:active,
  &:enabled:hover:active {
    background-color: #e9e9e9;
    outline: none;
  }
`;

export const MenuItemLabel = styled.span`
  margin-left: 10px;
`;