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
const StyledHeader = styled.header<IHeader>`  // changed from button to header for semantic HTML, adjust as needed
  width: 100%;  // Take full viewport width
  max-width: 43rem;  // Match the same max-width as other components
  margin: 0 auto;  // Center the header within the max-width
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  border: ${({ border }) => border};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid ${theme.colors.Color_Gray_4};
  z-index: 5;
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
