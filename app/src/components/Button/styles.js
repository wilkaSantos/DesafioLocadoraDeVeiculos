import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
  width: 100%;
  padding: 14px 10px;

  border: none;
  border-radius: 5px;

  letter-spacing: 1px;
  font-weight: 600;
  background: ${theme.colors.yellow_login};
  color: ${theme.colors.black};
`;