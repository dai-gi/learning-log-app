import styled from "styled-components";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{ children }</SButton>
}

const SButton = styled.button`
  background-color: #F52727;
  color: #fff;
  padding: 6px 24px;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`