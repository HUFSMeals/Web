import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { theme } from "../styles/theme";
import { RateStars } from "../pages/review/rate";

interface Shop {
  id?: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  phone: string;
  category: string;
  opening_hours: string;
  review_cnt: number;
  score_avg: number;
}


interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  text2?: string;
  action?: string;
  onAction?: () => void;
  shop: Shop;
}


export const ContentWrapper = styled.section`
  width: 100%;
  padding-left: 2.3rem;
  padding-right: 2.3rem;
`;

export const ShopModalButtonSection = styled(ContentWrapper)`
  height: 23%;
  padding-left: 0rem;
  padding-right: 0rem;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;
const ShopModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShopModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ShopModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const ReviewRateDate = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
`;
const ReviewDate = styled.div`
  font-size: 14px;
  color: #94989B;
  margin-top: 4.1px;
`;

export const ShopModalTitle = styled.p`
  color: ${({ theme }) => theme.colors.Color_Gray_Black};
  text-align: left;
  line-height: 5.3rem;
  letter-spacing: -0.03em;
  font-size: large;
  font-weight: bold;
`;

export const ShopModalBody = styled.p`
  ${({ theme }) => theme.fonts.Body1_Pretendard_Medium_16}
  color: ${({ theme }) => theme.colors.Color_Gray_Black};
`;

const InfoWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Icon = styled.img`
  width: 12px; // 아이콘 크기 조정
  height: 12px;
  margin-right: 5px; // 아이콘과 텍스트 사이의 간격
  margin-bottom: 5px; // 아이콘과 텍스트 사이의 간격
`;

// ShopModal 컴포넌트 내용 수정
const ShopModal: React.FC<ShopModalProps> = ({
  isOpen,
  onClose,
  text2,
  action,
  onAction,
  shop
}) => {
  const { name, address, phone, review_cnt, score_avg } = shop;

  return (
    <ShopModalWrapper>
      {isOpen && (
        <ShopModalOverlay>
          <ShopModalContent>
            <ShopModalTitle>{name}</ShopModalTitle>
            <InfoWithIcon>
              <Icon src={'/assets/images/icons/IcLocation.svg'} alt="Location" width="15px"/>
              <ShopModalBody>{address}</ShopModalBody>
            </InfoWithIcon>
            <InfoWithIcon>
              <Icon src={'/assets/images/icons/IcCall.svg'} alt="Call" />
              <ShopModalBody>{phone}</ShopModalBody>
            </InfoWithIcon>
            {text2 && <ShopModalBody>{text2}</ShopModalBody>}
            <ReviewRateDate>
                <RateStars score={score_avg} />
                <ReviewDate>ㆍ리뷰 {review_cnt}</ReviewDate>
            </ReviewRateDate>
            <ShopModalButtonSection>
              {action && onAction && (
                <Button
                  backgroundColor={theme.colors.Color_White}
                  color={"#85B6FF"}
                  padding="0rem"
                  width="100%"
                  onClick={onAction}
                  fontSize="1.8rem"
                >
                  {action}
                </Button>
              )}
              <Button
                backgroundColor={theme.colors.Color_White}
                color={theme.colors.Color_Gray_3}
                padding="0rem"
                width="100%"
                onClick={onClose}
                fontSize="1.8rem"
              >
                닫기
              </Button>
            </ShopModalButtonSection>
          </ShopModalContent>
        </ShopModalOverlay>
      )}
    </ShopModalWrapper>
  );
};

export default ShopModal;
