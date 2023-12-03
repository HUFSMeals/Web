import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGeolocation from './useGeolocation';
import useKakaoLoader from './useKakaoLoader';
import { styled } from 'styled-components';

const StyledMap = styled.div`
  height: calc(100vh - 70px - 40px);
  margin-top: 72px;
`;

const MapComponent = () => {
  const { position, error } = useGeolocation();
  useKakaoLoader()

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledMap>
      <Map center={position} style={{ width: "100%", height: "100%" }} level={3}>
        <MapMarker position={position} />
      </Map>
    </StyledMap>
  );
};

export default MapComponent;
