import styled from "styled-components";
import { theme } from "../styles/theme";
import { LogoHeader } from "../assets/images/logo";

interface IHeader {
  width?: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: string | number;
  text?: string;
  padding?: string;
  fontSize?: string;
  disabled?: boolean;
  border?: string | number;
  newAlert?: boolean;
}

const StyledHeader = styled.button<IHeader>`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  padding: ${({ padding }) => padding};
  text: ${({ text }) => text};
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  :disabled {
    background-color: ${theme.colors.Color_Orange.heavy};
    color: ${theme.colors.Color_Gray_2};
    cursor: not-allowed;
  }
  border: ${({ border }) => border};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid ${theme.colors.Color_Gray_4};
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;


const Header = ({
  width = "100%",
  backgroundColor = theme.colors.Color_White,
  padding = "20px 20px",
  disabled,
  border = "0px",
}: IHeader) => {
  return (
    <StyledHeader
      width={width}
      backgroundColor={backgroundColor}
      padding={padding}
      disabled={disabled}
      border={border}
    >
      <LogoContainer>
        <LogoHeader />
      </LogoContainer>
    </StyledHeader>
  );
};

export default Header;
