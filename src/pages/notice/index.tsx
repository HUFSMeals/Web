import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


interface Fountain {
    fountainId: number;
    fountainName: string;
    location_x: number;
    location_y: number;
    fountainAddress: string;
    foundtainDetail: string;
    fountainState: string;
    fountainWaterState: string;
    visited: boolean;
    visitedDate: string | null;
    userId: number;
  }
interface NoticeRecord {
    noticeId: number;
    noticeType: string;
    noticeContent: string;
    noticeDate: string;
    fountain: Fountain;
  }
  

const NoticeDataContainer = styled.div`
  padding: 20px;
  margin-top: 100px;
`;

const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NoticeItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 30px; /* 원하는 간격으로 조정 */
  margin-bottom: 20px;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;


const NoticeDate = styled.span`
  font-weight: bold;
  color: #666;
  font-size: 1.4rem;
`;

const NoticeLocation = styled.span`
  color: #666;
  font-size: 1.4rem;
`;



const NoticeLogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const Notice: React.FC = () => {
    const [NoticeData, setNoticeData] = useState<NoticeRecord[]>([]);
    const fountainId = 6
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://49.50.160.62:8080/api/getAllNotice/${fountainId}`);
          const data: NoticeRecord[] = await response.json();
          setNoticeData(data);
        } catch (error) {
          console.error("데이터 로딩 중 오류 발생:", error);
        }
      };
  
      fetchData();
    }, [fountainId]);
  
    return (
        <NoticeLogContainer>
          <Header />
          <NoticeDataContainer>
            <h2>경보 내역</h2>
            <NoticeList>
              {NoticeData.map((record, index) => (
                <NoticeItem key={index}>
                  <NoticeDate>{record.noticeDate.substring(0, 10)}</NoticeDate>
                  <NoticeLocation>{record.fountain.fountainName}</NoticeLocation>
                </NoticeItem>
              ))}
            </NoticeList>
          </NoticeDataContainer>
          <Footer />
        </NoticeLogContainer>
      );
    };
    
    export default Notice;