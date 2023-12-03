import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { theme } from "../styles/theme";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text1: string;
  text2?: string;
  action?: string;
  onAction?: () => void;
  imageUrl?: string;
}

const ModalImage = styled.img`
  max-width: 100%; // 모달 너비에 맞춤
  max-height: 200px; // 적절한 최대 높이 설정
  width: auto; // 너비 자동 조절
  height: auto; // 높이 자동 조절
  object-fit: contain; // 이미지 비율 유지
  margin-bottom: 8px; // 필요하다면 여백 조정
`;

export const ContentWrapper = styled.section`
  width: 100%;
  padding-left: 2.3rem;
  padding-right: 2.3rem;
`;

export const ModalButtonSection = styled(ContentWrapper)`
  height: 23%;
  padding-left: 0rem;
  padding-right: 0rem;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.p`
  color: ${({ theme }) => theme.colors.Color_Gray_Black};
  text-align: left;
  line-height: 5.3rem;
  letter-spacing: -0.03em;
  font-size: large;
  font-weight: bold;
`;

export const ModalBody = styled.p`
  ${({ theme }) => theme.fonts.Body1_Pretendard_Medium_16}
  color: ${({ theme }) => theme.colors.Color_Gray_Black};
`;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  text1,
  text2,
  action,
  onAction,
  imageUrl,
}) => {
  return (
    <ModalWrapper>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            {imageUrl && <ModalImage src={imageUrl} alt={title} />} // 변경된 스타일 적용
            <ModalTitle>{title}</ModalTitle>
            <ModalBody>{text1}</ModalBody>
            {text2 && <ModalBody>{text2}</ModalBody>}
            <ModalButtonSection>
              {action && onAction && (
                <Button
                  backgroundColor={theme.colors.Color_White}
                  color={theme.colors.Color_Red}
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
            </ModalButtonSection>
          </ModalContent>
        </ModalOverlay>
      )}
    </ModalWrapper>
  );
};

export default Modal;
