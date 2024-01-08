import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IcGoogleLogin, IcHUFSMEALS } from "../../assets/images/icons";

const NoticeLogContainer = styled.div`
  display: flex;
  flex-direction: column; // 컨테이너의 방향을 수직으로 설정
  align-items: center; // 수직 방향의 중앙 정렬
  justify-content: center; // 가로 방향의 중앙 정렬
  height: 100vh; // 화면의 전체 높이를 사용
  text-align: center; // 텍스트 중앙 정렬
`;

const SloganContainer = styled.div`
  margin-top: 20px; // 간격 조정
  display: flex;
  flex-direction: column;
  align-items: center; // 아이콘과 텍스트를 중앙 정렬
`;

const GoogleLoginContainer = styled.div`
  margin-top: 250px; // 간격 조정
  display: flex;
  justify-content: center;
`;

const SloganText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const Login: React.FC = () => {
    const handleGoogleLogin = () => {
      // 백엔드에서 제공하는 구글 로그인 URL로 리다이렉트합니다.
      // 예시 URL은 실제 백엔드에서 제공하는 엔드포인트로 대체해야 합니다.
      const googleLoginUrl = "http://yourbackenddomain.com/auth/google";
      window.location.href = googleLoginUrl;
    };
        return (
          <NoticeLogContainer>
            <Header />
            <SloganContainer>
              <IcHUFSMEALS />
              <SloganText>Meals for HUFS</SloganText>
            </SloganContainer>
            <GoogleLoginContainer>
              {/* SVG 아이콘을 클릭 가능한 버튼으로 만듭니다. */}
              <button onClick={handleGoogleLogin} style={{ background: 'none', border: 'none' }}>
                <IcGoogleLogin />
              </button>
            </GoogleLoginContainer>
            <Footer />
          </NoticeLogContainer>
        );
      };
      
      export default Login;