import styled from "styled-components";
import { theme } from "../styles/theme";
import { IcMap, IcMypage, IcNotice } from "../../public/assets/images/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleMyPageClick = () => {
    // 로컬 스토리지에서 로그인 상태 확인
    const isLoggedIn = localStorage.getItem('accessToken');

    // 로그인 상태에 따라 마이페이지 또는 로그인 페이지로 리다이렉트
    if (isLoggedIn) {
      navigate('/mypage');
    } else {
      navigate('/login');
    }
  };
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
      <button onClick={handleMyPageClick} style={{ background: 'none', border: 'none' }}>
        <IcMypage />
      </button>
    </StyledFooter>
  );
};

export default Footer;
