import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [position, setPosition] = useState({ lat: 37.566826, lng: 126.9786567 }); // 기본 위치
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setError('Unable to retrieve your location');
      }
    );
  }, []);

  return { position, error };
};

export default useGeolocation;
