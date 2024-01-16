import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/carousel/Carousel";
import { RateStars } from "../review/rate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

// 아이콘 경로 정의
const booPath = 'src/assets/images/icons/IcBoo.svg';
const editPath = 'src/assets/images/icons/IcEdit.svg';
const trashPath = 'src/assets/images/icons/IcTrash.svg';
const timePath = 'src/assets/images/icons/IcTime.svg';
const callPath = 'src/assets/images/icons/IcCall.svg';
const locationPath = 'src/assets/images/icons/IcLocation.svg';

// 아이콘 스타일 컴포넌트
const Icon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 3px;
`;

const ReviewCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  overflow: hidden;
  width: 100%; // 전체 너비를 사용하도록 설정
  max-width: 768px; // 최대 너비 설정, 필요한 경우 조정
  box-sizing: border-box; // 패딩을 포함한 너비를 적용
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
  width: 100%; // 너비를 100%로 설정
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-bottom: 150px;
  padding-left: 5%; // 컨테이너의 양쪽에 여백을 줍니다.
  padding-right: 5%;
  box-sizing: border-box;
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
  font-size: 16px;
`;


const InfoWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
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


// 스타일 컴포넌트 정의
const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
`;

const ShopImage = styled.img`
  width: 100%;
  height: auto; // 이미지 비율 유지
  margin-bottom: 1rem;
`;

const ShopDetails = styled.section`
  padding: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const ShopName = styled.h1`
  font-size: 2.3rem;
  color: #333;
  margin-right: 0.75rem;
`;

const ShopRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // 별점을 중앙에 배치
  font-size: 1.5rem;
  color: #333;
  margin: 0.5rem 0;
`;


const ShopInfo = styled.div`
  margin-top: 1rem;
`;

const ShopInfoItem = styled.p`
  font-size: 1.4rem;
  color: #666;
`;

const ShopNameRating = styled.div`
    display: flex;
    flex-direction: row;
`;


const SignatureDishesContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const DishCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background: #f9f9f9;
  border-radius: 10px;
`;

const DishName = styled.h3`
  margin: 5px 0;
`;

const DishImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  margin-bottom: 5px;

`;

const DishesContainer = styled.div`
  width: 100%;
`;

const MenuText = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  margin-top: 5px;
  margin-left: 5px;
`;

const dishes = [
    { id: 1, name: '기린밥', imageUrl: 'https://source.unsplash.com/random/2' },
    { id: 2, name: '기린라면', imageUrl: 'https://source.unsplash.com/random/1' },
  ];
  


// 실제 데이터를 받아올 때는 이 부분을 API 호출로 대체합니다.
const shopData = {
  name: "기린포차",
  restaurant_image: "https://source.unsplash.com/random/?Cryptocurrency&3",
  opening_hours: "17:00",
  address: "서울시 동대문구 이문로 11길 11",
  category: "술집",
  phone: "02-1111-1111",
  review_cnt: 10,
  score_avg: 4.6,
};

// 컴포넌트 정의
const Shop: React.FC = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

    const handleEditClick = () => {
        navigate('/createReview');
    };

    const handleTrashClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const reviewId = Number(event.currentTarget.getAttribute('data-review-id'));
        setSelectedReviewId(reviewId);
        setIsModalOpen(true);
    };
    const handleDeleteConfirm = () => {
        // Perform deletion here, maybe call an API
        console.log(`Deleting review with ID: ${selectedReviewId}`);
        setIsModalOpen(false);
    };
    const handleDeleteCancel = () => {
        setIsModalOpen(false);
        };
        
    return (
        <>
          <Header />
          <ShopContainer>
            <ShopImage src={shopData.restaurant_image} alt="가게 대표 이미지" />
            <ShopDetails>
                <ShopNameRating>
                    <ShopName>{shopData.name}</ShopName>
                    <ReviewRateDate>
                        <RateStars score={shopData.score_avg} />
                        <ReviewDate>ㆍ리뷰 {shopData.review_cnt}</ReviewDate>
                    </ReviewRateDate>
                </ShopNameRating>
              <ShopRating>
                {/* 별점 렌더링 */}
              </ShopRating>
              <ShopInfo>
                <InfoWithIcon>
                  <Icon src={locationPath} alt="Location" />
                  <ShopInfoItem>{shopData.address}</ShopInfoItem>
                </InfoWithIcon>
                <InfoWithIcon>
                  <Icon src={callPath} alt="Call" />
                  <ShopInfoItem>{shopData.phone}</ShopInfoItem>
                </InfoWithIcon>
                <InfoWithIcon>
                  <Icon src={timePath} alt="Time" />
                  <ShopInfoItem>{shopData.opening_hours}</ShopInfoItem>
                </InfoWithIcon>
              </ShopInfo>
            </ShopDetails>
            <DishesContainer>
                <MenuText>메뉴 {dishes.length}</MenuText>
                <SignatureDishesContainer>
                    {dishes.map((dish) => (
                        <DishCard key={dish.id}>
                        <DishImage src={dish.imageUrl} alt={dish.name} />
                        <DishName>{dish.name}</DishName>
                        </DishCard>
                    ))}
                </SignatureDishesContainer>
            </DishesContainer>
          </ShopContainer>
          <ReviewContainer>
        <MyReviewText>Recent Reviews ({myReview.data.length})</MyReviewText>
        {myReview.data.map((review) => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              {/* IcBoo 아이콘을 img 태그로 변경 */}
              <img src={booPath} style={{ width: "40px", height: "40px" }} alt="User" />
              <ReviewInfo>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ReviewRateDate>
                  <RateStars score={review.score} />
                  <ReviewDate>{review.created_at}</ReviewDate>
                </ReviewRateDate>
              </ReviewInfo>
              <ReviewActions>
                {/* IcEdit와 IcTrash 아이콘을 img 태그로 변경 */}
                <img src={editPath} alt="Edit" style={{ width: "24px", height: "24px" }} onClick={handleEditClick}/>
                <img src={trashPath} alt="Trash" style={{ width: "24px", height: "24px" }} onClick={handleTrashClick} data-review-id={review.id}/>
              </ReviewActions>
            </ReviewHeader>
            <ReviewBody>{review.body}</ReviewBody>
            <Carousel images={review.image} />
          </ReviewCard>
        ))}
      </ReviewContainer>
      <Footer />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleDeleteCancel}
          title="리뷰 삭제하기"
          text1="리뷰를 삭제 하시겠습니까?"
          action="삭제"
          onAction={handleDeleteConfirm}
        />
      )}
    </>
  );
};

export default Shop;
