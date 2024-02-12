import React, {useState,useEffect} from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IcBoo,IcEdit,IcTrash,IcKorean } from "../../../public/assets/images/icons";
//import { Link } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import { RateStars } from "../review/rate";
import { useNavigate } from 'react-router-dom';
import Modal from "../../components/Modal";


interface User {
  id: number;
  nickname: string;
  language: string;
}

interface ReviewImage {
  id: number;
  review_image: string;
}

interface Review {
  id: number;
  user: User;
  nickname: string;
  title: string;
  body: string;
  created_at: string;
  score: number;
  image: ReviewImage[];
}
  
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
  font-size: 16px;
`;

const MyPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]); // 리뷰 상태를 Review 배열로 정의
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    const accessToken = localStorage.getItem('accessToken');
    if (storedUserInfo && accessToken) {
      const userInfo: User = JSON.parse(storedUserInfo);
      setUsername(userInfo.nickname); // 사용자 이름 설정

      // 리뷰 데이터 불러오기
      const fetchMyReviews = async () => {
        try {
          const response = await fetch('https://hufsmeals.shop/review/myreview/', {
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTQ3Mjk2LCJpYXQiOjE3MDc2NTEyOTYsImp0aSI6ImY1ZDI3NjU4NjFmNTQ5ZWRiYmE3MTg5ZWQ4NjdkOWE3IiwidXNlcl9pZCI6M30.cYBy6jrzZFwdpF9erD6oYeGbJXJymuPcRx4JuFtiE4Y'
            }
          });
          const data: { msg: string; data: Review[] } = await response.json();
          if (data.msg === "나의 모든 리뷰 불러오기 성공") {
            setReviews(data.data);
          } else {
            console.error("Failed to fetch reviews:", data.msg);
          }
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      };

      fetchMyReviews();
    }
  }, []);


  const handleEditClick = () => {
    navigate('/createReview');
  };

  const handleTrashClick = (reviewId : number) => {
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
    <MyPageLogContainer>
      <Header />
      <ProfileImageContainer>
        <IcBoo style={{ width: "100px", height: "100px" }} />
      </ProfileImageContainer>
      <UserName>{username || '영준'}</UserName>
      <ReviewContainer>
  <MyReviewText>My Reviews ( {reviews.length} )</MyReviewText>
  {reviews.map((review) => (
    <ReviewCard key={review.id}>
      <ReviewHeader>
        <ReviewInfo>
          <ReviewTitle>{review.title}</ReviewTitle>
          <ReviewRateDate>
            <RateStars score={review.score} />
            <ReviewDate>{review.created_at}</ReviewDate>
          </ReviewRateDate>
        </ReviewInfo>
        <ReviewActions>
          <IcEdit onClick={() => navigate(`/review/update/${review.id}`)} />
          <IcTrash onClick={() => handleTrashClick(review.id)} />
        </ReviewActions>
      </ReviewHeader>
      <ReviewBody>{review.body}</ReviewBody>
      {review.image && review.image.length > 0 && (
        <Carousel images={review.image} />
      )}
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
    </MyPageLogContainer>
  );
};

export default MyPage;