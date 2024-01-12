import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 import
import { IcSearch } from '../../assets/images/icons';

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

// SearchBar 컴포넌트의 props 타입을 정의합니다.
interface SearchBarProps {
  maxWidth: string;
}

interface SearchBarProps {
  maxWidth: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ maxWidth }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 검색 결과를 처리하고, 검색 결과 페이지로 이동합니다.
    navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <InputContainer maxWidth={maxWidth}>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="외대 주변 맛집을 찾아보세요 !"
          />
          <SearchIcon onClick={handleSubmit} />
        </InputContainer>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;