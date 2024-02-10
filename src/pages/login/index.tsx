import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IcGoogleLogin, IcHUFSMEALS } from "../../../public/assets/images/icons";

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


// const Login: React.FC = () => {
//   const handleGoogleLogin = async () => {
//     try {
//       // 백엔드에서 제공하는 구글 로그인 URL을 받아옵니다.
//       const response = await fetch('https://port-0-hufsmeals-1efqtf2dlrgj6rlh.sel5.cloudtype.app/accounts/signin/');
//       const data = await response.json();
//       // 백엔드에서 제공한 URL로 리다이렉트합니다.
//       if (data && data.data) {
//         window.location.href = data.data;
//       }
//     } catch (error) {
//       console.error('Error during Google login:', error);
//     }
//   };

//   return (
//     <NoticeLogContainer>
//       <Header />
//       <SloganContainer>
//         <IcHUFSMEALS />
//         <SloganText>Meals for HUFS</SloganText>
//       </SloganContainer>
//       <GoogleLoginContainer>
//         <button onClick={handleGoogleLogin} style={{ background: 'none', border: 'none' }}>
//           <IcGoogleLogin />
//         </button>
//       </GoogleLoginContainer>
//       <Footer />
//     </NoticeLogContainer>
//   );
// };

// export default Login;

const Login: React.FC = () => {
  const handleGoogleLogin = () => {
    // 구글 로그인 페이지로 리다이렉트합니다.
    const googleLoginUrl = "https://accounts.google.com/o/oauth2/v2/auth?client_id=694730838559-u7slukjsulo3h4r0qhjln4ah8lnjmftt.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:5173/loginLoading&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
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
        <button onClick={handleGoogleLogin} style={{ background: 'none', border: 'none' }}>
          <IcGoogleLogin />
        </button>
      </GoogleLoginContainer>
      <Footer />
    </NoticeLogContainer>
  );
};

export default Login;
