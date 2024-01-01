import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IcBoo } from "../../assets/images/icons";
import { Link } from "react-router-dom";

  
const MyPageLogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProfileImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 120px;
`;
// const ProfileImage = styled.img`
//   margin-top: 120px;
//   width: 140px;
//   height: auto;
// `;

const UserName = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const MyPageBlockContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  width: 90%;
`;
const MyPageLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
  width: 100%;
  display: flex;
`;

const MyPageBlock = styled.div`
  text-align: center;
  padding: 20px;
  margin-bottom : 30px;
  font-size: 14px;
  color: #666;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  align-items: center;
`;

const CocoLeft = styled.div`
  text-align: center;
  padding: 20px;
  margin-bottom : 20px;
  font-size: 14px;
  color: #666;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CocoCount = styled.div`
  margin-top: 0.5rem;
  color: green;
  font-size: 1.6rem;
  font-weight: bold;
`;
const FriendCode = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.Color_Oasis_Blue};;
  font-size: 1.6rem;
  font-weight: bold;
`;
  
const MyPage: React.FC = () => {
    return (
    <MyPageLogContainer>
      <Header />
      <ProfileImageContainer>
        <IcBoo style={{ width: '100px', height: '100px' }} />
      </ProfileImageContainer>
      <UserName>김멋사</UserName>
      <MyPageBlockContainer>
        <MyPageLink to="/coconut-log">
            <CocoLeft>
                보유한 코코넛:
                <CocoCount>{5000} 🥥</CocoCount>
            </CocoLeft>
        </MyPageLink>
        <MyPageBlock>
            친구 초대코드: 
            <FriendCode>{'MEOTSA119'}</FriendCode>
        </MyPageBlock>
      </MyPageBlockContainer>
      <Footer />
    </MyPageLogContainer>
  );
};

export default MyPage;
