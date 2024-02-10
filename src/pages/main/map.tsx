import React, {useState,useEffect} from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGeolocation from './useGeolocation';
import useKakaoLoader from './useKakaoLoader';
import { styled } from 'styled-components';
import { PicBoo, PicKorean, PicAlchohol, PicSchoolFood, PicCafe, PicChinese, PicFastFood, PicJapanese, PicMeat, PicWestern, PicWorldFood } from '../../../public/assets/images/icons';
import ShopModal from '../../components/ShopModal';
import { useNavigate } from 'react-router-dom';

const StyledMap = styled.div`
  height: calc(100vh - 70px - 40px);
  margin-top: 15px;
`;
interface Shop {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  category: string;
  address: string;
  phone: string;
  review_cnt: number;
  score_avg: number;
  opening_hours: string; // 선택적 속성으로 추가
}

const MapComponent: React.FC = () => {
  const navigate = useNavigate();
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeData, setPlaceData] = useState<Shop[]>([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch('https://hufsmeals.shop/restaurant/location/');
        const data = await response.json();
        if (data.msg === "식당 위/경도 반환 성공") {
          setPlaceData(data.data.map((shop: Shop) => ({
            ...shop,
            latitude: shop.latitude,
            longitude: shop.longitude
          })));
        }
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
  
    fetchShops();
  }, []);
  
  // This function is called when a MapMarker is clicked
  const handleMarkerClick = (shop : Shop) => {
    setSelectedShop(shop); // Set the selected shop
    setIsModalOpen(true); // Open the modal
  };

  const handleShopDetail = () => {
    if (selectedShop && selectedShop.id) {
      navigate(`/shop/${selectedShop.id}`); // 선택된 상점의 ID를 경로에 포함
    }
    setIsModalOpen(false);
  };
  
const handleModalCancel = () => {
  setIsModalOpen(false);
  };

const getIconForCategory = (category : string) => {
  switch (category) {
    case "SchoolFood":
      return PicSchoolFood;
    case "Alchohol":
      return PicAlchohol;
    case "Korean":
      return PicKorean;
    case "Cafe":
      return PicCafe;
    case "Chinese":
      return PicChinese;
    case "FastFood":
      return PicFastFood;
    case "Japanese":
      return PicJapanese;
    case "Meat":
      return PicMeat;
    case "Western":
      return PicWestern;
    case "WorldFood":
      return PicWorldFood;
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
            onClick={() => handleMarkerClick(place)}
            title={place.name}
            image={{ src: getIconForCategory(place.category), size: { width: 36, height: 36 } }}
          />
        ))}
      </Map>
      {isModalOpen && selectedShop && (
        <ShopModal
          isOpen={isModalOpen}
          onClose={handleModalCancel}
          action="자세히 보기"
          onAction={handleShopDetail}
          shop={selectedShop}
        />
      )}
    </StyledMap>
  );
};

export default MapComponent;