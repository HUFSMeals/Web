import axios from "axios";
import { useEffect, useState } from "react";

const client = axios.create({
  baseURL: `https://${import.meta.env.VITE_BASE_URL}`,
});

const mainFountain = axios.create({
  baseURL: "http://49.50.160.62:8080",
});

export const getWater = async () => {
  const [waterData, setWaterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await mainFountain.get("/api/getAllWater/0");
      setWaterData(response.data);
    };

    fetchData();
  }, []); // 빈 배열을 두어 한 번만 호출되도록 설정

  return waterData;
};
export const postPoint = async () => {
  const [pointData, setPointData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await mainFountain.post("api/createUserPoint/0/0");
        // Assuming your API returns data, update state accordingly
        setPointData(response.data); // Update with your actual data structure
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors as needed
      }
    };

    fetchData();
  }, []);
};
export const getVol = async () => {
  const [volData, setVolData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await mainFountain.get("/api/getAllVolunteers");
      setVolData(response.data);
    };

    fetchData();
  }, []); // 빈 배열을 두어 한 번만 호출되도록 설정

  return volData;
};
export const getWaterVol = async () => {
  const [waterVolData, setWaterVolData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await mainFountain.get("api/getWaterVolunteers");
      setWaterVolData(response.data);
    };

    fetchData();
  }, []); // 빈 배열을 두어 한 번만 호출되도록 설정

  return waterVolData;
};

export const getPoint = async () => {
  const [point, setPoint] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await mainFountain.post("api/createUserPoint/0/0");
      setPoint(response.data);
    };

    fetchData();
  }, []); // 빈 배열을 두어 한 번만 호출되도록 설정
};

export default { client };
