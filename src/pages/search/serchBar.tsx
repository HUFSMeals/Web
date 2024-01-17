import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, NavigateFunction } from 'react-router-dom'; // useNavigate 훅 import
import { IcSearch } from '../../../public/assets/images/icons';

export const maxWidth = '43rem';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
`;

const InputContainer = styled.div<{ maxWidth: string }>`
  position: relative;
  margin-top: 80px;
  width: calc(${props => props.maxWidth} - 40px);
  margin-left: auto;
  margin-right: auto;
`;


const SearchInput = styled.input`
  padding: 10px;
  padding-right: 40px; // 아이콘 자리 확보
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #f5f5f5; // 인풋 배경을 회색으로 설정
`;

const SearchIcon = styled(IcSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: blue;
  width: 20px;
  height: 20px;
`;

interface SearchBarProps {
  maxWidth: string;
  placeholder?: string;
}

const navigateToSearchResults = (navigate: NavigateFunction, query: string) => {
  // 실제 검색 API를 호출
  fetch(`https://port-0-hufsmeals-1efqtf2dlrgj6rlh.sel5.cloudtype.app/restaurant/search/${query}/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.msg === "식당 이름으로 검색 성공") {
        // 검색 결과 데이터를 검색 결과 페이지 컴포넌트로 전달
        navigate(`/searchResult?query=${encodeURIComponent(query)}`);
      } else {
        console.error('Search failed:', data.msg);
      }
    })
    .catch((error) => {
      console.error('Error searching:', error);
    });
};

const SearchBar: React.FC<SearchBarProps> = ({ maxWidth, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigateToSearchResults(navigate, searchTerm);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <InputContainer maxWidth={maxWidth}>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder={placeholder || "외대 주변 맛집을 찾아보세요 !"}
          />
          <SearchIcon onClick={() => navigateToSearchResults(navigate, searchTerm)} />
        </InputContainer>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;