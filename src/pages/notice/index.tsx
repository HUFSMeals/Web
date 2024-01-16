import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Notice {
  id: number;
  title: string;
  created_at: string;
}

interface NoticeDetail extends Notice {
  body: string;
}

const NoticeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const NoticeItem = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

const NoticeDetails = styled.div<{ isOpen: boolean }>`
  width: 100%;
  padding: 1rem;
  border-top: 1px solid #ddd;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const NoticesPage: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<NoticeDetail | null>(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchNotices = async () => {
      try {
        const response = await fetch('/api/notice');
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
        const response = await fetch(`/api/notice/${id}`);
        const data = await response.json();
        setSelectedNotice(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <NoticeListContainer>
      <Header/>
      {notices.map((notice) => (
        <React.Fragment key={notice.id}>
          <NoticeItem onClick={() => toggleDetails(notice.id)}>
            {notice.title}
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
