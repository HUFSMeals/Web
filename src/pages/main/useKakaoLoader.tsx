import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  const appKey = import.meta.env.VITE_REACT_APP_KAKAO_API_KEY;

  if (!appKey) {
    throw new Error('Kakao API key is not defined');
  }

  useKakaoLoaderOrigin({
    appkey: appKey,
    libraries: ["clusterer", "drawing", "services"],
  });
}
