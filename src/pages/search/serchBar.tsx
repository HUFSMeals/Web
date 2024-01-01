import React, { useState } from 'react';
import styled from 'styled-components';
import { IcSearch } from '../../assets/images/icons';

const maxWidth = '43rem';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  max-width: ${maxWidth};
`;

const InputContainer = styled.div`
  position: relative;
  margin-top: 80px;
  width: calc(100% - 40px); // 좌우로 20px 씩 여백을 줘서 총 40px을 빼줍니다.
  margin-left: auto;  // 중앙 정렬
  margin-right: auto; // 중앙 정렬
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


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Searching for ${searchTerm}`);
    // TODO: Add search functionality
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <InputContainer>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="외대 주변 맛집을 찾아보세요 !"
          />
          {/* Making the icon act as a submit button */}
          <SearchIcon onClick={handleSubmit} />
        </InputContainer>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;
