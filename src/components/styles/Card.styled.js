import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};
  & > div {
    flex: 1;
  }
  img {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
