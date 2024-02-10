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

const myReview ={
	"msg" : "유저의 모든 리뷰 불러오기 성공",
	"data" : [
		{
			"id" : 1, // 리뷰 id
			"nickname" : "김멋사", // 리뷰 작성자 닉네임
			"title" : "투썸플레이스 외대점",
			"body" : "코히 한사바리 굿 ~.~", // 리뷰 본문
			"created_at" : "2024-01-03",
			"score" : 4.5, // 평점
			"image" : [
				{
					"id" : 1, // 이미지 id
					"review_image" : "https://source.unsplash.com/random/?Coffee&6"
				},
				{
					"id" : 2,
					"review_image" : "https://source.unsplash.com/random/?Coffee&2"
				},
			]
		},
    {
			"id" : 2, // 리뷰 id
			"nickname" : "김멋사", // 리뷰 작성자 닉네임
			"title" : "1988",
			"body" : "N번째 멋사 회식.. 망고빙수와 치킨오꼬노미야끼 굿 ..", // 리뷰 본문
			"created_at" : "2024-01-01",
			"score" : 4, // 평점
			"image" : [
				{
					"id" : 1, // 이미지 id
					"review_image" : "https://source.unsplash.com/random/?Cocktail&3"
				},
				{
					"id" : 2,
					"review_image" : "https://source.unsplash.com/random/?Cocktail&5"
				},
			]
		},
    
	]
}

const MyPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
  const [username, setUsername] = useState<string>('');

  console.log(localStorage.getItem('accessToken')); // 접근 토큰 출력
  console.log(localStorage.getItem('userInfo')); // 사용자 정보 출력
  useEffect(() => {
    // 로컬 스토리지에서 'user_info'라는 키로 저장된 데이터 불러오기
    const storedUserInfo = localStorage.getItem('user_info');
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo);
      setUsername(userInfo.nickname); // 닉네임 설정
    } else {
      console.log('No user info found in localStorage');
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
        <MyReviewText>My Reviews ( {myReview.data.length} )</MyReviewText>
        {myReview.data.map((review) => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              <IcKorean style={{ width: "40px", height: "40px" }}/> 
              {/* 가게 사진으로 변경 예정 */}
              <ReviewInfo>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ReviewRateDate>
                  <RateStars score= {review.score} />
                  <ReviewDate>{review.created_at}</ReviewDate>
                </ReviewRateDate>
              </ReviewInfo>
              <ReviewActions>
                <IcEdit onClick={handleEditClick} />
                <IcTrash onClick={() => handleTrashClick(review.id)} />
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
    </MyPageLogContainer>
  );
};

export default MyPage;