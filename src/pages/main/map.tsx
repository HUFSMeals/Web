import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGeolocation from './useGeolocation';
import useKakaoLoader from './useKakaoLoader';
import { styled } from 'styled-components';
import { PicBoo, PicKorean, PicSoju, PicBoonsik } from '../../assets/images/icons';

const StyledMap = styled.div`
  height: calc(100vh - 70px - 40px);
  margin-top: 72px;
`;

const MapComponent = () => {
  const placeData = [
    {
    name: "기린포차",
    latitude: 37.656826, // 숫자형태의 위도
    longitude: 127.0786567, // 숫자형태의 경도
    opening_hours: "17:00",
    address: "서울시 동대문구 이문로 11길 11",
    category: "술집",
    phone: "02-1111-1111",
    review_cnt: "10",
    score_avg: "5",
    statusCode: 200
  },
  {
    name: "1988",
    latitude: 37.656826, // 숫자형태의 위도
    longitude: 127.0796567, // 숫자형태의 경도
    opening_hours: "17:00",
    address: "서울시 동대문구 이문로 11길 11",
    category: "한식",
    phone: "02-1111-1111",
    review_cnt: "10",
    score_avg: "5",
    statusCode: 200
  },
  {
    name: "이떡집",
    latitude: 37.657426, // 숫자형태의 위도
    longitude: 127.0796567, // 숫자형태의 경도
    opening_hours: "17:00",
    address: "서울시 동대문구 이문로 11길 11",
    category: "분식",
    phone: "02-1111-1111",
    review_cnt: "10",
    score_avg: "5",
    statusCode: 200
  }
];
const getIconForCategory = (category : string) => {
  switch (category) {
    case "분식":
      return PicBoonsik;
    case "술집":
      return PicSoju;
    case "한식":
      return PicKorean;
    default:
      return PicBoo; // 기본 아이콘
  }
};

  const { position, error } = useGeolocation();
  useKakaoLoader()

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledMap>
      <Map center={position} style={{ width: "100%", height: "100%" }} level={3}>
        <MapMarker 
          position={position} 
          image={{ src: PicBoo, size: { width: 36, height: 36 } }} 
        />
        {placeData.map((place, index) => (
          <MapMarker
            key={index}
            position={{ lat: place.latitude, lng: place.longitude }}
            title={place.name}
            image={{ src: getIconForCategory(place.category), size: { width: 36, height: 36 } }}
          />
        ))}
      </Map>
    </StyledMap>
  );
};

export default MapComponent;
