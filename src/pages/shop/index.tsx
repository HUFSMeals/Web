import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/carousel/Carousel";
import { RateStars } from "../review/rate";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import { useParams } from 'react-router-dom';



interface IntegratedShopDetails {
    id: number;
    name: string;
    restaurant_image: string;
    opening_hours: string;
    address: string;
    category: string;
    phone: string;
    review_cnt: number;
    score_avg: number;
    review: Review[];
    menu: Menu[];
  }
  
  // 메뉴 인터페이스 정의
  interface Menu {
    id: number;
    name: string;
    menu_image: string;
  }
  
  // 리뷰 인터페이스 정의
  interface Review {
    id: number;
    image: ReviewImage[];
    user: {
      id: number;
      nickname: string;
      language: string;
    };
    title: string;
    body: string;
    src_lang: string;
    created_at: string;
    score: number;
  }
  
  // 리뷰 이미지 인터페이스 정의
  interface ReviewImage {
    id: number;
    review_image: string;
  }
  

// 아이콘 경로 정의
const booPath = '/assets/images/icons/IcBoo.svg';
const editPath = '/assets/images/icons/IcEdit.svg';
const trashPath = '/assets/images/icons/IcTrash.svg';
const timePath = '/assets/images/icons/IcTime.svg';
const callPath = '/assets/images/icons/IcCall.svg';
const locationPath = '/assets/images/icons/IcLocation.svg';

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
  justify-content: left;
  align-items: center;
  font-size: 19px;
  font-weight: bold;
  padding: 10px;
  margin: 5px;
`;

const ReviewContainer = styled.div`
  width: 100%; // 너비를 100%로 설정
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-bottom: 150px;
  padding-left: 5%; // 컨테이너의 양쪽에 여백을 줍니다.
  padding-right: 5%;
  box-sizing: border-box;
  padding-top: 10px;
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

const ReviewNumCreate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const CreateReviewButton = styled.button`
  padding: 6px 10px;
  background-color: #8ADAF8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer; // 마우스 오버 시 커서 변경
  font-size: 16px;
  transition: background-color 0.2s; // 배경색 변경 애니메이션

  &:hover {
    background-color: #1ADAF8; // 호버 시 배경색 변경
  }
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
  padding: 18px;
  margin: 0;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
`;


const InfoWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

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
  margin: 5px;
  font-size: 15px;
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
  font-size: 18px;
  padding: 10px;
  margin-top: 5px;
  margin-left: 5px;
`;



const Shop: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
  const [integratedShopDetails, setIntegratedShopDetails] = useState<IntegratedShopDetails | null>(null);

  // API 호출을 위한 상점 ID (예시로 1 사용, 실제 구현에서는 동적으로 변경)
  const { id: shopId } = useParams();

  useEffect(() => {
    if (shopId) {
      const fetchIntegratedShopDetails = async () => {
        try {
          // 헤더 설정
          const headers = new Headers({
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2ODA5MzU1LCJpYXQiOjE3MDU1MTMzNTUsImp0aSI6Ijc3OGE5OTg0ZjI4NjQyM2JiNWUyMGE3MjU5ZmE2NGYwIiwidXNlcl9pZCI6MX0.OExlMIcEj5pQKI3eGBXynZOSFwtqUheiaafIor8QqCM'
          });
  
          const response = await fetch(`https://port-0-hufsmeals-1efqtf2dlrgj6rlh.sel5.cloudtype.app/restaurant/detail/integ/${shopId}/`, { headers });
          const data = await response.json();
          if (data.msg === "식당 세부정보 불러오기 성공") {
            setIntegratedShopDetails(data.data);
          }
        } catch (error) {
          console.error("Error fetching integrated shop details:", error);
        }
      };
  
      fetchIntegratedShopDetails();
    }
  }, [shopId]);
  
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

  if (!integratedShopDetails) {
    return <div>Loading...</div>;
  }
    return (
        <>
          <Header />
          {integratedShopDetails && (
          <ShopContainer>
            <ShopImage src={integratedShopDetails.restaurant_image} alt="가게 대표 이미지" />
            <ShopDetails>
                <ShopNameRating>
                    <ShopName>{integratedShopDetails.name}</ShopName>
                    <ReviewRateDate>
                        <RateStars score={integratedShopDetails.score_avg} />
                        <ReviewDate>ㆍ리뷰 {integratedShopDetails.review_cnt}</ReviewDate>
                    </ReviewRateDate>
                </ShopNameRating>
              <ShopRating>
                {/* 별점 렌더링 */}
              </ShopRating>
              <ShopInfo>
                <InfoWithIcon>
                  <Icon src={locationPath} alt="Location" />
                  <ShopInfoItem>{integratedShopDetails.address}</ShopInfoItem>
                </InfoWithIcon>
                <InfoWithIcon>
                  <Icon src={callPath} alt="Call" />
                  <ShopInfoItem>{integratedShopDetails.phone}</ShopInfoItem>
                </InfoWithIcon>
                <InfoWithIcon>
                  <Icon src={timePath} alt="Time" />
                  <ShopInfoItem>{integratedShopDetails.opening_hours}</ShopInfoItem>
                </InfoWithIcon>
              </ShopInfo>
            </ShopDetails>
            <DishesContainer>
              <MenuText>메뉴 {integratedShopDetails.menu.length}</MenuText>
              <SignatureDishesContainer>
                {integratedShopDetails.menu.map((dish) => (
                  <DishCard key={dish.id}>
                    <DishImage src={dish.menu_image} alt={dish.name} />
                    <DishName>{dish.name}</DishName>
                  </DishCard>
                ))}
              </SignatureDishesContainer>
            </DishesContainer>
          </ShopContainer>
          )}
          <ReviewContainer>
            <ReviewNumCreate>
              <MyReviewText>최근 리뷰 {integratedShopDetails.review.length}개</MyReviewText>
              <CreateReviewButton onClick={() => navigate('/createReview')}>
                리뷰 작성하기
              </CreateReviewButton>

            </ReviewNumCreate>
            {integratedShopDetails.review.map((review) => (
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
