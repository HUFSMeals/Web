import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginLoading: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      postCodeToBackend(code);
    } else {
      // code 파라미터가 없는 경우 메인 페이지로 리다이렉트
      navigate('/');
    }
  }, [navigate]);

  const postCodeToBackend = async (code: string) => {
    try {
      const response = await fetch('https://hufsmeals.shop/accounts/userinfo/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // 토큰과 사용자 정보를 저장
        localStorage.setItem('accessToken', data.data.access_token);
        localStorage.setItem('userInfo', JSON.stringify(data.data.user_info));

        // 메인 페이지로 리다이렉트
        navigate('/');
      } else {
        console.error('Login failed:', response.status);
        // 로그인 실패 시 처리 로직
        navigate('/login'); // 로그인 페이지로 다시 리다이렉트
      }
    } catch (error) {
      console.error('Error during login:', error);
      navigate('/login'); // 오류 발생 시 로그인 페이지로 리다이렉트
    }
  };

  return (
    <div>
      <p>Loading... Please wait.</p>
    </div>
  );
};

export default LoginLoading;
