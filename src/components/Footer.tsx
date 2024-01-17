import styled from "styled-components";
import { theme } from "../styles/theme";
import { IcMap, IcMypage, IcNotice } from "../../public/assets/images/icons";
import { Link } from "react-router-dom";
interface IFooter {
  width?: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: string | number;
  text?: string;
  padding?: string;
  fontSize?: string;
  disabled?: boolean;
  border?: string | number;
}
const StyledFooter = styled.footer<IFooter>`  // Assuming footer makes more semantic sense
  width: 100%;  // Take full viewport width
  max-width: 43rem;  // Match the same max-width as other components
  margin-left: auto;  // Center the footer within the max-width
  margin-right: auto;  // Center the footer within the max-width
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  border: ${({ border }) => border};
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 2px solid ${theme.colors.Color_Gray_4};
  z-index: 5;

  :disabled {
    background-color: ${theme.colors.Color_Orange.heavy};
    color: ${theme.colors.Color_Gray_2};
    cursor: not-allowed;
  }
`;
const Footer = ({
  width = "100%",
  backgroundColor = theme.colors.Color_White,
  padding = "5px 20px",
  disabled,
  border = "0px",
}: IFooter) => {
  return (
    <StyledFooter
      width={width}
      backgroundColor={backgroundColor}
      padding={padding}
      disabled={disabled}
      border={border}
    >
      <Link to="/notice">
        <IcNotice />
      </Link>
      <Link to="/">
        <IcMap />
      </Link>
      <Link to="/mypage">
        <IcMypage />
      </Link>
    </StyledFooter>
  );
};

export default Footer;
