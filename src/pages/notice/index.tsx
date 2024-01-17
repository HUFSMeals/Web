import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { IcToggleDown, IcToggleUp } from '../../../public/assets/images/icons';

interface Notice {
  id: number;
  title: string;
  created_at: string;
}

interface NoticeDetail extends Notice {
  body: string;
}

const ToggleIcon = styled.img`
  float: right;
  cursor: pointer;
`;

const NoticeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`;

const NoticeItem = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const NoticeDetails = styled.div<{ isOpen: boolean }>`
  width: 100%;
  padding: 2rem;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background-color: #f9f9f9;
  font-size: 15px;
`;


const NoticeTitleDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;

`;

const NoticeTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const NoticeDate = styled.div`
  font-size: 14px;
  color: #94989B;
  margin-top: 10px;
`;


const NoticesPage: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<NoticeDetail | null>(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchNotices = async () => {
      try {
        const response = await fetch('https://port-0-hufsmeals-1efqtf2dlrgj6rlh.sel5.cloudtype.app/notice/');
        const data = await response.json();
        setNotices(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotices();
  }, []);

  const toggleDetails = async (id: number) => {
    if (selectedNotice && selectedNotice.id === id) {
      setSelectedNotice(null);
    } else {
      // TODO: Replace with actual API call
      try {
        const response = await fetch(`https://port-0-hufsmeals-1efqtf2dlrgj6rlh.sel5.cloudtype.app/notice/${id}/`);
        const data = await response.json();
        setSelectedNotice(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const renderToggleIcon = (id: number) => {
    return selectedNotice?.id === id ? IcToggleUp : IcToggleDown;
  };
  return (
    <NoticeListContainer>
      <Header/>
      {notices.map((notice) => (
        <React.Fragment key={notice.id}>
          <NoticeItem onClick={() => toggleDetails(notice.id)}>
            <NoticeTitleDate>
              <NoticeTitle>{notice.title}</NoticeTitle>
              <NoticeDate>{notice.created_at}</NoticeDate>
            </NoticeTitleDate>
            <ToggleIcon 
              src={renderToggleIcon(notice.id)} 
              onClick={() => toggleDetails(notice.id)}
            />
          </NoticeItem>
          {selectedNotice?.id === notice.id && (
            <NoticeDetails isOpen={selectedNotice !== null}>
              {selectedNotice.body}
            </NoticeDetails>
          )}
        </React.Fragment>
      ))}
      <Footer/>
    </NoticeListContainer>
  );
};

export default NoticesPage;