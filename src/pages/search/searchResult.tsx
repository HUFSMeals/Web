import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IcStarFull } from "../../../public/assets/images/icons/stars"; // 별점 아이콘
import SearchBar from "./serchBar";
import { maxWidth } from "./serchBar";

// 검색 결과 타입 정의
interface SearchResult {
    id: number;
    restaurant_image: string;
    name: string;
    score_avg: number;
    review_cnt: number;
    address: string;
    category: string;
  }

const SearchResultLogContainer = styled.div`
  display: flex;
  flex-direction: column; // 세로로 정렬
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: ${maxWidth};
`;

const ResultNum = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 8px;
  margin-left: 8px;
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
  margin-bottom: 0.5rem;
`;


const RestaurantAddress = styled.span`
  font-size: 1rem;
  color: #666;
  margin-left: 0.5rem;
  margin-top: 0.1rem;
`;

    const SearchResult: React.FC = () => {
        const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
        const navigate = useNavigate();
        const location = useLocation();
        const query = new URLSearchParams(location.search).get('query');
      
        // 검색 결과 불러오기
        useEffect(() => {
          const fetchSearchResults = async () => {
            if (query) {
              try {
                const response = await fetch(`https://hufsmeals.shop/restaurant/search/${query}/`);
                const data = await response.json();
                if (data.msg === "식당 이름으로 검색 성공") {
                  setSearchResults(data.data);
                }
              } catch (error) {
                console.error("Error fetching search results:", error);
              }
            }
          };
      
          fetchSearchResults();
        }, [query]);
      
        // 식당 클릭 핸들러
        const handleRestaurantClick = (id: number) => {
          navigate(`/shop/${id}`); // 각 식당의 고유 ID로 경로 설정
        };


  return (
    <>
      <Header />
      <SearchResultLogContainer>
      <SearchBar maxWidth={maxWidth} placeholder={query || "검색어 입력하기"} /> {/* 검색 결과 페이지에서의 placeholder 설정 */}
        <SearchResultList>
          <ResultNum>검색 결과 {searchResults.length} </ResultNum>
          {searchResults.map((result) => (
        <SearchResultItem key={result.id} onClick={() => handleRestaurantClick(result.id)}>
        <RestaurantImage src={result.restaurant_image} alt="Restaurant" />
              <RestaurantInfo>
                <RestaurantName>{result.name}</RestaurantName>
                <RestaurantRating>
                  <IcStarFull /> {/* 별점 아이콘 */}
                  <RatingText>{result.score_avg} · 리뷰 {result.review_cnt}</RatingText>
                </RestaurantRating>
                <RestaurantAddress>{result.address}</RestaurantAddress>
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
