import styled from "styled-components";
import { theme } from "../styles/theme";
import { IcMap, IcMypage, IcNotice } from "../assets/images/icons";
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

const StyledFooter = styled.button<IFooter>`
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
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 2px solid ${theme.colors.Color_Gray_4};
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
