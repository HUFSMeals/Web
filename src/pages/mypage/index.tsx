import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IcBoo,IcEdit,IcTrash } from "../../assets/images/icons";
//import { Link } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import { RateStars } from "../review/rate";

  
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

const UserName = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;


const ReviewCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  overflow: hidden;
`;

const MyReviewText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  margin-top: 5px;
`;


const ReviewContainer = styled.div`
  width: 90%; // 리뷰 컨테이너 너비
  margin-top: 20px;
  border-top: 1px solid #ccc; // 상단에 구분선
  padding-bottom: 150px;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const ReviewInfo = styled.div`
  flex-grow: 1;
  margin-left: 5px;
  margin-top: 4px;
`;

const ReviewRateDate = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2px;

`;

const ReviewTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ReviewDate = styled.div`
  font-size: 14px;
  color: #94989B;
  margin-top: 4.1px;
`;


const ReviewActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ReviewBody = styled.p`
  padding: 16px;
  margin: 0;
  color: #333;
`;

const myReview ={
	"msg" : "유저의 모든 리뷰 불러오기 성공",
	"data" : [
		{
			"id" : 1, // 리뷰 id
			"nickname" : "김멋사", // 리뷰 작성자 닉네임
			"title" : "어쩌고",
			"body" : "123", // 리뷰 본문
			"created_at" : "2024-01-03",
			"score" : 4.5, // 평점
			"image" : [
				{
					"id" : 1, // 이미지 id
					"review_image" : "https://source.unsplash.com/random/?Cryptocurrency&2"
				},
				{
					"id" : 2,
					"review_image" : "https://source.unsplash.com/random/?Cryptocurrency&1"
				},
			]
		},
    {
			"id" : 2, // 리뷰 id
			"nickname" : "김멋사", // 리뷰 작성자 닉네임
			"title" : "저쩌고",
			"body" : "456", // 리뷰 본문
			"created_at" : "2024-01-01",
			"score" : 4, // 평점
			"image" : [
				{
					"id" : 1, // 이미지 id
					"review_image" : "https://source.unsplash.com/random/?Cryptocurrency&3"
				},
				{
					"id" : 2,
					"review_image" : "https://source.unsplash.com/random/?Cryptocurrency&4"
				},
			]
		}
	]
}

const MyPage = () => {

  return (
    <MyPageLogContainer>
      <Header />
      <ProfileImageContainer>
        <IcBoo style={{ width: "100px", height: "100px" }} />
      </ProfileImageContainer>
      <UserName>김멋사</UserName>
      <ReviewContainer>
        <MyReviewText>My Reviews ( {myReview.data.length} )</MyReviewText>
        {myReview.data.map((review) => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              <IcBoo style={{ width: "40px", height: "40px" }}/> 
              {/* 가게 사진으로 변경 예정 */}
              <ReviewInfo>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ReviewRateDate>
                  <RateStars score= {review.score} />
                  <ReviewDate>{review.created_at}</ReviewDate>
                </ReviewRateDate>
              </ReviewInfo>
              <ReviewActions>
                <IcEdit />
                <IcTrash />
              </ReviewActions>
            </ReviewHeader>
            <ReviewBody>{review.body}</ReviewBody>
            <Carousel images={review.image} />
          </ReviewCard>
        ))}
      </ReviewContainer>
      <Footer />
    </MyPageLogContainer>
  );
};

export default MyPage;