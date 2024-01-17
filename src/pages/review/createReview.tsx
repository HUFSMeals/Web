import React, { useState } from 'react';
import styled from 'styled-components';
import { IcCamera } from '../../../public/assets/images/icons';
import Header from "../../components/Header";
import Footer from "../../components/Footer";



// 별 아이콘의 경로를 정의합니다.
const starFullPath = '/assets/images/icons/IcStarFull.svg';
const starOffPath = '/assets/images/icons/IcStarOff.svg';

// 스타일 컴포넌트 정의
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StarRatingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
`;

// 별 아이콘 스타일 정의
const Star = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

const PhotoUploadButton = styled.button`
  margin-bottom: 2rem;
  padding: 0.5rem;
  border: 1px dashed #ccc;
  background-color: #f8f8f8;
  cursor: pointer;
  width: 80%;
  border-radius: 6px;
`;

const TitleInput = styled.input`
  width: 80%;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const ReviewTextInput = styled.textarea`
  width: 80%;
  height: 200px;
  margin-bottom: 5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  width: 80%;
  background-color: #002D4E;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;

`;

// 식당 정보를 표시하기 위한 스타일 컴포넌트
const RestaurantInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 12rem;
`;

const RestaurantImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const RestaurantName = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;


const PhotoUploadText = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-left: 0.8rem;
`;

const PhotoButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SelectedImageInfo = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1.2rem; // 폰트 크기 조정
  color: #666;
  background: #f0f0f0; // 배경색 추가
  border: 1px solid #ddd; // 테두리 추가
  border-radius: 8px; // 테두리 둥글게
  padding: 10px; // 패딩 추가
  display: flex; // Flexbox로 설정
  align-items: center; // 가로축 중앙 정렬
  gap: 10px; // 아이콘과 텍스트 사이의 간격
`;



const Restaurant = [
    {
        id: 1,
        restaurant_image: "https://source.unsplash.com/random/restaurant1",
        name: "맛있는 식당",
        score_avg: 4.3,
        review_cnt: 120,
        address: "서울시 동대문구 이문로 11길 11",
        category: "한식"
      },
    ];


// 리뷰 페이지 컴포넌트
const ReviewPage = () => {
  const [rating, setRating] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [reviewText, setReviewText] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImageName, setSelectedImageName] = useState('');

  
  // 별점 처리 함수
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  
  // 제목 변경 처리 함수
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  
  // 리뷰 텍스트 변경 처리 함수
  const handleReviewTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  const handlePhotoButtonClick = () => {
    const uploadButton = document.getElementById('photo-upload');
    if (uploadButton) {
      uploadButton.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setSelectedImageName(e.target.files[0].name); // 파일 이름을 상태 변수에 저장
    }
  };

  // 식당 데이터가 존재하는지 확인
  const restaurant = Restaurant.length > 0 ? Restaurant[0] : null;

  if (!restaurant) {
    return <div>식당 정보가 없습니다.</div>;
  }


  // 제출 처리 함수
  const handleSubmit = () => {
    if (selectedImage) {
        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('title', title);
        formData.append('rating', rating.toString());        
        formData.append('reviewText', reviewText); 
      // axios.post('/api/review', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // })
      // .then(response => {
      //   console.log(response.data);
      //   alert('리뷰가 등록되었습니다!');
      // })
      // .catch(error => {
      //   console.error(error);
      // });
   
        alert('리뷰가 등록되었습니다!');
    }
};



  return (
    <ReviewContainer>
        <Header/>
        {/* 식당 정보 표시 */}
        <RestaurantInfoContainer>
            <RestaurantImage src={restaurant.restaurant_image} alt="Restaurant" />
            <RestaurantName>{restaurant.name}</RestaurantName>
        </RestaurantInfoContainer>
        <StarRatingContainer>
            {[...Array(5)].map((_, index) => (
            <Star
                key={index}
                onClick={() => handleRating(index + 1)}
                src={index < rating ? starFullPath : starOffPath} // 별점에 따라 아이콘 변경
            />
            ))}
        </StarRatingContainer>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }} // 파일 입력을 숨깁니다.
            id="photo-upload"
        />
        <PhotoUploadButton onClick={handlePhotoButtonClick}>
            <PhotoButtonContainer>
                <IcCamera />
                <PhotoUploadText>
                    사진 첨부하기
                </PhotoUploadText>
            </PhotoButtonContainer>
        </PhotoUploadButton>
        {selectedImageName && (
        <SelectedImageInfo>선택된 파일: {selectedImageName}</SelectedImageInfo>
        )}
        <TitleInput
            type="text"
            placeholder="제목"
            value={title}
            onChange={handleTitleChange}
        />
        <ReviewTextInput
            placeholder="리뷰를 작성해주세요."
            value={reviewText}
            onChange={handleReviewTextChange}
        />
        <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
        <Footer/>
    </ReviewContainer>
  );
};

export default ReviewPage;