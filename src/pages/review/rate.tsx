import React from "react";
import styled from "styled-components";

// 별 아이콘의 경로를 정의합니다.
const starFullPath = '/assets/images/icons/IcStarFull.svg';
const starHalfPath = '/assets/images/icons/IcStarHalf.svg';
const starOffPath = '/assets/images/icons/IcStarOff.svg';

interface StarsProps {
  score: number;
}

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 8px;
`;

export const RateStars: React.FC<StarsProps> = ({ score }) => {
  const stars: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    if (score > i) {
      if (score < i + 1) {
        stars.push(<img src={starHalfPath} key={i} alt="half star" />); // 반 별 표시
      } else {
        stars.push(<img src={starFullPath} key={i} alt="full star" />); // 전체 별 표시
      }
    } else {
      stars.push(<img src={starOffPath} key={i} alt="empty star" />); // 빈 별 표시
    }
  }
  return <StarsContainer>{stars}</StarsContainer>;
};
