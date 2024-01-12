import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IcStarFull } from "../../assets/images/icons/stars"; // 별점 아이콘
import SearchBar from "./serchBar";
import { maxWidth } from "./serchBar";

const SearchResultLogContainer = styled.div`
  display: flex;
  flex-direction: column; // 세로로 정렬
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: ${maxWidth};
`;

const ResultTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const SearchResultList = styled.div`
  width: 100%;
  max-width: 600px; // 최대 너비 설정
  margin-bottom : 120px;
  margin-top : 15px;
`;

const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RestaurantImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 1rem;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const RestaurantName = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const RestaurantRating = styled.div`
  display: flex;
  align-items: center;
`;

const RatingText = styled.span`
  font-size: 1rem;
  color: #666;
  margin-left: 0.5rem;
`;

// 임시 데이터
const searchResults = [
    {
        id: 1,
        restaurant_image: "https://source.unsplash.com/random/restaurant1",
        name: "맛있는 식당",
        score_avg: 4.3,
        review_cnt: 120,
        address: "서울시 동대문구 이문로 11길 11",
        category: "한식"
      },
      {
        id: 2,
        restaurant_image: "https://source.unsplash.com/random/restaurant2",
        name: "즐거운 식당",
        score_avg: 4.8,
        review_cnt: 88,
        address: "서울시 관악구 신림동",
        category: "중식"
      },
      {
        id: 3,
        restaurant_image: "https://source.unsplash.com/random/restaurant1",
        name: "맛있는 식당",
        score_avg: 4.3,
        review_cnt: 120,
        address: "서울시 동대문구 이문로 11길 11",
        category: "한식"
      },
      {
        id: 4,
        restaurant_image: "https://source.unsplash.com/random/restaurant2",
        name: "즐거운 식당",
        score_avg: 4.8,
        review_cnt: 88,
        address: "서울시 관악구 신림동",
        category: "중식"
      },
      {
        id: 5,
        restaurant_image: "https://source.unsplash.com/random/restaurant1",
        name: "맛있는 식당",
        score_avg: 4.3,
        review_cnt: 120,
        address: "서울시 동대문구 이문로 11길 11",
        category: "한식"
      },
      {
        id: 6,
        restaurant_image: "https://source.unsplash.com/random/restaurant2",
        name: "즐거운 식당",
        score_avg: 4.8,
        review_cnt: 88,
        address: "서울시 관악구 신림동",
        category: "중식"
      },
      {
        id: 7,
        restaurant_image: "https://source.unsplash.com/random/restaurant1",
        name: "맛있는 식당",
        score_avg: 4.3,
        review_cnt: 120,
        address: "서울시 동대문구 이문로 11길 11",
        category: "한식"
      },
      {
        id: 8,
        restaurant_image: "https://source.unsplash.com/random/restaurant2",
        name: "즐거운 식당",
        score_avg: 4.8,
        review_cnt: 88,
        address: "서울시 관악구 신림동",
        category: "중식"
      },
      {
        id: 9,
        restaurant_image: "https://source.unsplash.com/random/restaurant1",
        name: "맛있는 식당",
        score_avg: 4.3,
        review_cnt: 120,
        address: "서울시 동대문구 이문로 11길 11",
        category: "한식"
      },
      {
        id: 10,
        restaurant_image: "https://source.unsplash.com/random/restaurant2",
        name: "즐거운 식당",
        score_avg: 4.8,
        review_cnt: 88,
        address: "서울시 관악구 신림동",
        category: "중식"
      },
      {
        id: 11,
        restaurant_image: "https://source.unsplash.com/random/restaurant1",
        name: "맛있는 식당",
        score_avg: 4.3,
        review_cnt: 120,
        address: "서울시 동대문구 이문로 11길 11",
        category: "한식"
      },
      {
        id: 12,
        restaurant_image: "https://source.unsplash.com/random/restaurant2",
        name: "즐거운 식당",
        score_avg: 4.8,
        review_cnt: 88,
        address: "서울시 관악구 신림동",
        category: "중식"
      },
    ];

const SearchResult: React.FC = () => {
  return (
    <>
      <Header />
      <SearchResultLogContainer>
        <SearchBar maxWidth={maxWidth} />
        <SearchResultList>
          <ResultTitle>검색 결과 ( {searchResults.length} )</ResultTitle>
          {searchResults.map((result) => (
            <SearchResultItem key={result.id}>
              <RestaurantImage src={result.restaurant_image} alt="Restaurant" />
              <RestaurantInfo>
                <RestaurantName>{result.name}</RestaurantName>
                <RestaurantRating>
                  <IcStarFull /> {/* 별점 아이콘 */}
                  <RatingText>{result.score_avg} · 리뷰 {result.review_cnt}</RatingText>
                </RestaurantRating>
                <p>{result.address}</p> {/* 주소 */}
              </RestaurantInfo>
            </SearchResultItem>
          ))}
        </SearchResultList>
      </SearchResultLogContainer>
      <Footer />
    </>
  );
};

export default SearchResult;
