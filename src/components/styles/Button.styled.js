import styled from "styled-components";

export const PrimaryButton = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scaleX(0.98);
    opacity: 0.9;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  } ;
`;
